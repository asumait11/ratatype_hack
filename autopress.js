const delaymin=80;
const delaymax=120;

var text = $('.mainTxt')[0].innerText;

const maxi = text.length;
i=0;

var inter = setInterval(()=>
{
    var button = text.charAt(i);
    presser(button);
    i++;

    if(i>=maxi) clearInterval(inter);
},getRandomInt(delaymin,delaymax));


function presser(key)
{
    let element = document.querySelector('input');
    element.dispatchEvent(new KeyboardEvent('keydown',{'key':key}));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
