function carrouselAlternate() {

    let images = document.querySelectorAll('.carousel__item');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        targets: '.carousel__item',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + d*2;
            if (ind == 3) return 4*delta + d*3;
            if (ind == 4) return 5*delta + d*4;
            if (ind == 5) return 6*delta + d*5;
            if (ind == 6) return 7*delta + d*6;
            if (ind == 7) return 8*delta + d*7;
            if (ind == 8) return 9*delta + d*8;
            if (ind == 9) return 10*delta + d*9;
            if (ind == 10) return 11*delta + d*10;
            return 12*delta + 11*d;
        }
    });
    anim15.add({
        translateX: [{value: 500, duration: d, easing: 'easeInOutSine'}, 
                     {value: 500, duration: 0, delay: delta}]
    });
}

