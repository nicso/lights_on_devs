
let userElem = document.querySelector('#userName');
let password = document.querySelector('#password');
let form = document.querySelector('#login');

let timeOut = null;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkPass();
});

async function checkPass() {
    // console.log(await isPasswordOk(userElem.value, password.value));
    // let passOk = await isPasswordOk(userElem.value, password.value);
    let passOk = await isPasswordOk(userElem.value, password.value);

    console.log(passOk);

    if ( passOk) {
        form.submit();
    } else {
        if (form.querySelector('.error') === null) {
            let error = document.createElement("p");
            error.textContent = "Wrong password";
            error.style.color = "red";
            error.classList.add("error");
            form.append(error);
            timeOut = setTimeout(function () {
                error.remove();
            }, 3200);
        } else {
            let error = document.querySelector(".error");
            error.style.animation = "none";
            error.offsetHeight;
            error.style.animation = null;
            clearTimeout(timeOut);
            timeOut = setTimeout(function () {
                error.remove();
            }, 3200);
        }
    }
}

async function isPasswordOk(user, pass) {
    return fetch(userDb)
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
            let isOk = false;
            data.forEach(function (u) {
                if (u.username === user ) {
                    isOk = u.data.password === pass;
                }
            });
            return isOk;
        });
}