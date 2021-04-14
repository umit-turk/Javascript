function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introthunder   = document.querySelector('.thunder');

    var introPosition = introText.getBoundingClientRect().top;
    var introtposition2 = introthunder.getBoundingClientRect().top;

    var screenPoisition = window.innerHeight / 2;

    if(introPosition < screenPoisition){
        introText.classList.add('intro-appear')
    }else if(introtposition2 < screenPoisition){
        introthunder.classList.add('intro-thunder')
    }

}

window.addEventListener('scroll',scrollAppear)