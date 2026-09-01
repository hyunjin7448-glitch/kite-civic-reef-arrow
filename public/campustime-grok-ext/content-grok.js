const FAKE=new Set([
  '조별과제 vs 개인과제',
  '[거래] 공학용 계산기 팔아요',
  '공학용 계산기 팔아요'
]);

function matchJson(s,i){
  const open=s[i]; if(open!=='{'&&open!=='[') return -1;
  const close=open==='{'?'}':']';
  let d=0, q=0, esc=0;
  for(let k=i;k<s.length;k++){
    const c=s[k];
    if(q){
      if(esc){ esc=0; continue; }
      if(c==='\\'){ esc=1; continue; }
      if(c===q) q=0;
      continue;
    }
    if(c==='"'||c==="'"){ q=c; continue; }
    if(c===open) d++;
    else if(c===close){ d--; if(!d) return k; }
  }
  return -1;
}
function takeBlock(raw){
  try{ return JSON.parse(raw); }catch(e){}
  try{ return JSON.parse(raw.replace(/,\s*([}\]])/g,'$1')); }catch(e){}
  return null;
}
function jsonBlocks(text){
  const t=String(text), out=[];
  for(let i=0;i<t.length;i++){
    if(t[i]!=='{'&&t[i]!=='[') continue;
    const end=matchJson(t,i);
    if(end<0) continue;
    const v=takeBlock(t.slice(i,end+1));
    if(v!=null && (Array.isArray(v)||typeof v==='object')){ out.push(v); i=end; }
  }
  return out;
}
function isMarket(x){
  return !!(x&&typeof x==='object'&&x.owner&&(x.price!=null||x.name)
    &&!(Array.isArray(x.options)&&x.options.length>=2));
}
function pushItem(bag,x){
  if(!x||typeof x!=='object') return;
  if(FAKE.has(String(x.title||''))||FAKE.has(String(x.name||''))) return;
  if(isMarket(x)) bag.market.push(x);
  else if(Array.isArray(x.options)&&x.options.length>=2) bag.polls.push(x);
  else if(x.title) bag.posts.push(x);
}
function mergeBlocks(blocks){
  const bag={posts:[],polls:[],market:[]};
  blocks.forEach(b=>{
    if(Array.isArray(b)) b.forEach(x=>pushItem(bag,x));
    else if(b&&typeof b==='object'){
      [].concat(b.posts||[], b.feed||[], b.polls||[], b.market||[]).forEach(x=>pushItem(bag,x));
      if(b.title||b.name) pushItem(bag,b);
    }
  });
  return bag;
}
function keyOf(kind,x){
  const t=String((kind==='m'?(x.name||x.title):x.title)||'').trim();
  return kind+'|'+t;
}
function collectText(){
  const parts=[];
  document.querySelectorAll('pre, pre code, code').forEach(n=>{
    const t=(n.innerText||n.textContent||'').trim();
    if(t.length>20) parts.push(t);
  });
  if(!parts.length){
    [...document.querySelectorAll('div,article,section')].forEach(n=>{
      if(n.querySelector('pre,code')) return;
      if(n.children.length>12) return;
      const t=(n.innerText||'').trim();
      if(t.length>80 && t.indexOf('"title"')>=0) parts.push(t);
    });
  }
  return parts.join('\n\n');
}
function chatId(){
  const p=location.pathname.replace(/\/+$/,'')||'/';
  return location.host+p;
}
function scrape(){
  const bag=mergeBlocks(jsonBlocks(collectText().replace(/```[a-zA-Z]*/g,'')));
  const items=[];
  bag.posts.forEach(x=>items.push({kind:'p',key:keyOf('p',x),x}));
  bag.polls.forEach(x=>items.push({kind:'q',key:keyOf('q',x),x}));
  bag.market.forEach(x=>items.push({kind:'m',key:keyOf('m',x),x}));
  const seenKeys=new Set();
  const uniq=[];
  items.forEach(it=>{
    if(!it.key||it.key.endsWith('|')||seenKeys.has(it.key)) return;
    seenKeys.add(it.key);
    uniq.push(it);
  });
  return {chat:chatId(), items:uniq};
}

chrome.runtime.onMessage.addListener((msg,_s,send)=>{
  if(!msg||msg.type!=='scrape') return;
  try{ send({ok:true, result:scrape()}); }
  catch(e){ send({ok:false, error:String(e)}); }
  return true;
});
