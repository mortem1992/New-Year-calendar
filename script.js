let info = document.querySelector('.time_info'),
    days = document.querySelector('.time__wrap_days'),
    hours = document.querySelector('.time__wrap_hours'),
    minutes = document.querySelector('.time__wrap_minutes'),
    seconds = document.querySelector('.time__wrap_seconds'),
    currentYear = new Date().getFullYear(),
    newYearTime = new Date(`1 Jan ${currentYear + 1}, 00:00:00`)

function nextYear() {

    const now = new Date()
    const diff = newYearTime - now
    const s = Math.floor((diff / 1000) % 60)
    const m = Math.floor(((diff / 1000) / 60) % 60)
    const h = Math.floor((((diff / 1000) / 60) / 60) % 24)
    const d = Math.floor((((diff / 1000) / 60) / 60) / 24)
    if (s != 0 && m != 0 && h != 0 && d != 0) {
        days.innerHTML = d < 10 ? '0' + d : d
        hours.innerHTML = h < 10 ? '0' + h : h
        minutes.innerHTML = m < 10 ? '0' + m : m
        seconds.innerHTML = s < 10 ? '0' + s : s
        setTimeout(() => nextYear(), 1000);
    } else {
        info.innerHTML = 'С Новым Годом !!!'
        days.innerHTML = 0
        hours.innerHTML = 0
        minutes.innerHTML = 0
        seconds.innerHTML = 0
        let ans = confirm('Хотите перезапустить таймер')
        if (ans) {
            location.reload()
        }
    }
}
nextYear()