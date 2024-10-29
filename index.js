const bill = document.querySelector(".bill-input")

const customTip = document.querySelector(".custom-tip")
const numPeople = document.querySelector(".num-people")
const errorMsg = document.querySelector(".error")

const percent = document.querySelectorAll(".percent")
const calculate = document.querySelector(".calculate")
const resetBtn = document.querySelector(".reset-btn")

const perPerson = document.querySelector(".per-person")
const total = document.querySelector(".total")

let val;

percent.forEach((per) => {
    per.addEventListener("click", () => {
        val = per.getAttribute("value")
})})

customTip.addEventListener("input", () => {
    val = customTip.value
})

calculate.addEventListener("click", () => {
    if (numPeople.value == 0 && numPeople.value == ""){
        errorMsg.textContent = "Can't be zero"
        errorMsg.style.color = "red"
        numPeople.style.outline = "1px solid red"
    }else{
        const cal = (bill.value * val) / 100
        const perPersonCalcu = cal / numPeople.value
        perPerson.textContent = `$${perPersonCalcu}`
        total.textContent = `$${cal}`
        errorMsg.textContent = ""
        numPeople.style.outline = "none"
    }
})

resetBtn.addEventListener("click", reset_)

function reset_(){
    customTip.value = ""
    val = undefined
    bill.value = ""
    errorMsg.textContent = ""
    numPeople.value = ""
    total.textContent = "$0.00"
    perPerson.textContent = "$0.00"
    numPeople.style.outline = "none"
    numPeople.style.outline = "none"
}

