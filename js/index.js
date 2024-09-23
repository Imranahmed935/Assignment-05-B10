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
const donateBtn = document.getElementById('donate-btn2');
donateBtn.onclick = ()=>{
    const inputValue = getInputValue('amount-input2');
    const mainBalance = getTextValue('balance');
    const collectBalance = getTextValue('card-balance1');
    const donateBalance = mainBalance - inputValue;
    const addBalance = collectBalance + inputValue;
    
    document.getElementById('card-balance1').innerText = addBalance;
    document.getElementById('balance').innerText = donateBalance;
    document.getElementById('amount-input2').value = '';
}
