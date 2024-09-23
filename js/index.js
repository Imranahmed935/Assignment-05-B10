const donateBtn = document.getElementById('btn-donate');
donateBtn.onclick = ()=>{
    const inputValue = getInputValue('amount-input');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('collect-balance');
    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;
    
    document.getElementById('collect-balance').innerText = addBalance;
    document.getElementById('balance').innerText = donateBalance;
    document.getElementById('amount-input').value = '';
}
const donateBtn2 = document.getElementById('donate-btn2');
donateBtn2.onclick = ()=>{
    const inputValue = getInputValue('amount-input2');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('card-balance1');
    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;
    
    document.getElementById('card-balance1').innerText = addBalance;
    document.getElementById('balance').innerText = donateBalance;
    document.getElementById('amount-input2').value = '';
}


const donateBtn3 = document.getElementById('donate-btn3');
donateBtn3.onclick = ()=>{
    const inputValue = getInputValue('amount-input3');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('card-balance3');
    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;
    
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
