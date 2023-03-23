var nowDonate = document.querySelector(".nav2");
var hamOpen = document.querySelector(".open");
var navClose = document.querySelector(".close");
var img = document.querySelectorAll("img");

hamOpen.addEventListener("click", show);
navClose.addEventListener("click", close);

function show(){
    nowDonate.style.display = "block";
    nowDonate.style.top = "0";
    img.style.display = "none";
};

function close(){
    nowDonate.style.top = "-300%";
    open.style.display = "block";
};

function copyText(htmeElement)
{
    if(!htmeElement) 
    {
        return;
    }

    let elementText = htmeElement.innerText;

    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector(".copy_btn").onclick = function()
{
    copyText(document.querySelector(".text"));
}

document.querySelectorAll(".acc .qrl").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup_img").style.display = "block";
        document.querySelector(".popup_img img").classList = image.getAttribute("qrl");

    }
});

document.querySelector(".popup_img span").onclick = () =>{
    document.querySelector(".popup_img").style.display = "none";
}

