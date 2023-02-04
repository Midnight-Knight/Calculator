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
    var result = 1;
    while (y > 0) {
        if (y % 2 === 1) {
            result *= x;
        }
        x *= x;
        y = Math.floor(y / 2);
    }
    return result;
}
function Root(x) {
    var root = x;
    var last;
    do {
        last = root;
        root = (root + x / root) / 2;
    } while (root !== last);
    return root;
}
function log(x) {
    return Math.log(x);
}
function boolSign(x, y) {
    for (var i = 0; i < x.length; ++i) {
        if (x[i] === y) {
            return true;
        }
    }
    return false;
}
function boolNumber(x) {
    switch (x[x.length - 1]) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            {
                return true;
            }
        default:
            {
                return false;
            }
    }
}
function StrHTML(x) {
    if (x === void 0) { x = "Up"; }
    console.log(OperationArray.toString());
    var str = "";
    for (var i = 0; i < OperationArray.length; ++i) {
        str += " ";
        if (OperationArray[i][0] === "!") {
            str += "!";
            str += "(";
            if (OperationArray[i].length !== 1) {
                str += OperationArray[i].slice(1);
            }
            str += ")";
        }
        else if (OperationArray[i][0] === "s") {
            str += "√";
            str += "(";
            if (OperationArray[i].length !== 1) {
                str += OperationArray[i].slice(1);
            }
            str += ")";
        }
        else if (OperationArray[i][0] === "l") {
            str += "log";
            str += "(";
            if (OperationArray[i].length !== 1) {
                str += OperationArray[i].slice(1);
            }
            str += ")";
        }
        else {
            str += OperationArray[i];
        }
    }
    document.getElementById(x).innerHTML = str;
}
function Add(x) {
    switch (OperationArray.length) {
        case 0:
            {
                switch (x) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "s":
                    case "!":
                    case "l":
                        {
                            OperationArray.push(x);
                            break;
                        }
                }
                break;
            }
        default:
            {
                var ActualCell = OperationArray[OperationArray.length - 1];
                switch (x) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        {
                            switch (ActualCell[ActualCell.length - 1]) {
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                case "s":
                                case "!":
                                case "l":
                                case ",":
                                    {
                                        OperationArray[OperationArray.length - 1] += x;
                                        break;
                                    }
                                case "+":
                                case "-":
                                case "*":
                                case "/":
                                case "%":
                                case "^":
                                    {
                                        OperationArray.push(x);
                                        break;
                                    }
                            }
                            break;
                        }
                    case ",":
                        {
                            if (boolSign(ActualCell, ",") === false && boolNumber(ActualCell) === true) {
                                OperationArray[OperationArray.length - 1] += x;
                            }
                            break;
                        }
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                    case "%":
                    case "^":
                        {
                            if (boolNumber(ActualCell) === true) {
                                OperationArray.push(x);
                            }
                            break;
                        }
                    case "s":
                    case "l":
                    case "!":
                        {
                            if (boolSign(ActualCell, "+") === true || boolSign(ActualCell, "-") === true || boolSign(ActualCell, "*") === true || boolSign(ActualCell, "/") === true || boolSign(ActualCell, "%") === true || boolSign(ActualCell, "^") === true) {
                                OperationArray.push(x);
                            }
                            break;
                        }
                    case "z":
                        {
                            switch (ActualCell[0]) {
                                case "0":
                                    {
                                        if (ActualCell.length !== 1) {
                                            OperationArray[OperationArray.length - 1] = "-".concat(OperationArray[OperationArray.length - 1]);
                                        }
                                        break;
                                    }
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                    {
                                        OperationArray[OperationArray.length - 1] = "-".concat(OperationArray[OperationArray.length - 1]);
                                        break;
                                    }
                                case "-":
                                    {
                                        if (ActualCell.length !== 1) {
                                            OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1].slice(1);
                                        }
                                        break;
                                    }
                                case "s":
                                case "!":
                                case "l":
                                    {
                                        if (ActualCell.length !== 1) {
                                            if (ActualCell[1] !== "-") {
                                                OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1][0] + "-" + OperationArray[OperationArray.length - 1].slice(1);
                                            }
                                            else {
                                                OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1][0] + OperationArray[OperationArray.length - 1].slice(2);
                                            }
                                        }
                                    }
                            }
                            break;
                        }
                }
                break;
            }
    }
    StrHTML();
}
function Del() {
    switch (OperationArray[OperationArray.length - 1].length) {
        case 1:
            {
                OperationArray.pop();
                break;
            }
        default:
            {
                if (OperationArray[OperationArray.length - 1].length === 2 && OperationArray[OperationArray.length - 1][0] === "-") {
                    OperationArray.pop();
                }
                else {
                    OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1].slice(0, -1);
                }
                break;
            }
    }
    StrHTML();
}
function AllDel() {
    OperationArray.length = 0;
    document.getElementById('Up').innerHTML = "";
}
function clickMenu() {
    var ArrClassFirst = document.querySelectorAll('.First');
    var ArrClassSecond = document.querySelectorAll('.Second');
    var ArrClassButtonWithTwoFunction = document.querySelectorAll('.ButtonWithTwoFunction');
    switch (bool) {
        case false:
            {
                for (var i = 0; i < ArrClassFirst.length; ++i) {
                    ArrClassFirst[i].style.transform = "translate(0, -8vmin)";
                    ArrClassSecond[i].style.transform = "translate(0, -8vmin)";
                }
                ArrClassButtonWithTwoFunction[0].onclick = function onclick(event) { Add('^'); };
                ArrClassButtonWithTwoFunction[1].onclick = function onclick(event) { Add('s'); };
                ArrClassButtonWithTwoFunction[2].onclick = function onclick(event) { Add('!'); };
                ArrClassButtonWithTwoFunction[3].onclick = function onclick(event) { Add('l'); };
                ArrClassButtonWithTwoFunction[4].onclick = function onclick(event) { Add('z'); };
                bool = true;
                break;
            }
        case true:
            {
                for (var i = 0; i < ArrClassFirst.length; ++i) {
                    ArrClassFirst[i].style.transform = "translate(0, 0)";
                    ArrClassSecond[i].style.transform = "translate(0, 0)";
                }
                ArrClassButtonWithTwoFunction[0].onclick = function onclick(event) { Add('%'); };
                ArrClassButtonWithTwoFunction[1].onclick = function onclick(event) { Add('/'); };
                ArrClassButtonWithTwoFunction[2].onclick = function onclick(event) { Add('*'); };
                ArrClassButtonWithTwoFunction[3].onclick = function onclick(event) { Add('-'); };
                ArrClassButtonWithTwoFunction[4].onclick = function onclick(event) { Add('+'); };
                bool = false;
                break;
            }
    }
}
//# sourceMappingURL=script.js.map