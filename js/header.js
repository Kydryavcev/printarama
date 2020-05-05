document.getElementById('MenuIcon').onclick = function() {
    document.getElementById('SideMenuMain').style.display = "flex";
};

document.getElementById('ExitMenu').onclick = function () {
    document.getElementById('SideMenuMain').style.display = "none";
}

document.getElementById('FormSearch').onsubmit = function () {
    alert("------");
    return false;
}
