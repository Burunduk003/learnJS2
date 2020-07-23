'use srtict';
window.addEventListener("DOMContentLoaded", () => {

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParant = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }   

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    tabsParant.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) =>{
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2020-07-30';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 *24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();    

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }    
    }

    setClock('.timer', deadline);

    // modal

    const openModal = document.querySelectorAll('[data-modal]'),
        closeModal = document.querySelector('[data-close]'),
        wrapperModal = document.querySelector('.modal');

    function open() {
        wrapperModal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    openModal.forEach(btn => {
        btn.addEventListener('click', open);
    });

    // function open() {
    //     openModal.forEach(btn => {
    //         btn.addEventListener('click', () => {
    //             wrapperModal.style.display = "block";
    //         });           
    //     });
    // }
    // open();

    // function close() {
    //     closeModal.addEventListener('click', () => {
    //         wrapperModal.style.display = "none";
    //     });           
    // }
    // close();

    // openModal.addEventListener('click', () => {
    //     // wrapperModal.classList.add('show');
    //     // wrapperModal.classList.remove('hide');
    //     wrapperModal.classList.toggle('show');
    //     document.body.style.overflow = 'hidden';
    // });

    


    function close() {
        wrapperModal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', close);

    wrapperModal.addEventListener('click', (e) => {
        if (e.target === wrapperModal) {
            close();
        }
    });

    document.addEventListener('keydown', (e) =>{
        if (e.code === 'Escape' && wrapperModal.classList.contains('show')) {
            close();
        }
    });

    // const modalTimerId = setTimeout(open, 6000); // задаем время через которое откроется модальное окно

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            open();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
     // {once: true} можно поставить после функции, но в данном случае не сработает, так-как оно тригерится после первого проворота колесиком мышки (скролл)


     // Menu kards

    //  const container = document.querySelector('.container'),
    //     menu = container.querySelectorAll('.menu__item'),
    //     menuName = document.querySelector('.menu__item-subtitle'),
    //     menuDescription = document.querySelector('.menu__item-descr'),
    //     menuPrice = document.querySelector('.menu__item-total');

    //     class AllMenu {
    //         constructor(name, description, price) {
    //             this.name = name;
    //             this.description = description;
    //             this.price = price;
    //         }

    //         makeMenu() {
    //             menuName.innerHTML = `<h3 class="menu__item-subtitle">Меню “${this.name}”</h3>`;
    //             menuDescription.textContent = this.description;
    //             menuPrice.innerHTML = `<div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
    //         }
    //     }

    // const fitness = new AllMenu('Какашки', 'вкусные какахи на каждый жень', 1000),
    //     Premium = new AllMenu('Какашки отборные', 'вкусные какахи на каждый жень', 3000);

    // fitness.makeMenu();
    // Premium.makeMenu();

    class MenuCard {
        constructor(src, alt, title, descr, price, parantSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parant = document.querySelector(parantSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parant.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        20,
        '.menu .container'

    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container'

    ).render();

});