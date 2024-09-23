const donateBtn = document.getElementById('btn-donate');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

donateBtn.onclick = ()=>{
    const history = document.getElementById('history');
    const titleValue = getTitleValue('title1');
    const inputValue = getInputValue('amount-input');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('collect-balance');
      
    if (!inputValue) {
      alert('Invalid Input.');
      return
  }
  if (isNaN(inputValue)) {
      alert('Input is not a number.');
      return;
  }
  if (inputValue > mainBalance) {
      alert('Invalid input. Amount is gater then available balance.');
      return;
  }
  if (inputValue < 0) {
      alert('Invalid input. input is negative.');
      return;
  }

      const donateBalance = mainBalance - inputValue;
      const addBalance = collectBalance + inputValue;
  
      const div = document.createElement('div');
      div.innerHTML = `
        <h2 class="text-xl mb-2 font-semibold">${inputValue} Taka is ${titleValue}</h2>
        <p class="text-black">Date: ${new Date().toLocaleDateString()}, time: ${new Date().toLocaleTimeString()}</p>
      `;
      div.classList.add('mt-10', 'border', 'p-3' ,'rounded-xl',)
      history.appendChild(div);
  
      modal.classList.remove('hidden');
      closeBtn.onclick = function(){
      modal.classList.add('hidden')
     
      
      document.getElementById('collect-balance').innerText = addBalance;
      document.getElementById('balance').innerText = donateBalance;
      document.getElementById('amount-input').value = '';
    }
}
const donateBtn2 = document.getElementById('donate-btn2');
donateBtn2.onclick = ()=>{
    const history = document.getElementById('history');
    const inputValue = getInputValue('amount-input2');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('card-balance1');
    const titleValue = getTitleValue('title2');

      if (!inputValue) {
        alert('Invalid Input.');
        return
    }
    if (isNaN(inputValue)) {
        alert('Input is not a number.');
        return;
    }
    if (inputValue > mainBalance) {
        alert('Invalid input. Amount is gater then available balance.');
        return;
    }
    if (inputValue < 0) {
        alert('Invalid input. input is negative.');
        return;
    };

    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;

    const div = document.createElement('div');
    div.innerHTML = `
      <h2 class="text-xl mb-2 font-semibold">${inputValue} Taka is ${titleValue}</h2>
      <p class="text-black">Date: ${new Date().toLocaleDateString()}, time: ${new Date().toLocaleTimeString()}</p>
    `;
    div.classList.add('border', 'p-3' ,'rounded-xl',)

    history.appendChild(div);

    modal.classList.remove('hidden');
    closeBtn.onclick = function(){
    modal.classList.add('hidden')
   }
    
    document.getElementById('card-balance1').innerText = addBalance;
    document.getElementById('balance').innerText = donateBalance;
    document.getElementById('amount-input2').value = '';
}


const donateBtn3 = document.getElementById('donate-btn3');
donateBtn3.onclick = ()=>{
    const history = document.getElementById('history');
    const inputValue = getInputValue('amount-input3');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('card-balance3');
    const titleValue = getTitleValue('title3');

    if (!inputValue) {
      alert('Invalid Input.');
      return
  }
  if (isNaN(inputValue)) {
      alert('Input is not a number.');
      return;
  }
  if (inputValue > mainBalance) {
      alert('Invalid input. Amount is gater then available balance.');
      return;
  }
  if (inputValue < 0) {
      alert('Invalid input. input is negative.');
      return;
  }

    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;

    const div = document.createElement('div');
    div.innerHTML = `
      <h2 class="text-xl mb-2 font-semibold">${inputValue} Taka is ${titleValue}</h2>
      <p class="text-black">Date: ${new Date().toLocaleDateString()}, time: ${new Date().toLocaleTimeString()}</p>
    `;
    div.classList.add('border', 'p-3' ,'rounded-xl',)
    history.appendChild(div);

    modal.classList.remove('hidden');
    closeBtn.onclick = function(){
    modal.classList.add('hidden')
   }
    
    document.getElementById('card-balance3').innerText = addBalance;
    document.getElementById('balance').innerText = donateBalance;
    document.getElementById('amount-input3').value = '';
}

const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');


historyBtn.onclick = ()=>{
   historyBtn.classList.add('btn', 'bg-[#B4F461]', 'text-xl', 'font-bold',);
   historyBtn.classList.remove('btn-outline', 'bg-primary-400');

   donationBtn.classList.remove('bg-[#B4F461]',);
   donationBtn.classList.add('btn-outline', 'bg-primary-400', 'text-xl', 'font-bold');

   document.getElementById('donation-history').classList.remove('hidden');
   document.getElementById('card-container').classList.add('hidden');

} 

donationBtn.onclick=()=>{
   donationBtn.classList.add('btn', 'bg-[#B4F461]', 'text-xl', 'font-bold',);
   donationBtn.classList.remove('btn-outline', 'bg-primary-400');

   historyBtn.classList.remove('bg-[#B4F461]',);
   historyBtn.classList.add('btn-outline', 'bg-primary-400', 'text-xl', 'font-bold');

   document.getElementById('card-container').classList.remove('hidden');
   document.getElementById('donation-history').classList.add('hidden');

   
}
