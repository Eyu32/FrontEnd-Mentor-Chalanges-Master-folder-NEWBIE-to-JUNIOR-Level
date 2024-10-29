// inputs

const inputDay = document.querySelector("#day")
const inputMonth = document.querySelector("#month")
const inputYear = document.querySelector("#year")

const btn = document.querySelector(".calc")

// output

const outputYear = document.querySelector(".year-value")
const outputMonth = document.querySelector(".month-value")
const outputDay = document.querySelector(".day-value")

// current date 

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();


btn.addEventListener("click" , () => {
    if (validation() && dateValidation()){
        startCalc()
        timer()
    }
})

function setError(element, massage){
    const input = element.parentElement
    const errorMsg = input.querySelector(".error-msg")
    const invalidLabel = input.querySelector("label")

    invalidLabel.classList.add("invalid")
    errorMsg.innerText = massage
    element.classList.add("error")
}

function setBorderError(element){
    const input = element.parentElement
    const invalidLabel = input.querySelector("label")

    invalidLabel.classList.add("invalid")
    element.classList.add("error")
}
function setBorderSuccess(element){
    const input = element.parentElement
    const invalidLabel = input.querySelector("label")

    invalidLabel.classList.remove("invalid")
    element.classList.remove("error")
}

function setSuccess(element){
    const input = element.parentElement
    const errorMsg = input.querySelector(".error-msg")
    const invalidLabel = input.querySelector("label")

    invalidLabel.classList.remove("invalid")

    errorMsg.innerText = ""
    element.classList.remove("error")
}


function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);

    const isDayValid = date.getDate() === day;
    const isMonthValid = date.getMonth() + 1 === month; 
    const isYearValid = date.getFullYear() === year;

    return isDayValid && isMonthValid && isYearValid;
}

// function()


function validation(){
    const dayVal = inputDay.value.trim()
    const monVal = inputMonth.value.trim()
    const yearVal = inputYear.value.trim()
    let valid = true
    
    if (dayVal.length == ""){
        setError(inputDay, "This field is required")
        valid = false
    }
    else if (dayVal > 31){
        setError(inputDay, "Must be a valid date")
        valid = false
    }
    else{
        setSuccess (inputDay)
    }

    if (monVal.length == ""){
        setError(inputMonth, "This field is required")
        valid = false
    }
    else if (monVal > 12){
        setError(inputMonth, "Must be a valid month")
        valid = false
    }
    else{
        setSuccess (inputMonth)
    }

    if (yearVal.length == ""){
        setError(inputYear, "This field is required")
        valid = false
    }
    else if (yearVal > year){
        setError(inputYear, "Must be in the past")
        valid = false
    }
    else{
        setSuccess (inputYear)
    }
    return valid
}


function dateValidation(){
    let dateValid = true
    const dayVal = Number(inputDay.value.trim())
    const monVal = Number(inputMonth.value.trim())
    const yearVal = Number(inputYear.value.trim())

    if (!isValidDate(dayVal, monVal, yearVal)){
        setError(inputDay, "must be a valid date")
        setBorderError(inputMonth)
        setBorderError(inputYear)
        dateValid = false
    }
    else{
        setSuccess(inputDay)
        setBorderSuccess(inputMonth)
        setBorderSuccess(inputYear)
    }
    return dateValid
}

let new_year;
let new_month;
let new_day;

function startCalc(){
    const dayVal = inputDay.value.trim()
    const monVal = inputMonth.value.trim()
    const yearVal = inputYear.value.trim()

    new_year = year - yearVal

    if (month >= monVal){
        new_month = month - monVal
    }else{
        new_year--;
        new_month = 12 + month - monVal
    }

    if (day >= dayVal){
        new_day = day - dayVal
    }else{
        new_month--;
        new_day = getDaysInMonth(yearVal, monVal) + day - dayVal
    }

    if (new_month < 0){
        new_month = 11
        new_year--;
    }

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}

function timer(){
    let startYear = 0
    let startMonth = 0 
    let startDay = 0

    let yearCounter = setInterval(function() {
        startYear += 1
        outputYear.textContent = `${startYear} `
        if (startYear == new_year){
            clearInterval(yearCounter)
        }
    }, 50)


    let monthCounter = setInterval(function() {
        startMonth += 1
        outputMonth.textContent = `${startMonth} `
        if (startMonth == new_month){
            clearInterval(monthCounter)
        }
    }, 50)


    let dayCounter = setInterval(function() {
        startDay += 1
        outputDay.textContent = `${startDay} `
        if (startDay == new_day){
            clearInterval(dayCounter)
        }
    }, 50)
}   

 