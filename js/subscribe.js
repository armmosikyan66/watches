const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
const outEmail = document.querySelector(".outEmail");

btn.onclick = () => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(email.value) === false){
        outEmail.innerHTML = `<div class="errormail">The input field must not be empty!<div>`
        return
    } else {
        outEmail.innerHTML = ''
    }

    btn.classList.add("active");
}

