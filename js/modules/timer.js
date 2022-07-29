function timer(timerSelector, deadline, dateSelector) {
    // Timer

    const monthArr=[
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
        ];
        

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor(t / 1000 % 60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };

    }

    function setEndDate(selector, endtime) {
        const dateElem = document.querySelector(selector);
        const date = new Date(endtime);
        const day = date.getDate(),
              month = date.getMonth();
        dateElem.textContent = `${day} ${monthArr[month]}`;
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              updater = setInterval(updateClock, 1000);
              
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);

            if(t.total <= 0) {
                clearInterval(updater);
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";
                return undefined;
            }

            days.innerHTML = serZero(t.days);
            hours.innerHTML = serZero(t.hours);
            minutes.innerHTML = serZero(t.minutes);
            seconds.innerHTML = serZero(t.seconds);
        }
    }
    function serZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    setEndDate(dateSelector, deadline);
    setClock(timerSelector, deadline);
}

export default timer;