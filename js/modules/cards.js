import {getResource} from '../services/services';

function cards() {
     // Food cards with classes
    
    class MenuCard {
        constructor(src, alt, title, descr, price, parentElem, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parentElem = document.querySelector(parentElem);
            this.convertCours = 58;
            this.convertToRub();
        }

        convertToRub() {
            this.price *= 58;
        }

        render() {
            const div = document.createElement("div");
            if (this.classes.length > 0) {
                this.classes.forEach(className => div.classList.add(className));
            } else {
                div.classList.add("menu__item");
            }
            div.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parentElem.append(div);
        }
    }

    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
}

export default cards;