const st=document.getElementById('st');
function say(t){ st.textContent=t; }

function pack(items){
  const posts=[], polls=[], market=[];
  items.forEach(it=>{
    if(it.kind==='q') polls.push(it.x);
    else if(it.kind==='m') market.push(it.x);
    else posts.push(it.x);
  });
  return JSON.stringify({posts,polls,market});
}

function tabQuery(q){ return new Promise(r=>chrome.tabs.query(q,r)); }
function send(tabId, msg){
  return new Promise(r=>{
    chrome.tabs.sendMessage(tabId, msg, res=> r(chrome.runtime.lastError?null:res));
  });
}
function getSeen(chat){
  return new Promise(r=>chrome.storage.local.get(['seen'], d=>{
    r((d.seen&&d.seen[chat])||{});
  }));
}
function putSeen(chat, map){
  return new Promise(r=>chrome.storage.local.get(['seen'], d=>{
    const seen=d.seen||{};
    seen[chat]=Object.assign({}, seen[chat]||{}, map);
    chrome.storage.local.set({seen}, r);
  }));
}

async function scrapeActive(){
  const tabs=await tabQuery({active:true, currentWindow:true});
  const tab=tabs[0];
  if(!tab||!tab.id) throw new Error('탭 없음');
  const url=tab.url||'';
  if(!/grok\.com|x\.com/.test(url)) throw new Error('그록 채팅 탭에서 눌러 주세요');
  const res=await send(tab.id,{type:'scrape'});
  if(!res||!res.ok) throw new Error('이 페이지에서 글을 읽지 못했습니다. 채팅을 연 뒤 다시 눌러 주세요.');
  return res.result;
}

async function freshOf(result){
  const seen=await getSeen(result.chat);
  return (result.items||[]).filter(it=>!seen[it.key]);
}

async function mark(result, items){
  const map={};
  items.forEach(it=>map[it.key]=1);
  await putSeen(result.chat, map);
}

async function campusTabs(){
  const tabs=await tabQuery({});
  const hits=[];
  for(const t of tabs){
    if(!t.id||!t.url||/^chrome|^edge|^about/.test(t.url)) continue;
    const res=await send(t.id,{type:'ping'});
    if(res&&res.campus) hits.push(t);
  }
  return hits;
}

document.getElementById('go').onclick=async()=>{
  say('읽는 중…');
  try{
    const result=await scrapeActive();
    const fresh=await freshOf(result);
    if(!fresh.length){
      say('이 채팅에서 새 글이 없습니다. 이미 가져온 글만 있습니다.');
      return;
    }
    const json=pack(fresh);
    const tabs=await campusTabs();
    let sent=0;
    for(const t of tabs){
      const ok=await send(t.id,{type:'ingest', text:json, name:'그록 채팅'});
      if(ok&&ok.ok) sent++;
    }
    await mark(result, fresh);
    if(!sent){
      await navigator.clipboard.writeText(json).catch(()=>{});
      say('새 글 '+fresh.length+'개를 복사했습니다. 캠퍼스타임 기계실에 붙여넣으세요. (사이트 탭을 열어 두면 바로 들어갑니다)');
      return;
    }
    say('새 글 '+fresh.length+'개를 캠퍼스타임에 넣었습니다.');
  }catch(e){ say(e.message||String(e)); }
};

document.getElementById('copy').onclick=async()=>{
  say('읽는 중…');
  try{
    const result=await scrapeActive();
    const fresh=await freshOf(result);
    if(!fresh.length){ say('새 글이 없습니다.'); return; }
    await navigator.clipboard.writeText(pack(fresh));
    await mark(result, fresh);
    say('새 글 '+fresh.length+'개를 복사했습니다.');
  }catch(e){ say(e.message||String(e)); }
};
