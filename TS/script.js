var OperationArray = new Array(0);
var bool = false;
function Summation(x, y) {
    return x + y;
}
function Subtraction(x, y) {
    return x - y;
}
function Multiplication(x, y) {
    return x * y;
}
function Division(x, y) {
    return x / y;
}
function Remains(x, y) {
    return x % y;
}
function Degree(x, y) {
    return Math.pow(x, y);
}
function Root(x) {
    return Math.sqrt(x);
}
function log(x) {
    return Math.log(x);
}
function Add(x) {
    if (OperationArray.length == 0) {
        if (x === '1' || x === '2' || x === '3' || x === '4' || x === '5' || x === '6' || x === '7' || x === '8' || x === '9') {
            OperationArray.push(x);
        }
    }
    else if (x === '1' || x === '2' || x === '3' || x === '4' || x === '5' || x === '6' || x === '7' || x === '8' || x === '9' || x === '0' || x === ',') {
        if (OperationArray[OperationArray.length - 1] === '1') {
            OperationArray[OperationArray.length - 1] += x;
        }
        else {
        }
    }
    else {
        OperationArray.push(x);
    }
    var str = "";
    for (var i = 0; i < OperationArray.length; ++i) {
        str += (" " + OperationArray[i]);
    }
    document.getElementById("Up").innerHTML = str;
}
function Del() {
    OperationArray.pop();
    var str = "";
    for (var i = 0; i < OperationArray.length; ++i) {
        if (OperationArray[i].toString() === ',' || (i != 0 && ((OperationArray[i - 1].toString() === '1' || OperationArray[i - 1].toString() === '2' || OperationArray[i - 1].toString() === '3' || OperationArray[i - 1].toString() === '4' || OperationArray[i - 1].toString() === '5' || OperationArray[i - 1].toString() === '6' || OperationArray[i - 1].toString() === '7' || OperationArray[i - 1].toString() === '8' || OperationArray[i - 1].toString() === '9' || OperationArray[i - 1].toString() === '0' || OperationArray[i - 1].toString() === ',') && (OperationArray[i].toString() === '1' || OperationArray[i].toString() === '2' || OperationArray[i].toString() === '3' || OperationArray[i].toString() === '4' || OperationArray[i].toString() === '5' || OperationArray[i].toString() === '6' || OperationArray[i].toString() === '7' || OperationArray[i].toString() === '8' || OperationArray[i].toString() === '9' || OperationArray[i].toString() === '0')))) {
            str += OperationArray[i].toString();
        }
        else {
            str += (" " + OperationArray[i].toString());
        }
    }
    document.getElementById("Up").innerHTML = str;
}
function AllDel() {
    OperationArray.length = 0;
    document.getElementById('Up').innerHTML = "";
}
function clickMenu() {
    var ArrClassFirst = document.querySelectorAll('.First');
    var ArrClassSecond = document.querySelectorAll('.Second');
    if (bool == false) {
        console.log('false');
        for (var i = 0; i < ArrClassFirst.length; ++i) {
            ArrClassFirst[i].style.transform = "translate(0, -8vmin)";
        }
        for (var i = 0; i < ArrClassSecond.length; ++i) {
            ArrClassSecond[i].style.transform = "translate(0, -8vmin)";
        }
        bool = true;
    }
    else {
        console.log('true');
        for (var i = 0; i < ArrClassFirst.length; ++i) {
            ArrClassFirst[i].style.transform = "translate(0, 0)";
        }
        for (var i = 0; i < ArrClassSecond.length; ++i) {
            ArrClassSecond[i].style.transform = "translate(0, 0)";
        }
        bool = false;
    }
}
//# sourceMappingURL=script.js.map