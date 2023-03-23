var btn_about = document.getElementById("btn_about");
var btn_donate = document.getElementById("btn_donate");
var about = document.getElementById("about");
var donate = document.getElementById("donate");

btn_about.addEventListener("click", ()=>{
    about.style.display = "block";
    donate.style.display = "none";
});

btn_donate.addEventListener("click", ()=>{
    about.style.display = "none";
    donate.style.display = "block";
});   

var item = document.getElementsByClassName("btn");

for(var i = 0; i < item.length; i++)
{
    item[i].onclick = function(){

        var el = item[0];
        while(el)
        {
            if(el.tagName === "DIV"){
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }


        this.classList.add("active");
    };
}

var main = document.querySelector(".nav");
var hamOpen = document.querySelector(".open");
var navClose = document.querySelector(".close");

hamOpen.addEventListener("click", show);
navClose.addEventListener("click", close);

function show(){
    main.style.display = "block";
    main.style.top = "0";
};

function close(){
    main.style.top = "-300%";
    open.style.display = "block";
};





