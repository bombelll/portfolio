const btn = document.getElementById('js-click-me');
const countText = document.getElementById('js-count-text');
const achievements = document.getElementById('js-achievements');
const autoClickerBtn = document.getElementById('js-auto-clicker');

let count = 0;
let isStart = true

const click = (enable = false) => {false
    count++;
    countText.innerText = `Clicks: ${count}`;

    if(0 === count % 10){
        achievements.innerText = `Osiągnięcia: Kliknąłeś już ${count} razy!`
    }

    if(enable && 100 === count) {
        alert('Gratulacje kliknąłeś 100 razy!');
            setTimeout(() => {
                window.location.reload();
            },250)
    }
}

btn.addEventListener('click', () => {
    click(true);
})

autoClickerBtn.addEventListener('click', () => {
    if(isStart === true){
        interval = setInterval(() => {
            autoClickerBtn.innerText = 'Stop Auto Clicker'
            autoClickerBtn.style.color = '#111';
            click();
        },1)
    }else{
        autoClickerBtn.innerText = 'Start Auto Clicker';
        clearInterval(interval)
    }
    isStart = !isStart
});
