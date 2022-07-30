const ratingDisp = document.querySelector("#rating-state")
const thankyouDisp = document.querySelector("#thankyou-state")

const radioButton = document.querySelectorAll(".radio-button")

let checkedRadioButton = -1;

for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].onclick = () => {
        radioButton[i].ariaChecked = true
        if (checkedRadioButton !== -1 & i !== checkedRadioButton) {
            radioButton[checkedRadioButton].ariaChecked = false
        }
        checkedRadioButton = i
    }
}

const submitButton = document.querySelector("#submit")
const rating = document.querySelector("#rating")

submitButton.onclick = () => {
    if (checkedRadioButton !== -1) {
        ratingDisp.style.display = "none"
        thankyouDisp.style.display = "flex"
        rating.innerHTML = checkedRadioButton + 1
    }
}