//Ticket Form Logic
const buyerName = document.getElementById('buyerName');
const buyerEmail = document.getElementById('buyerEmail');
const ticketDay = document.getElementById('ticketDay');
const ticketCount = document.getElementById('ticketCount');
const buyNowButt = document.getElementById('buyNowButt');
const tcktFormBox = document.getElementById('tcktFormBox');

const ticketPrices = [200, 500, 300, 800];

let orderSummary = document.createElement('p');
orderSummary.id = 'orderSummary';
tcktFormBox.insertBefore(orderSummary, buyNowButt);

function getActiveTicketIndex() {
  const activeBtn = document.querySelector('.tcktButt.active');
  if (!activeBtn) return 0;
  return Number(activeBtn.dataset.index) || 0;
}

function updateTotal() {
  const idx = getActiveTicketIndex();
  const unitPrice = ticketPrices[idx] || 200;
  let count = parseInt(ticketCount.value, 10);

  if (isNaN(count) || count < 1) {
    count = 1;
    ticketCount.value = 1;
  }

  const total = unitPrice * count;
  orderSummary.textContent = 'Total: ' + total + 'kr';
}

ticketCount.addEventListener('input', updateTotal);
tcktButt.forEach(btn => {
  btn.addEventListener('click', updateTotal);
});

updateTotal();

buyNowButt.addEventListener('click', (e) => {
  e.preventDefault();

  const nameVal = buyerName.value.trim();
  const emailVal = buyerEmail.value.trim();
  const dayVal = ticketDay.options[ticketDay.selectedIndex].text;
  const countVal = parseInt(ticketCount.value, 10) || 1;
  const idx = getActiveTicketIndex();
  const total = (ticketPrices[idx] || 200) * countVal;

  if (nameVal === '' || emailVal === '') {
    orderSummary.textContent = 'Please fill in your name and email!';
    return;
  }

  orderSummary.textContent = 'Order reserved for ' + nameVal + ' (' + dayVal + ', x' + countVal + ') — ' + total + 'kr';
});