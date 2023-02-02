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
function boolException(x) {
    switch (x) {
        case '0'.toString():
        case ',':
        case '-':
        case '+':
        case '*':
        case '/':
        case '%':
        case '+/-':
        case 'log':
        case '!':
        case '^':
        case '√':
            {
                return true;
            }
        default:
            {
                return false;
            }
    }
}
function boolExceptionTwoCell(x, y) {
    console.log(x + " " + y);
    switch (x) {
        case ',':
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            {
                switch (y) {
                    case ',':
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                    case '%':
                        {
                            return true;
                        }
                    default:
                        {
                            return false;
                        }
                }
            }
        default:
            {
                return false;
            }
    }
}
function boolNumberIs(x) {
    switch (x[x.length - 1]) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case ',':
            {
                return true;
            }
        default:
            {
                return false;
            }
    }
}
function boolPoint(x) {
    for (var i = 0; i < x.length; ++i) {
        if (x[i] === ',') {
            return true;
        }
    }
    return false;
}
function boolSign(x) {
    switch (x) {
        case ',':
        case '-':
        case '+':
        case '*':
        case '/':
        case '%':
        case '+/-':
        case 'log':
        case '!':
        case '^':
        case '√':
            {
                return true;
            }
        default:
            {
                return false;
            }
    }
}
function Add(x) {
    switch (OperationArray.length) {
        case 0:
            {
                switch (boolNumberIs(x)) {
                    case true:
                        {
                            switch (x) {
                                case ',':
                                    {
                                        break;
                                    }
                                default:
                                    {
                                        OperationArray.push(x);
                                        break;
                                    }
                            }
                            break;
                        }
                }
                break;
            }
        default:
            {
                switch (boolNumberIs(x)) {
                    case true:
                        {
                            switch (boolNumberIs(OperationArray[OperationArray.length - 1])) {
                                case true:
                                    {
                                        switch (boolExceptionTwoCell(OperationArray[OperationArray.length - 1][OperationArray[OperationArray.length - 1].length - 1], x)) {
                                            case false:
                                                {
                                                    switch (boolPoint(OperationArray[OperationArray.length - 1])) {
                                                        case false:
                                                            {
                                                                OperationArray[OperationArray.length - 1] += x;
                                                                break;
                                                            }
                                                        case true:
                                                            {
                                                                switch (x) {
                                                                    case ',':
                                                                        {
                                                                            break;
                                                                        }
                                                                    default:
                                                                        {
                                                                            OperationArray[OperationArray.length - 1] += x;
                                                                            break;
                                                                        }
                                                                }
                                                                break;
                                                            }
                                                    }
                                                    break;
                                                }
                                        }
                                        break;
                                    }
                                case false:
                                    {
                                        switch (x) {
                                            case ",":
                                                {
                                                    break;
                                                }
                                            default:
                                                {
                                                    OperationArray.push(x);
                                                    break;
                                                }
                                        }
                                        break;
                                    }
                            }
                            break;
                        }
                    case false:
                        {
                            switch (boolNumberIs(OperationArray[OperationArray.length - 1])) {
                                case true:
                                    {
                                        switch (x) {
                                            case ',':
                                                {
                                                    break;
                                                }
                                            default:
                                                {
                                                    switch (OperationArray[OperationArray.length - 1][OperationArray[OperationArray.length - 1].length - 1]) {
                                                        case ',':
                                                            {
                                                                break;
                                                            }
                                                        default:
                                                            {
                                                                OperationArray.push(x);
                                                                break;
                                                            }
                                                    }
                                                    break;
                                                }
                                        }
                                    }
                                    break;
                            }
                            break;
                        }
                }
            }
    }
    var str = "";
    for (var i = 0; i < OperationArray.length; ++i) {
        str += (" " + OperationArray[i]);
    }
    document.getElementById("Up").innerHTML = str;
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
                OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1].slice(0, -1);
                break;
            }
    }
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