function ShowTime() {
    d = new Date(); 
    document.getElementById("demo").innerHTML = d; 
} 
function SumRandom()
{
    var a =  Math.floor(Math.random() * 100) + 1;
    var b =  Math.floor(Math.random() * 100) + 1;
    document.getElementById("sum").innerHTML="a = " + a + "  b = " + b + " a + b =" + (a+b);
}

function ChangeBG()
{
    document.getElementById("bg").style.backgroundColor = "gray";
}

