function calc() 
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let resultOld = document.querySelector(".result-old");
    let resultNew = document.querySelector(".result-new");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ошибка! Введите корректные числа");
        return;
    }

    let res;
    switch (operator) {
        case "+": 
            res = num1 + num2; 
            break;
        case "-": 
            res = num1 - num2; 
            break;
        case "*": 
            res = num1 * num2; 
            break;
        case "/": 
            if (Math.abs(num2) < Number.EPSILON) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            res = num1 / num2;
            break;
    }

    resultOld.textContent = resultNew.textContent;
    resultNew.textContent = `${num1} ${operator} ${num2} = ${res}`;
}