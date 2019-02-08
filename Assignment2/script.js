function getVal(val) {
    document.getElementById("clear").innerHTML = "CE";
    document.calcScreen.result.value += val;
}

function clearScreen(){
    let calc = document.calcScreen.result.value;
    if(document.getElementById("clear").innerHTML === "AC"){
        document.calcScreen.result.value = "";
    }
    else{
        document.calcScreen.result.value = "";
        calc = calc.slice(0, calc.length - 1);
        document.calcScreen.result.value = calc;
    }
}

function calcResult(){
    let calculation = document.calcScreen.result.value;
    try {
        let result = document.calcScreen.result.value = eval(calculation);
        document.getElementById("previous").innerHTML = calculation + "=" + result;
        document.getElementById("clear").innerHTML = "AC";
    }
    catch(err){
        document.calcScreen.result.value = "ERROR";
        document.getElementById("previous").innerHTML = calculation + "= ERROR";
        document.getElementById("clear").innerHTML = "AC";
    }

}

