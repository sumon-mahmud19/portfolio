function openMenu(){
    let menuList = document.getElementById("menuList");
    
    if(menuList.style.display === "block"){
        menuList.style.display = "none";

    }else{
        menuList.style.display = "block";
    }
    
}