let comments = [];
loadComments();
document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    let commentNick = document.getElementById('comment-nick');
    let commentErrors = document.getElementById('comment-errors');

    if(commentName.value === ''
        || commentBody.value === ''
        || commentNick.value === ''
    ) {
        console.log(false);
        let out = '';
        out = `<div class="error">The input field must not be empty!</div>`
        commentErrors.innerHTML = out;
        return
    } else {
        commentErrors.innerHTML = '';
    }

    if(commentName.value.length >= 15) {
        console.log(false);
        let out = '';
        out = `<div class="error">The Name field must not be bigger than 15!</div>`
        commentErrors.innerHTML = out;
        return
    } else {
        commentErrors.innerHTML = '';
    }

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        nick : commentNick.value,
    }

    commentName.value = '';
    commentBody.value = '';
    commentNick.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let out = '';
    let commentField = document.getElementById('comment-field');
    comments.forEach(function(item){
        out += `
            <div class="comments__item">
                <div class="comments__text"><p>${item.body}</p> </div>
                <div class="comments__df">
                    <div class="comments__name">
                        <div class="name">${item.name}</div>
                        <div class="nick">${item.nick}</div>
                    </div>
                    <div class="comments__preview">
                         <img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jablopio_anonim.svg/1200px-Jablopio_anonim.svg.png" alt="">
                    </div>
                    <div class="comments__img">
                        <svg width="43" height="71" viewBox="0 0 43 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5625 70.3447L0.562504 28.7082L21.3808 28.7082L7.50182 0.950631L28.3201 0.950633L42.199 28.7082L42.199 70.3447L0.5625 70.3447Z" fill="#cdcdcd"/>
                        </svg>
                        <svg width="43" height="71" viewBox="0 0 43 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5625 70.3447L0.562504 28.7082L21.3808 28.7082L7.50182 0.950631L28.3201 0.950633L42.199 28.7082L42.199 70.3447L0.5625 70.3447Z" fill="#cdcdcd">
                        </svg>
                    </div>
                </div>
            </div>`
        console.log(item.body.length);
    });
    commentField.innerHTML = out;
}

