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

function boolException(x:string): boolean
{
    switch (x)
    {
        case '0'.toString():case ',':
        case '-':case '+':case '*':case '/':case '%':
        case '+/-':case 'log':case '!':case '^':case '√':
        {
            return true;
        }
        default:
        {
            return false;
        }
    }
}

function boolExceptionTwoCell(x:string, y:string):boolean
{
    switch (x)
    {
        case ',':case '+':case '-':case '*':case '/':case '%':
        {
            switch (y)
            {
                case ',':case '+':case '-':case '*':case '/':case '%':
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

function boolNumberIs(x:string):boolean
{
    switch (x[x.length-1])
    {
        case '1':case '2':case '3':case '4':case '5':case '6':case '7':case '8':case '9':case '0':case ',':
        {
            return true;
        }
        default:
        {
            return false;
        }
    }
}

function boolPoint(x:string): boolean
{
    for (var i:number = 0; i < x.length; ++i)
    {
        if (x[i] === ',')
        {
            return true;
        }
    }
    return false;
}

function boolSign(x:string): boolean
{
    switch (x)
    {
        case ',':
        case '-':case '+':case '*':case '/':case '%':
        case '+/-':case 'log':case '!':case '^':case '√':
        {
            return true;
        }
        default:
        {
            return false;
        }
    }
}

function Add(x:string):void
{
    switch (OperationArray.length)
    {
        case 0:
        {
            switch (boolNumberIs(x)) {
                case true:
                {
                    switch (x) {
                        case '0':case ',':
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
            switch (boolNumberIs(x))
            {
                case true:
                {
                    switch (boolNumberIs(OperationArray[OperationArray.length-1])) {
                        case true:
                        {
                            switch (boolExceptionTwoCell(OperationArray[OperationArray.length-1][OperationArray[OperationArray.length-1].length-1],x)) {
                                case false:
                                {
                                    switch (boolPoint(OperationArray[OperationArray.length-1])) {
                                        case false:
                                        {
                                            OperationArray[OperationArray.length-1] += x;
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
                                                    OperationArray[OperationArray.length-1] += x;
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
                            OperationArray.push(x);
                        }
                    }
                    break;
                }
                case false:
                {
                    switch (boolNumberIs(OperationArray[OperationArray.length-1]))
                    {
                        case true:
                        {
                            switch (x) {
                                case ',':
                                {
                                    break;
                                }
                                default:
                                {
                                    switch (OperationArray[OperationArray.length-1][OperationArray[OperationArray.length-1].length-1]) {
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

    var str:string = "";
    for (var i:number = 0; i < OperationArray.length; ++i)
    {
        str += (" " + OperationArray[i]);
    }
    document.getElementById("Up").innerHTML = str;
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
            OperationArray[OperationArray.length-1] = OperationArray[OperationArray.length-1].slice(0, -1);
            break;
        }
    }

    var str:string = "";
    for (var i:number = 0; i < OperationArray.length; ++i)
    {
        if (OperationArray[i].toString() === ',' || (i != 0 && ((OperationArray[i-1].toString() === '1' || OperationArray[i-1].toString() === '2' || OperationArray[i-1].toString() === '3' || OperationArray[i-1].toString() === '4' || OperationArray[i-1].toString() === '5' || OperationArray[i-1].toString() === '6' || OperationArray[i-1].toString() === '7' || OperationArray[i-1].toString() === '8' || OperationArray[i-1].toString() === '9' || OperationArray[i-1].toString() === '0' || OperationArray[i-1].toString() === ',') && (OperationArray[i].toString() === '1' || OperationArray[i].toString() === '2' || OperationArray[i].toString() === '3' || OperationArray[i].toString() === '4' || OperationArray[i].toString() === '5' || OperationArray[i].toString() === '6' || OperationArray[i].toString() === '7' || OperationArray[i].toString() === '8' || OperationArray[i].toString() === '9' || OperationArray[i].toString() === '0'))))
        {
            str += OperationArray[i].toString();
        }
        else
        {
            str += (" " + OperationArray[i].toString());
        }
    }
    document.getElementById("Up").innerHTML = str;
}

function AllDel(): void
{
    OperationArray.length = 0;
    document.getElementById('Up').innerHTML = "";
}

function clickMenu(): void
{
    var ArrClassFirst:NodeListOf<HTMLElement> = document.querySelectorAll('.First');
    var ArrClassSecond:NodeListOf<HTMLElement> = document.querySelectorAll('.Second');
    if (bool == false)
    {
        console.log('false');
        for (var i:number = 0; i < ArrClassFirst.length; ++i)
        {
            ArrClassFirst[i].style.transform = "translate(0, -8vmin)";
        }
        for (var i:number = 0; i < ArrClassSecond.length; ++i)
        {
            ArrClassSecond[i].style.transform = "translate(0, -8vmin)";
        }
        bool = true;
    }
    else
    {
        console.log('true');
        for (var i:number = 0; i < ArrClassFirst.length; ++i)
        {
            ArrClassFirst[i].style.transform = "translate(0, 0)";
        }
        for (var i:number = 0; i < ArrClassSecond.length; ++i)
        {
            ArrClassSecond[i].style.transform = "translate(0, 0)";
        }
        bool = false;
    }
}