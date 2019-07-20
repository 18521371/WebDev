

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
    
    var birth = document.getElementById("formage3").value;
    Tinh(birth);
    var name = document.getElementById("formage0").value;
    document.getElementById("Name").innerHTML = name;
}
