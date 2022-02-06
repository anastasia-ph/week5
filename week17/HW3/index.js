function formatDate(date) {
    let timePassed = new Date() - date
    let seconds = Math.round(timePassed/1000);
    let minutes = Math.round(timePassed/60000)
    if (timePassed <1000){
        return(alert("Прямо сейчас"))
    }
    else if (seconds < 60){
        return(alert(`${seconds} секунд назад`))
    }
    else if (minutes <60){
        return(alert(`${minutes} минут назад`))
    }

    else {
        return(alert(setupDateValues(date.getDate(), date.getMonth(), date.getFullYear(),date.getHours(), date.getMinutes())))
    }

}

function setupDateValues (day, month, year, hours, minutes){
    if ((day.toString().length) == 1){
        day = "0" + day
    }
    if ((month+1).toString().length===1){
        month = "0"+(month+1)

    }

    if ((hours.toString().length)===1){
        hours = "0"+hours
    }
    if ((minutes.toString().length)===1){
        minutes = "0"+minutes
    }

    return `${day}.${month}.${year}, ${hours}:${minutes}`
}