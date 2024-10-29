const toggleSwitch = document.getElementById("toggle-btn");
const annualBasic = document.querySelector(".basic-pricing")
const annualProfessional = document.querySelector(".professional-pricing")
const annualMaster = document.querySelector(".master-pricing")

toggleSwitch.addEventListener("click", function(){
    if(this.checked){
        annualBasic.textContent = "$199.99"
        annualProfessional.textContent = "$249.99"
        annualMaster.textContent = "$399.99"
    }
    else{
        annualBasic.textContent = "$19.99"
        annualProfessional.textContent = "$24.99"
        annualMaster.textContent = "$39.99"
    }
})