let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.addEventListener("click", function (e) {
    if(list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
})



