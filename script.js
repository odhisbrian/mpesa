(function(){
  const u = new URL(window.location.href);
  const getParam = (k)=> u.searchParams.get(k) || u.searchParams.get(k.toUpperCase());
  const nameParam = getParam('name');
  const amountParam = getParam('amount');
  const timeParam = getParam('time');

  function setText(id,val){const el=document.getElementById(id); if(el) el.textContent=val;}

  if(nameParam||amountParam||timeParam){
    if(nameParam){
      document.getElementById('supplierName').textContent=decodeURIComponent(nameParam);
      document.getElementById('paidTo').innerHTML=`Paid to <strong>${decodeURIComponent(nameParam)}</strong> from Account <strong id="acct">9533</strong>`;
    }
    if(amountParam){
      setText('amountValue', decodeURIComponent(amountParam));
    }
    if(timeParam){
      setText('timeLabel', decodeURIComponent(timeParam));
    }
  }

  document.getElementById('closeBtn').onclick=function(){document.querySelector('.notif-wrap').style.display='none';};
  document.getElementById('markRead').onclick=function(){alert('Marked as read (demo)');};
  document.getElementById('viewProfile').onclick=function(){alert('Open profile (demo)');};
})();