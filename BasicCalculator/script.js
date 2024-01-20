const buttons = document.querySelectorAll(".box");
const input = document.querySelector("#input");
let string = "";

buttons.forEach((button) => button.addEventListener("click", clicked));

function clicked() {
    try {
        if (this.innerHTML === "=") {
            string = eval(string);
            if (isNaN(string) || !isFinite(string)) {
                input.value = "Error";
            }
            else {
                input.value = string;
            }
        } 
        else if (this.innerHTML === "C") {
            string = "";
            input.value = string;
        } 
        else {
            string = string + this.innerHTML;
            input.value = string;
        }
    } 
    catch (error) {
        input.value = "Error";
    }
}
