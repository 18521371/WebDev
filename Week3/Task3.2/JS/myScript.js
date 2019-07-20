

function LoadTime()
{
    
   var t = setInterval(Gettime,1000);

}

function Gettime()
{
    var d = new Date();
    document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    if (d.getHours() > 0 && d.getHours() < 10 )
        document.getElementById("Buoi").innerHTML = "Good morning,"
    else if (d.getHours() >= 10 && d.getHours() < 19)
        document.getElementById("Buoi").innerHTML = "Good afternoon,"
    else 
        document.getElementById("Buoi").innerHTML = "Good evening,"
}
function SetBackground()
{
    var image = ["Image/sunset_pond_trees_landscape_86151_3840x2400.jpg",
    "Image/10-1.jpg", "Image/wallpaper-4k-hinh-nen-4k-ky-quan-thien-nhien-dep_100009861.jpg"];
    var rd = Math.floor(Math.random() * 3);   
    document.getElementById("body").style.backgroundImage = "url('" + image[rd] + "')";

}
function setThanhngu()
{
    var sentence = [
        "Money is a good servant but a bad master",
        "The grass are always green on the other side of the fence",
        "Penny wise pound foolish"
    ];
    var rd = Math.floor(Math.random() * 3);     
    document.getElementById("Thanhngu").innerHTML = '"'+ sentence[rd] + '"';
}

function Tinh(pstuoi)
{
    var d = new Date();
    var tuoi = d.getFullYear() - pstuoi;
    document.getElementById("tuoi").innerHTML = "Bạn đang " + tuoi + " tuổi";
}

function getTime()
{
    var name = document.getElementById("formage0").value;
    document.getElementById("Name").innerHTML = name;

    //-----------------
    var birth = new Date(document.getElementById("formage3").value); 
    var pre = new Date(); 
    span = pre - birth;
    var displayYear = Math.floor( span / 1000 / 3600 / 24 / 365);
    span -= displayYear*1000*3600*24*365;
    var displayMonth = Math.floor(span /1000/3600/24/30);
    span -= displayMonth*24*3600*1000*30;
    var displayDay = Math.floor(span/1000/3600/24);
    span -= displayDay*24*3600*1000;
    var displayHours = Math.floor(span /1000/3600);
    span -= displayHours*3600*1000;
    var displayMinutes = Math.floor(span/1000/60);
    span -= displayMinutes*60*1000;
    var displaySecond = Math.floor(span/1000);
    document.getElementById("tuoi").innerHTML = "Bạn đang " + displayYear   + " tuổi và bạn đã sống được " + displayYear + " năm "
    + displayMonth + " tháng " + displayDay + " ngày " + displayHours + " giờ " + displayMinutes + " phút " + displaySecond + " giây "; 
}

function loadlive()
{
    var t = setInterval(getTime,1000);
}
