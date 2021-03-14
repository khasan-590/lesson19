

window.addEventListener('DOMContentLoaded', () => {

  'use strict';

       // timer
       function countTimer(deadline) {

        const timeHours = document.querySelector('#timer-hours'),
            timeMinets = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');
        let idInterval;
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 3600);

            // timeInterval = setInterval(updateClock, 1000);

            return { timeRemaining, hours, minutes, seconds };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }

        }

        function updateClock() {
            const timer = getTimeRemaining();

            timeHours.textContent = getZero(timer.hours);
            timeMinets.textContent = getZero(timer.minutes);
            timeSeconds.textContent = getZero(timer.seconds);

            if (timer.timeRemaining  <= 0) {
                timeHours.textContent = "0";
                timeMinets.textContent = "0";
                timeSeconds.textContent = "0";
                return false;

            }
        }

        if (updateClock() !== false) {
            idInterval = setInterval(updateClock, 1000);
        } else {
            clearInterval(idInterval);
        }
    }

    countTimer('15 march 2021');






    const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
          menu  = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');
  
    const handlerMenu = () => {
    // if(!menu.style.transform || menu.style.transform ===  `translate(-100%)`){
    //   menu.style.transform = `translate(0)`;
    // } else {
    //   menu.style.transform = `translate(-100%)`;
    // }
    menu.classList.toggle('active-menu');
    };
      btnMenu.addEventListener('click', handlerMenu);
      closeBtn.addEventListener('click', handlerMenu);
      menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  
  toggleMenu();

  //popup
  
  const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupContent = popup.querySelector('.popup-content'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupClose = popup.querySelector('.popup-close');

      let count = 0;
		
		const animationgPopup = () => {

			const animateInterval = requestAnimationFrame(animationgPopup);
			count++;
  
			if (count < 45) {
				popupContent.style.left = count * 14 + 'px';
			} else {
				count = 0;
				cancelAnimationFrame(animateInterval);
			}

      // if (screen.width < 768) {
      //   popupContent.style.display =  'none';
			// 	}
		};

    // let screen = window.matchMedia('(max-width:768px');

		popupBtn.forEach(item => {
			item.addEventListener('click', () => {
				popup.style.display = 'block';
        if (screen.width > 768) {
					animationgPopup();
				}
			});
		});

    popupBtn.forEach(item => {
			popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        // if (screen.width < 768) {
				// 	animationgPopup.disable();
				// }
      });
		});
		


	};

	togglePopup();

});



