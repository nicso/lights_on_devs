
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('userName');


const userBarElem = document.querySelector('#user-tools');
if (user === null) {
    for (let i = 0; i < userBarElem.children.length - 1; i++) {
        userBarElem.children[i].style.display = "none";
    }
    userBarElem.children[3].textContent = "logIn";
    userBarElem.children[3].style.width = "150px";
    userBarElem.children[3].classList.add("btn-accent");
    userBarElem.children[3].addEventListener('click', function (e) {
        open('login.html', '_self');
    });

} else {
    setAvatarOf(user)
}

function setAvatarOf(user) {
    fetch(userDb)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .catch(reason => {
            console.log("reason" + reason);
        })
        .then(data => {
            data.forEach(function (u) {
                if (u.username === user) {
                    console.log("-----" + u.data.avatar);
                    document.querySelector('.user-avatar').src = u.data.avatar;
                }
            });
        });
}

function getAvatarOf2(user) {
    let url = "";
    let request = new XMLHttpRequest();
    request.open("GET", userDb);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let users = request.response;
        users.forEach(function (u) {
            if (u.username === user) {
                url = u.avatar;
            }
        });
    };
    return url;
}