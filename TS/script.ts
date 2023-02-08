let OperationArray:Array<string> = new Array(0);
let bool:boolean = false;
function Summation(x:number, y:number): number
{
    return parseFloat(Number(x + y).toFixed(9));
}

function Subtraction(x:number, y:number): number
{
    return parseFloat(Number(x - y).toFixed(9));
}

function Multiplication(x:number, y:number): number
{
    return parseFloat(Number(x * y).toFixed(9));
}

function Division(x:number, y:number): number
{
    return parseFloat(Number(x / y).toFixed(9));
}

function Remains(x:number, y:number): number
{
    return parseFloat(Number(x % y).toFixed(9));
}

function Degree(x:number, y:number): number
{
    var result:number = 1;
    while (y > 0)
    {
        if (y % 2 === 1)
        {
            result *= x;
        }
        x *= x;
        y = Math.floor(y / 2);
    }
    return parseFloat(Number(result).toFixed(9));
}

function Sqrt(x:number): number
{
    var root: number = x;
    var last: number;
    do {
        last = root;
        root = (root + x / root) / 2;
    } while (root !== last)
    return parseFloat(Number(root).toFixed(9));
}

function lg(x:number): number
{
    return parseFloat(Number(Math.log(x) / Math.LN10).toFixed(9));
}

function ln(x:number): number
{
    return parseFloat(Number(Math.log(x)).toFixed(9));
}

function factorial(x:number): number
{
    x = Math.floor(x);
    if (x === 0)
    {
        return 1;
    }
    else
    {
        var result:number = 1;
        for(var i:number = 1; i <= x; ++i)
        {
            result *= i;
        }
        return parseInt(Number(result).toString());
    }
}

function boolSign(x:string, y:string):boolean
{
    for (var i:number = 0; i < x.length; ++i)
    {
        if (x[i] === y)
        {
            return true;
        }
    }
    return false;
}


function boolNumber(x:string)
{
    switch (x[x.length-1])
    {
        case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
        {
            return true;
        }
        default:
        {
            return false;
        }
    }
}

function StrHTML(x: string = "Up"): void {
    console.log(OperationArray.toString());
    let str = "";
    for (let i = 0; i < OperationArray.length; ++i) {
        str += " ";
        const op = OperationArray[i];
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
function Add(x:string):void
{
    switch (OperationArray.length)
    {
        case 0:
        {
            switch (x)
            {
                case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "s":case "!":case "l":case "n":
                {
                    OperationArray.push(x);
                    break;
                }
            }
            break;
        }
        default:
        {
            const ActualCell:string = OperationArray[OperationArray.length-1];
            switch (x)
            {
                case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
                {
                    switch (ActualCell[ActualCell.length-1])
                    {
                        case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "s":case "!":case "l":case "n":case ".":
                        {
                            OperationArray[OperationArray.length-1] += x;
                            break;
                        }
                        case "+":case "-":case "*":case "/":case "%":case "^":
                        {
                            OperationArray.push(x);
                            break;
                        }
                    }
                    break;
                }
                case ".":
                {
                    if(boolSign(ActualCell, ".") === false && boolNumber(ActualCell) === true && ActualCell[0] !== "!")
                    {
                        OperationArray[OperationArray.length-1] += x;
                    }
                    break;
                }
                case "+": case "-":case "*":case "/":case "%":case "^":
                {
                    if (ActualCell[0] === "l" || ActualCell[0] === "n")
                    {
                        switch (ActualCell[1])
                        {
                            case "0":
                            {
                                if (ActualCell.length > 3)
                                {
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
                    else if (ActualCell === "0" && OperationArray[OperationArray.length-2] === "/")
                    {

                    }
                    else if (boolNumber(ActualCell) === true)
                    {
                        OperationArray.push(x);
                    }
                    break;
                }
                case "s":case "l":case "!":case "n":
                {
                    if(boolSign(ActualCell, "+") === true || boolSign(ActualCell, "-") === true || boolSign(ActualCell, "*") === true || boolSign(ActualCell, "/") === true || boolSign(ActualCell, "%") === true || boolSign(ActualCell, "^") === true)
                    {
                        OperationArray.push(x);
                    }
                    break;
                }
                case "z":
                {
                    switch (ActualCell[0])
                    {
                        case "0":
                        {
                            if (ActualCell.length !== 1)
                            {
                                OperationArray[OperationArray.length - 1] = "-".concat(OperationArray[OperationArray.length - 1]);
                            }
                            break;
                        }
                        case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":
                        {
                            OperationArray[OperationArray.length - 1] = "-".concat(OperationArray[OperationArray.length - 1]);
                            break;
                        }
                        case "-":
                        {
                            if (ActualCell.length !== 1)
                            {
                                OperationArray[OperationArray.length-1] = OperationArray[OperationArray.length-1].slice(1);
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

function Del(): void
{
    switch (OperationArray[OperationArray.length-1].length)
    {
        case 1:
        {
            OperationArray.pop();
            break;
        }
        default:
        {
            if (OperationArray[OperationArray.length-1].length === 2 && OperationArray[OperationArray.length-1][0] === "-")
            {
                OperationArray.pop();
            }
            else
            {
                OperationArray[OperationArray.length - 1] = OperationArray[OperationArray.length - 1].slice(0, -1);
            }
            break;
        }
    }
    StrHTML();
}

function clickMenu(): void
{
    const ArrClassFirst:NodeListOf<HTMLElement> = document.querySelectorAll('.First');
    const ArrClassSecond:NodeListOf<HTMLElement> = document.querySelectorAll('.Second');
    const ArrClassButtonWithTwoFunction:NodeListOf<HTMLElement> = document.querySelectorAll('.ButtonWithTwoFunction');
    var translate:string;
    switch (bool)
    {
        case false:
        {
            translate = "translate(0, -8vmin)";
            ArrClassButtonWithTwoFunction[0].onclick = function onclick(event:MouseEvent){Add("^")};
            ArrClassButtonWithTwoFunction[1].onclick = function onclick(event:MouseEvent){Add("s")};
            ArrClassButtonWithTwoFunction[2].onclick = function onclick(event:MouseEvent){Add("!")};
            ArrClassButtonWithTwoFunction[3].onclick = function onclick(event:MouseEvent){Add("l")};
            ArrClassButtonWithTwoFunction[4].onclick = function onclick(event:MouseEvent){Add("n")};
            ArrClassButtonWithTwoFunction[5].onclick = function onclick(event:MouseEvent){Add("z")};
            bool = true;
            break;
        }
        case true:
        {
            translate = "translate(0, 0)";
            ArrClassButtonWithTwoFunction[0].onclick = function onclick(event:MouseEvent){Add("%")};
            ArrClassButtonWithTwoFunction[1].onclick = function onclick(event:MouseEvent){Add("/")};
            ArrClassButtonWithTwoFunction[2].onclick = function onclick(event:MouseEvent){Add("*")};
            ArrClassButtonWithTwoFunction[3].onclick = function onclick(event:MouseEvent){Add("-")};
            ArrClassButtonWithTwoFunction[4].onclick = function onclick(event:MouseEvent){Add("+")};
            ArrClassButtonWithTwoFunction[5].onclick = function onclick(event:MouseEvent){Add(".")};
            bool = false;
            break;
        }
    }
    for (var i:number = 0; i < ArrClassFirst.length; ++i)
    {
        ArrClassFirst[i].style.transform = translate;
        ArrClassSecond[i].style.transform = translate;
    }
}

function AllDel(): void
{
    OperationArray.length = 0;
    document.getElementById('Up').innerHTML = "";
    document.getElementById('Bottom').innerHTML = "";
}

function calculation(): void
{
    const ActualStrElem:string = OperationArray[OperationArray.length-1];
    if (OperationArray.length != 0 && ((OperationArray.length % 2) === 1))
    {
        switch (OperationArray.length)
        {
            case 1:
            {
                switch (ActualStrElem[0])
                {
                    case "l":case "n":case "s":case "!":
                    {
                        if (ActualStrElem[ActualStrElem.length-1] !== "." && ActualStrElem !== "l" && ActualStrElem !== "l0" && ActualStrElem !== "n" && ActualStrElem !== "n0" && ActualStrElem !== "!" && ActualStrElem !== "s")
                        {
                            StrAnswerHTML(SpecOperationCalculation(ActualStrElem));
                        }
                        break;
                    }
                    default:
                    {
                        if (ActualStrElem[ActualStrElem.length-1] !== ".") {
                            StrAnswerHTML(ActualStrElem);
                        }
                        break;
                    }
                }
                break;
            }
            default:
            {
                if (ActualStrElem[ActualStrElem.length-1] !== "." && ActualStrElem !== "l" && ActualStrElem !== "l0" && ActualStrElem !== "n" && ActualStrElem !== "n0" && ActualStrElem !== "!" && ActualStrElem !== "s") {
                    ConvertPolish(OperationArray);
                }
                break;
            }
        }
    }
}
function SpecOperationCalculation(x:string):string
{
    switch (x[0])
    {
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

function ConvertPolish(x:Array<string>):void
{
    let PolishArray:Array<string> = new Array<string>();
    let PolishStack:Array<string> = new Array<string>();
    for (var i:number = 0; i < OperationArray.length; ++i)
    {
        switch (OperationArray[i][0])
        {
            case "l":case "n":case "s":case "!":
            {
                PolishArray.push(SpecOperationCalculation(OperationArray[i]));
                break;
            }
            case "+":
            {
                while (true)
                {
                    if (PolishStack.length === 0)
                    {
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else if (PolishStack[PolishStack.length-1] !== "+" && PolishStack[PolishStack.length-1] !== "-")
                    {
                        PolishArray[PolishArray.length-1] = PolishStack.pop();
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else
                    {
                        PolishArray[PolishArray.length-1] = PolishStack.pop();
                    }
                }
                break;
            }
            case "-":
            {
                switch (OperationArray[i].length)
                {
                    case 1:
                    {
                        while (true)
                        {
                            if (PolishStack.length === 0)
                            {
                                PolishStack.push(OperationArray[i]);
                                break;
                            }
                            else if (PolishStack[PolishStack.length-1] === "+" || PolishStack[PolishStack.length-1] === "-")
                            {
                                PolishArray.push(PolishStack.pop());
                                PolishStack.push(OperationArray[i]);
                                break;
                            }
                            else
                            {
                                PolishArray[PolishArray.length-1] = PolishStack.pop();
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
            case "*":case "/":case "%":
            {
                while (true)
                {
                    if (PolishStack.length === 0)
                    {
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else if (PolishStack[PolishStack.length-1] === "*" || PolishStack[PolishStack.length-1] === "/" || PolishStack[PolishStack.length-1] === "%")
                    {
                        PolishArray.push(PolishStack.pop());
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else if (PolishStack[PolishStack.length-1] === "+" || PolishStack[PolishStack.length-1] === "-")
                    {
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else
                    {
                        PolishArray[PolishArray.length-1] = PolishStack.pop();
                    }
                }
                break;
            }
            case "^":
            {
                while (true)
                {
                    if (PolishStack.length === 0)
                    {
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else if (PolishStack[PolishStack.length-1] === "^")
                    {
                        PolishArray.push(PolishStack.pop());
                        PolishStack.push(OperationArray[i]);
                        break;
                    }
                    else
                    {
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
    while (PolishStack.length !== 0)
    {
        PolishArray.push(PolishStack.pop());
    }
    console.log(PolishArray.toString());
    PolishCalculation(PolishArray);
}

function PolishCalculation(x:Array<string>):void
{
    var oper:boolean = false;
    while (x.length !== 1)
    {
        oper = false;
        for (var i:number = 0; i < x.length; ++i)
        {
            switch (x[i])
            {
                case "+":
                {
                    x[i] = Summation(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
                case "-":
                {
                    x[i] = Subtraction(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
                case "*":
                {
                    x[i] = Multiplication(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
                case "/":
                {
                    x[i] = Division(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
                case "%":
                {
                    x[i] = Remains(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
                case "^":
                {
                    x[i] = Degree(parseFloat(x[i-2]), parseFloat(x[i-1])).toString();
                    x.splice(i-2, 2);
                    oper = true;
                    break;
                }
            }
            if (oper === true)
            {
                break;
            }
        }
    }
    StrAnswerHTML(x[0]);
}

function StrAnswerHTML(x:string):void
{
    document.getElementById("Bottom").innerHTML = x;
}