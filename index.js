let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let buttonAns=new Audio("Zans.mp3");
let buttonError=new Audio("Zerror.mp3");
let buttonClear=new Audio("Zclear.mp3");
let buttonClick=new Audio("Zbutton.mp3");
let buttonOperator=new Audio("Zoperator.mp3");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    buttonError.play();
                    input.value = "Error";
                } 
                else {
                    buttonAns.play();
                    input.value = string;
                }
            } catch (error) {
                buttonError.play();
                input.value = "Error";
            }
        } else if (e.target.innerHTML == "AC") {
            buttonClear.play();
            string = "";
            input.value = "";
        } else {
            buttonClick.play();
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
