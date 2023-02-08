var OperationArray = new Array(0);
var bool = false;
document.onkeyup = function (x) {
    switch (x.key.toLowerCase()) {
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
        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
        case ".":
        case "!":
        case "l":
        case "n":
        case "z":
        case "s":
            {
                Add(x.key.toLowerCase());
                return;
            }
        case ",":
            {
                Add(".");
                return;
            }
        case "=":
            {
                calculation();
                return;
            }
    }
    switch (x.code) {
        case "KeyL":
        case "KeyZ":
        case "KeyN":
        case "KeyS":
            {
                Add(x.code[x.code.length - 1].toLowerCase());
                return;
            }
        case "KeyC":
        case "Delete":
            {
                AllDel();
                return;
            }
        case "Backspace":
            {
                Del();
                return;
            }
        case "Period":
        case "Comma":
            {
                Add(".");
                return;
            }
    }
};
function Summation(x, y) {
    return parseFloat(Number(x + y).toFixed(9));
}
function Subtraction(x, y) {
    return parseFloat(Number(x - y).toFixed(9));
}
function Multiplication(x, y) {
    return parseFloat(Number(x * y).toFixed(9));
}
function Division(x, y) {
    return parseFloat(Number(x / y).toFixed(9));
}
function Remains(x, y) {
    return parseFloat(Number(x % y).toFixed(9));
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
    return parseFloat(Number(result).toFixed(9));
}
function Sqrt(x) {
    if (x === 0) {
        return 0;
    }
    var root = x;
    var last;
    do {
        last = root;
        root = (root + x / root) / 2;
    } while (root !== last);
    return parseFloat(Number(root).toFixed(9));
}
function lg(x) {
    return parseFloat(Number(Math.log(x) / Math.LN10).toFixed(9));
}
function ln(x) {
    return parseFloat(Number(Math.log(x)).toFixed(9));
}
function factorial(x) {
    x = Math.floor(x);
    if (x === 0) {
        return 1;
    }
    else {
        var result = 1;
        for (var i = 1; i <= x; ++i) {
            result *= i;
        }
        return parseInt(Number(result).toString());
    }
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
        var op = OperationArray[i];
        switch (op[0]) {
            case "!":
                str += "(" + (op.length !== 1 ? op.slice(1) : "") + ")!";
                break;
            case "s":
                str += "√(" + (op.length !== 1 ? op.slice(1) : "") + ")";
                break;
            case "l":
                str += "lg(" + (op.length !== 1 ? op.slice(1) : "") + ")";
                break;
            case "n":
                str += "ln(" + (op.length !== 1 ? op.slice(1) : "") + ")";
                break;
            default:
                str += op;
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
                    case "n":
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
                                case "n":
                                case ".":
                                    {
                                        if (boolSign(ActualCell, ".") === true) {
                                            if ((ActualCell.length - 1) - ActualCell.indexOf(".") < 9) {
                                                OperationArray[OperationArray.length - 1] += x;
                                            }
                                        }
                                        else if ((ActualCell[0] === "s" || ActualCell[0] === "!" || ActualCell[0] === "l" || ActualCell[0] === "n" || ActualCell === "-") && ActualCell.length < 10) {
                                            OperationArray[OperationArray.length - 1] += x;
                                        }
                                        else if (ActualCell.length < 9) {
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
                                        OperationArray.push(x);
                                        break;
                                    }
                            }
                            break;
                        }
                    case ".":
                        {
                            if (boolSign(ActualCell, ".") === false && boolNumber(ActualCell) === true && ActualCell[0] !== "!") {
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
                            if (ActualCell[0] === "l" || ActualCell[0] === "n") {
                                switch (ActualCell[1]) {
                                    case "0":
                                        {
                                            if (ActualCell.length > 3) {
                                                OperationArray.push(x);
                                            }
                                            break;
                                        }
                                    default:
                                        {
                                            OperationArray.push(x);
                                            break;
                                        }
                                }
                            }
                            else if (ActualCell === "0" && OperationArray[OperationArray.length - 2] === "/") {
                            }
                            else if (boolNumber(ActualCell) === true) {
                                OperationArray.push(x);
                            }
                            break;
                        }
                    case "s":
                    case "l":
                    case "!":
                    case "n":
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
function clickMenu() {
    var ArrClassFirst = document.querySelectorAll('.First');
    var ArrClassSecond = document.querySelectorAll('.Second');
    var ArrClassButtonWithTwoFunction = document.querySelectorAll('.ButtonWithTwoFunction');
    var translate;
    switch (bool) {
        case false:
            {
                translate = "translate(0, -8vmin)";
                ArrClassButtonWithTwoFunction[0].onclick = function onclick(event) { Add("^"); };
                ArrClassButtonWithTwoFunction[1].onclick = function onclick(event) { Add("s"); };
                ArrClassButtonWithTwoFunction[2].onclick = function onclick(event) { Add("!"); };
                ArrClassButtonWithTwoFunction[3].onclick = function onclick(event) { Add("l"); };
                ArrClassButtonWithTwoFunction[4].onclick = function onclick(event) { Add("n"); };
                ArrClassButtonWithTwoFunction[5].onclick = function onclick(event) { Add("z"); };
                bool = true;
                break;
            }
        case true:
            {
                translate = "translate(0, 0)";
                ArrClassButtonWithTwoFunction[0].onclick = function onclick(event) { Add("%"); };
                ArrClassButtonWithTwoFunction[1].onclick = function onclick(event) { Add("/"); };
                ArrClassButtonWithTwoFunction[2].onclick = function onclick(event) { Add("*"); };
                ArrClassButtonWithTwoFunction[3].onclick = function onclick(event) { Add("-"); };
                ArrClassButtonWithTwoFunction[4].onclick = function onclick(event) { Add("+"); };
                ArrClassButtonWithTwoFunction[5].onclick = function onclick(event) { Add("."); };
                bool = false;
                break;
            }
    }
    for (var i = 0; i < ArrClassFirst.length; ++i) {
        ArrClassFirst[i].style.transform = translate;
        ArrClassSecond[i].style.transform = translate;
    }
}
function AllDel() {
    OperationArray.length = 0;
    document.getElementById('Up').innerHTML = "";
    document.getElementById('Bottom').innerHTML = "";
}
function calculation() {
    var ActualStrElem = OperationArray[OperationArray.length - 1];
    if (OperationArray.length != 0 && ((OperationArray.length % 2) === 1)) {
        switch (OperationArray.length) {
            case 1:
                {
                    switch (ActualStrElem[0]) {
                        case "l":
                        case "n":
                        case "s":
                        case "!":
                            {
                                if (ActualStrElem[ActualStrElem.length - 1] !== "." && ActualStrElem !== "l" && ActualStrElem !== "l0" && ActualStrElem !== "n" && ActualStrElem !== "n0" && ActualStrElem !== "!" && ActualStrElem !== "s") {
                                    StrAnswerHTML(SpecOperationCalculation(ActualStrElem));
                                }
                                break;
                            }
                        default:
                            {
                                if (ActualStrElem[ActualStrElem.length - 1] !== ".") {
                                    StrAnswerHTML(ActualStrElem);
                                }
                                break;
                            }
                    }
                    break;
                }
            default:
                {
                    if (ActualStrElem[ActualStrElem.length - 1] !== "." && ActualStrElem !== "l" && ActualStrElem !== "l0" && ActualStrElem !== "n" && ActualStrElem !== "n0" && ActualStrElem !== "!" && ActualStrElem !== "s") {
                        ConvertPolish(OperationArray);
                    }
                    break;
                }
        }
    }
}
function SpecOperationCalculation(x) {
    switch (x[0]) {
        case "l":
            {
                return lg(parseFloat(x.slice(1))).toString();
                break;
            }
        case "n":
            {
                return ln(parseFloat(x.slice(1))).toString();
                break;
            }
        case "s":
            {
                return Sqrt(parseFloat(x.slice(1))).toString();
                break;
            }
        case "!":
            {
                return factorial(parseFloat(x.slice(1))).toString();
                break;
            }
    }
}
function ConvertPolish(x) {
    var PolishArray = new Array();
    var PolishStack = new Array();
    for (var i = 0; i < OperationArray.length; ++i) {
        switch (OperationArray[i][0]) {
            case "l":
            case "n":
            case "s":
            case "!":
                {
                    PolishArray.push(SpecOperationCalculation(OperationArray[i]));
                    break;
                }
            case "+":
                {
                    while (true) {
                        if (PolishStack.length === 0) {
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else if (PolishStack[PolishStack.length - 1] !== "+" && PolishStack[PolishStack.length - 1] !== "-") {
                            PolishArray[PolishArray.length - 1] = PolishStack.pop();
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else {
                            PolishArray[PolishArray.length - 1] = PolishStack.pop();
                        }
                    }
                    break;
                }
            case "-":
                {
                    switch (OperationArray[i].length) {
                        case 1:
                            {
                                while (true) {
                                    if (PolishStack.length === 0) {
                                        PolishStack.push(OperationArray[i]);
                                        break;
                                    }
                                    else if (PolishStack[PolishStack.length - 1] === "+" || PolishStack[PolishStack.length - 1] === "-") {
                                        PolishArray.push(PolishStack.pop());
                                        PolishStack.push(OperationArray[i]);
                                        break;
                                    }
                                    else {
                                        PolishArray[PolishArray.length - 1] = PolishStack.pop();
                                    }
                                }
                                break;
                            }
                        default:
                            {
                                PolishArray.push(SpecOperationCalculation(OperationArray[i]));
                                break;
                            }
                    }
                    break;
                }
            case "*":
            case "/":
            case "%":
                {
                    while (true) {
                        if (PolishStack.length === 0) {
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else if (PolishStack[PolishStack.length - 1] === "*" || PolishStack[PolishStack.length - 1] === "/" || PolishStack[PolishStack.length - 1] === "%") {
                            PolishArray.push(PolishStack.pop());
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else if (PolishStack[PolishStack.length - 1] === "+" || PolishStack[PolishStack.length - 1] === "-") {
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else {
                            PolishArray[PolishArray.length - 1] = PolishStack.pop();
                        }
                    }
                    break;
                }
            case "^":
                {
                    while (true) {
                        if (PolishStack.length === 0) {
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else if (PolishStack[PolishStack.length - 1] === "^") {
                            PolishArray.push(PolishStack.pop());
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                        else {
                            PolishStack.push(OperationArray[i]);
                            break;
                        }
                    }
                    break;
                }
            default:
                {
                    console.log(OperationArray[i]);
                    PolishArray.push(OperationArray[i]);
                    break;
                }
        }
    }
    while (PolishStack.length !== 0) {
        PolishArray.push(PolishStack.pop());
    }
    console.log(PolishArray.toString());
    PolishCalculation(PolishArray);
}
function PolishCalculation(x) {
    var oper = false;
    while (x.length !== 1) {
        oper = false;
        for (var i = 0; i < x.length; ++i) {
            switch (x[i]) {
                case "+":
                    {
                        x[i] = Summation(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
                case "-":
                    {
                        x[i] = Subtraction(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
                case "*":
                    {
                        x[i] = Multiplication(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
                case "/":
                    {
                        x[i] = Division(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
                case "%":
                    {
                        x[i] = Remains(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
                case "^":
                    {
                        x[i] = Degree(parseFloat(x[i - 2]), parseFloat(x[i - 1])).toString();
                        x.splice(i - 2, 2);
                        oper = true;
                        break;
                    }
            }
            if (oper === true) {
                break;
            }
        }
    }
    StrAnswerHTML(x[0]);
}
function StrAnswerHTML(x) {
    document.getElementById("Bottom").innerHTML = x;
}
//# sourceMappingURL=script.js.map