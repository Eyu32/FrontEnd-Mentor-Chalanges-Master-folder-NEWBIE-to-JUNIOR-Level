// output displays

const cardNumDisplay = document.querySelector(".card-num-display")
const cardHolderDisplay = document.querySelector(".card-holder-display")
const cardDateDisplay = document.querySelector(".card-date-display")
const cvcDisplay = document.querySelector(".cvc-display")

// input 

const cardHolderName = document.querySelector("#cardHolder-name")
const cardNum = document.querySelector("#card-num")

const month = document.querySelector(".month")
const year = document.querySelector(".year")

const cvcNum = document.querySelector("#cvc-num")

const confirmBtn = document.querySelector("#confirm-btn")

const userInput = document.querySelector(".user-input")
const systemOutput = document.querySelector(".thank-msg")

const continueBtn = document.querySelector(".continue-btn")

confirmBtn.addEventListener("click", () => {
    if (validationCheck()){
        toHtml()
        userInput.classList.add("user-input-active")
        systemOutput.classList.add("thank-msg-active")
    }

})
continueBtn.addEventListener("click", () => {
    reset()
    userInput.classList.remove("user-input-active");
    systemOutput.classList.remove("thank-msg-active")
})

function errorMassage(element, massage){
    const input = element.parentElement
    const errorMsg = input.querySelector(".error-msg")

    errorMsg.innerText = massage
    element.classList.remove("success")
    element.classList.add("error")
}

function successMassage(element){
    const input = element.parentElement
    const errorMsg = input.querySelector(".error-msg")

    errorMsg.innerText = ""
    element.classList.remove("error")
    element.classList.add("success")
}

function validationCheck(){
    validVal = true
    nameVal = cardHolderName.value.trim()
    numVal = cardNum.value.trim()
    monthVal = month.value.trim()
    yearVal = year.value.trim()
    cvcVal = cvcNum.value.trim()

    if (nameVal == ""){
        errorMassage(cardHolderName, "Enter username")
        validVal = false
    }else{
        successMassage(cardHolderName)
    }


    let sanitizedNumVal = numVal.replace(/[\s_\-]/g, '');
    if (sanitizedNumVal == ""){
        errorMassage(cardNum, "Enter card number")
        validVal = false
    }else if (isNaN(sanitizedNumVal)){
        errorMassage(cardNum, "Wrong format,numbers only")
        validVal = false
    }else{
        successMassage(cardNum)
    }


    if (monthVal == ""){
        errorMassage(month, "Can't be blank")
        validVal = false
    }else{
        successMassage(month)
    }

    if (yearVal == ""){
        errorMassage(year, "Can't be blank")
        validVal = false
    }else{
        successMassage(year)
    }

    if (cvcVal == ""){
        errorMassage(cvcNum, "Can't be blank")
        validVal = false
    }else{
        successMassage(cvcNum)
    }
    return validVal
}

function toHtml(){
    const newNumVal = numVal
    let formattedNumber = newNumVal.toString().replace(/(\d{4})(?=\d)/g, '$1 ');
    cardNumDisplay.innerText = formattedNumber
    cardHolderDisplay.innerText = nameVal

    cardDateDisplay.innerText = `${monthVal}/ ${yearVal}`
    cvcDisplay.innerText = cvcVal
}

const inputField = document.querySelectorAll(".input-field")
function reset(){
    cardHolderName.value = ""
    cardNum.value = ""
    month.value = ""
    year.value = ""
    cvcNum.value = ""
}
