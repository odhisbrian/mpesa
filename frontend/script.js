(function(){
  const u = new URL(window.location.href);
  const getParam = (k)=> u.searchParams.get(k) || u.searchParams.get(k.toUpperCase());
  const nameParam = getParam('name');
  const amountParam = getParam('amount');
  const timeParam = getParam('time');
  const phoneParam = getParam('phone'); // new

  function setText(id,val){const el=document.getElementById(id); if(el) el.textContent=val;}

  // Helper to extract last 4 digits of phone safely
  function last4(phone){
    if(!phone) return '';
    const digits = phone.replace(/\D/g,'');
    if(digits.length <= 4) return digits;
    return digits.slice(-4);
  }

  if(nameParam||amountParam||timeParam||phoneParam){
    if(nameParam){
      const name = decodeURIComponent(nameParam);
      document.getElementById('supplierName').textContent = name;
      const paidToEl = document.getElementById('paidTo');
      if(paidToEl) paidToEl.innerHTML = `Paid to <strong>${name}</strong> from Account <strong id="acct">&nbsp;&nbsp;&nbsp;&nbsp;</strong>`;
    }
    if(amountParam){
      setText('amountValue', decodeURIComponent(amountParam));
    }
    if(timeParam){
      setText('timeLabel', decodeURIComponent(timeParam));
    }

    // ---- ACCOUNT DISPLAY DEACTIVATED ----
    // We intentionally DO NOT show the real last 4 digits in the UI. The account field remains blank.
    // To REACTIVATE the display of the last 4 digits, uncomment the line below marked "REACTIVATE-LAST4".
    if (phoneParam) {
      // setText('acct', last4(decodeURIComponent(phoneParam))); // REACTIVATE-LAST4
      setText('acct', '\u00A0\u00A0\u00A0\u00A0'); // keep blank (non-breaking spaces)
    } else {
      setText('acct', '\u00A0\u00A0\u00A0\u00A0');
    }
    // ---------------------------------------
  }

  // Demo populate function exposed for manual testing
  window.populate = function(o){
    if(o.time) setText('timeLabel', o.time);
    if(o.amount) setText('amountValue', o.amount);
    if(o.recipient) document.getElementById('supplierName').textContent = o.recipient;
    if(o.account) {
      // setText('acct', last4(o.account)); // REACTIVATE-LAST4
      setText('acct', '\u00A0\u00A0\u00A0\u00A0');
    }
  };

  document.getElementById('closeBtn').onclick=function(){document.querySelector('.notif-wrap').style.display='none';};
  document.getElementById('markRead').onclick=function(){alert('Marked as read (demo)');};
  document.getElementById('viewProfile').onclick=function(){alert('Open profile (demo)');};
})();