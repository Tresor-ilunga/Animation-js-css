const item = document.querySelectorAll('.item');
const btnNav = document.querySelector('.navigationIcon');
const containerMenu = document.querySelector('.containerMenu');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');

let toggle = 0;

for(var j = 0; j < item.length; j++)
{
    charming(item[j]);
}

btnNav.addEventListener('click', () => {

    if(toggle === 0){
        toggle++;
        TweenMax.to(b2,0.01,{display: 'none'})
        TweenMax.to(b1,0.1,{top:2.5, transform: 'rotate(225deg)'})
        TweenMax.to(b3,0.1,{top:-2.5, transform: 'rotate(-225deg)'})
        TweenMax.to(containerMenu, 0.8, {left: 0, ease: Power2.easeOut})
    } else {
        toggle--;
        TweenMax.to(b2,0.01,{delay:0.25, display: 'block'})
        TweenMax.to(b1,0.1,{top:-10, transform: 'rotate(0deg)'})
        TweenMax.to(b3,0.1,{top:10, transform: 'rotate(0deg)'})
        TweenMax.to(containerMenu, 0.8, {left: '-100%',  ease: Power4.easeIn})

    }

})