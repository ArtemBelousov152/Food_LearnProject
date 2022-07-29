import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {showModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {  
    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 40000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal("[data-modal]", ".modal");
    timer('.timer','2022-08-30', '#date');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        next: '.offer__slider-next',
        prev: '.offer__slider-prev',
        slide: '.offer__slide',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});