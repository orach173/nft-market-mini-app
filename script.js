console.log('Telegram Mini App Loaded');
const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById('connectBtn').onclick = () => {
  document.getElementById('address').innerText = '0x1234...ABCD';
};

document.getElementById('items').innerHTML = '<div>NFT #1 — Buy / Sell</div><div>NFT #2 — Buy / Sell</div>';
