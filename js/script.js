const achievementsSwiperInit = document.getElementById('swiper-achievements__init');

if(achievementsSwiperInit) {
    new Swiper(achievementsSwiperInit, {
        loop: false,
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1920: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            1141: {
                slidesPerView: 6,
                spaceBetween: 20
            },
            993: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            680: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            679: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            581: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            420: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            380: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        },
        navigation: {
            nextEl: ".swiper-button-next-0",
            prevEl: ".swiper-button-prev-1",
          },
    });
}


class Achievements {
    constructor(element) {
        this.element = element;
        this.bars = this.element.querySelectorAll('[data-progress]');
        this.percent = this.element.querySelectorAll('[data-percent]');
    }

    progressBars() {
        if(this?.bars) {
            this.bars.forEach((bar, index) => {
                const getWidth = parseFloat(bar.dataset.progress);
                
                for(let i = 0; i <= getWidth; i++) {
                    setTimeout(() => {
                        this.percent[index].innerText = `${i}%`;
                        bar.style.width = `${i}%`;
                      }, 25 * i + 1, i);
                }
            });
        }
    }

    distributionAchievements() {
        this.bars.forEach(elm => {
            if(elm.dataset.progress > 0) {
                const parentPerformed = this.element.querySelectorAll('.achievements-wrapper__performed--elm');
                parentPerformed.forEach(item => {
                    item.querySelector('.achievements-wrapper__performed--icon').style.filter = "grayscale(100%)";
                    item.querySelector('.achievements-wrapper__performed--name').style.filter = "grayscale(100%)";
                    item.querySelector('.achievements-wrapper__performed--desc').style.filter = "grayscale(100%)";
                });
            } else if(elm.dataset.progress == 0) {
                const parentNotOpen = this.element.querySelectorAll('.achievements-wrapper__not-open--elm');
                parentNotOpen.forEach(item => {
                    item.querySelector('.achievements-wrapper__not-open--name').style.filter = "grayscale(100%)";
                    item.querySelector('.achievements-wrapper__not-open--desc').style.filter = "grayscale(100%)";
                });
            }
        });
    }
}


const achievements = new Achievements(document.getElementById('achievements__init'));
achievements.progressBars();
achievements.distributionAchievements();