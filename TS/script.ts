let OperationArray:Array<string> = new Array(0);
let bool:boolean = false;
function Summation(x:number, y:number): number
{
    return x + y;
}

function Subtraction(x:number, y:number): number
{
    return x - y;
}

function Multiplication(x:number, y:number): number
{
    return x * y;
}

function Division(x:number, y:number): number
{
    return x / y;
}

function Remains(x:number, y:number): number
{
    return x % y;
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
    return result;
}

function Root(x:number): number
{
    var root: number = x;
    var last: number;
    do {
        last = root;
        root = (root + x / root) / 2;
    } while (root !== last)
    return root;
}

function log(x:number): number
{
    return Math.log(x);
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
                str += "log(" + (op.length !== 1 ? op.slice(1) : "") + ")";
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
                case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "s":case "!":case "l":
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
                        case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "s":case "!":case "l":case ",":
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
                case ",":
                {
                    if(boolSign(ActualCell, ",") === false && boolNumber(ActualCell) === true && ActualCell[0] !== "!")
                    {
                        OperationArray[OperationArray.length-1] += x;
                    }
                    break;
                }
                case "+": case "-":case "*":case "/":case "%":case "^":
                {
                    if (ActualCell[0] === "l")
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
                    else if (boolNumber(ActualCell) === true)
                    {
                        OperationArray.push(x);
                    }
                    break;
                }
                case "s":case "l":case "!":
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
            ArrClassButtonWithTwoFunction[4].onclick = function onclick(event:MouseEvent){Add("z")};
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
}