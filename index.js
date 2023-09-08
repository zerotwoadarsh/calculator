let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    input.value = "Error";
                } 
                else {
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = "";
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
