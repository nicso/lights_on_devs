const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('loggedas')
console.log(user);

const userBarElem = document.querySelector('#user-tools');
if (user === null) {
    for (let i = 0; i < userBarElem.children.length - 1; i++) {
        userBarElem.children[i].style.display = "none";
    }
    userBarElem.children[3].textContent = "logIn";
    userBarElem.children[3].style.width = "150px";
    userBarElem.children[3].classList.add("btn-accent");
    userBarElem.children[3].addEventListener('click', function (e) {
        open('http://localhost:63342/lights_on_devs/login.html','_self');
    });
    
} else {
    
}