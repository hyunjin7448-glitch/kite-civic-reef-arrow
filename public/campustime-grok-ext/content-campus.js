function isCampus(){
  return document.documentElement.getAttribute('data-campustime')==='1'
    || (document.title||'').indexOf('캠퍼스타임')>=0;
}
if(isCampus()){
  chrome.runtime.onMessage.addListener((msg, _s, send)=>{
    if(!msg) return;
    if(msg.type==='ping'){ send({ok:true, campus:true}); return true; }
    if(msg.type==='ingest'){
      window.postMessage({type:'campustime-feed', text:String(msg.text||''), name:msg.name||'그록 채팅'}, '*');
      send({ok:true});
      return true;
    }
  });
}
