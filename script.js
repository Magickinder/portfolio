let showModal = (project) => {
    let modalWindow = document.getElementsByClassName("window")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    let anchor = document.getElementById("project-link");
    overlay.style.display = "block";
    modalWindow.style.display = "flex";
    modalWindow.style.flexDirection = "column";
    modalWindow.style.alignItems = "center";
    modalWindow.style.justifyContent = "center";
    anchor.innerHTML = project.toString();
}

let hideModal = () => {
    let modalWindow = document.getElementsByClassName("window")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    modalWindow.style.display = "none";
    overlay.style.display = "none";
}

const toggleBtn = document.getElementsByClassName('hamburger')[0];
const toggleBtnBars = document.getElementsByClassName('bar');
const toggleBtnCrossBarLeft = document.getElementsByClassName('x-left')[0];
const toggleBtnCrossBarRight = document.getElementsByClassName('x-right')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click', () => {
    if(navbarLinks.style.display === 'flex'){
        navbarLinks.style.display = 'none';
        for(let i = 0; i < toggleBtnBars.length; i++)
            toggleBtnBars[i].style.display = 'block';

        toggleBtnCrossBarLeft.style.display = 'none';
        toggleBtnCrossBarRight.style.display = 'none';
    }
    else{
        navbarLinks.style.display = 'flex';
        for(let i = 0; i < toggleBtnBars.length; i++)
            toggleBtnBars[i].style.display = 'none';

        toggleBtnCrossBarLeft.style.display = 'block';
        toggleBtnCrossBarRight.style.display = 'block';
    }
})