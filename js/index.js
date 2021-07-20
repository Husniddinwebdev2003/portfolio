function respnsiveNav() {
    let a = document.getElementById('responsive');
    let b = document.getElementById('opacity');
    a.style.right = "-100%";
    b.style.right = "-100%";
}

function respnsiveNavbar() {
    let a = document.getElementById('responsive');
    let b = document.getElementById('opacity');
    a.style.right = "0%";
    b.style.right = "0%";
}

function rightUp() {
    let a = document.getElementById('change-box');
    a.style.right = "0%";

    let empy = document.getElementById('empty');
    empy.style.zIndex = 3;

    let empyNone = document.getElementById('none-empty');
    empyNone.style.zIndex = 4;

    let rotate = document.getElementById('rotateimg');
    rotate.style.transform = "rotate(0deg)";
}

function rightDown() {
    let a = document.getElementById('change-box');
    a.style.right = "-170px";

    let empy = document.getElementById('empty');
    empy.style.zIndex = 4;

    let empyNone = document.getElementById('none-empty');
    empyNone.style.zIndex = 3;

    let rotate = document.getElementById('rotateimg');
    rotate.style.transform = "rotate(180deg)";
}

function changeBgcolorLight() {
    let btnFirst = document.getElementById('clickOne');
    btnFirst.style.backgroundColor = "#c8cbd3";

    let btnSecond = document.getElementById('clickTwo');
    btnSecond.style.backgroundColor = "#fff";

    let b = document.getElementById('b_color');
    b.style.borderColor = "#161c2d";

    let productNav = document.getElementsByClassName('pr_color');
    for (let i = 0; i < productNav.length; i++) {
        productNav[i].style.color = "rgba(22, 28, 45, 0.7)";
    }

    let backgroundChange = document.getElementsByClassName('bacground');
    for (let i = 0; i < backgroundChange.length; i++) {
        backgroundChange[i].style.backgroundColor = "#fff";
    }

    let m = document.getElementsByClassName('toggle');
    for (let i = 0; i < m.length; i++) {
        m[i].style.backgroundColor = "#161c2d";
    }

    let k = document.getElementsByClassName('changeColor')
    for (let i = 0; i < k.length; i++) {
        k[i].style.color = "#161c2d";
    }

    let cardBgcolorChange = document.getElementsByClassName('card-upbox');
    for (let j = 0; j < cardBgcolorChange.length; j++) {
        cardBgcolorChange[j].style.backgroundColor = "#fff";
    }

}

function changeBgcolorDark() {
    let btnFirst = document.getElementById('clickOne');
    btnFirst.style.backgroundColor = "#fff";

    let btnSecond = document.getElementById('clickTwo');
    btnSecond.style.backgroundColor = "#c8cbd3";

    let b = document.getElementById('b_color');
    b.style.borderColor = "#fff";

    let productNav = document.getElementsByClassName('pr_color');
    for (let i = 0; i < productNav.length; i++) {
        productNav[i].style.color = "rgba(255, 255, 255, 0.7)";
    }

    let backgroundChange = document.getElementsByClassName('bacground');
    for (let i = 0; i < backgroundChange.length; i++) {
        backgroundChange[i].style.backgroundColor = "rgb(22, 28, 45)";
    }

    let m = document.getElementsByClassName('toggle');
    for (let i = 0; i < m.length; i++) {
        m[i].style.backgroundColor = "#fff";
    }

    let k = document.getElementsByClassName('changeColor')
    for (let i = 0; i < k.length; i++) {
        k[i].style.color = "#fff";
    }

    let cardBgcolorChange = document.getElementsByClassName('card-upbox');
    for (let j = 0; j < cardBgcolorChange.length; j++) {
        cardBgcolorChange[j].style.backgroundColor = "#161c2d";
    }
}