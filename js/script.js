// alert("Saikat Das")
// toggle menu
var Menuitem = document.getElementById("items-menu");
Menuitem.style.maxHeight = "0px";

function menutoggle() {
    if (Menuitem.style.maxHeight == "0px") 
        {
            Menuitem.style.maxHeight = "200px"
        }
    else {
            Menuitem.style.maxHeight = "0px"
        }
}