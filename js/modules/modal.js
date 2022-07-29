function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove("show");
    modal.classList.add("hidden");
    document.body.style.overflow = '';
}

function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hidden");
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function modal(triggerModal, modalSelector, modalTimerId) {

    const modal = document.querySelector(modalSelector),
    btn = document.querySelectorAll(triggerModal);

    btn.forEach(item => {
        item.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });

    modal.addEventListener("click", (event) => {
        const target = event.target;
        if (target === modal || target.classList.contains('modal__close')) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (event) => {
        if(event.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });    

    function showModalByScroll() {
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export {closeModal, showModal};