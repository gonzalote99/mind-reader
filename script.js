const input = document.querySelector('input');
const btn = document.querySelector('.readMind');
const txt = document.querySelector('.think');
const texty = document.querySelector('.hidden');
const progress = document.querySelector('.progress-done');

btn.addEventListener('click', () => {
  if(!isNaN(input.value) && input.value > 0 && input.value <= 10 ) {
    let li = document.querySelectorAll('.li');
    for(let i = 0; i < li.length; i++) {
      li[i].style.animation = 'spin 2s 0.6s infinite';

    }

    txt.textContent = 'analysing brain'
    progress.style.width = '20%'
    setTimeout(() => {
      txt.textContent = 'scanning'
      progress.style.width = '80%'
      setTimeout(() => {
        txt.textContent = 'calculating'
        progress.style.width = '100%'
      }, 1000);
    }, 2000);
    setTimeout(() => {
      txt.textContent = 'decoding'
      progress.style.width = '20%'
      setTimeout(() => {
        txt.textContent = 'checking'
        progress.style.width = '40%'
      }, 1000);
    }, 1000);
    setTimeout(() => {
      txt.textContent = 'concluding'
    }, 5000);
    setTimeout(() => {
      texty.innerHTML = `<h1>number is <br/> <b style='font-size-40px;'>${input.value}</b>🤯😨😱</h1>`
    }, 6000);

  }
})

progress.style.width = progress.getAttribute('.progress-done') + '%'; 
progress.style.opacity = 1;