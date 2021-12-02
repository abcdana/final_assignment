window.onload = function() {
    document.getElementById('welcome-msg').style.visibility = 'hidden';
}


const id = document.getElementById('id'); // id를 입력할 수 있는 input 
const password = document.getElementById('password'); //  password를 입력할 수 있는 input
let loginBtn = document.getElementById('login-btn');
let welcomeMsg = document.getElementById('welcome-msg');
let visitorId = document.getElementById('visitor-id');


// id를 입력했을 때 && 비밀번호를 6자 이상 입력을 동시에 충족했을 때 로그인 버튼이 활성화(투명도 1)
id.addEventListener('keyup', function(){
    if(id.value !== "" && password.value.length > 5){
        loginBtn.style.opacity = '1';
    } // loginButton : 로그인 버튼
});

password.addEventListener('keyup', function(){
    if(id.value !== "" && password.value.length > 5){
        loginBtn.style.opacity = '1';
    }
});


function printId()  {
    const idVal = document.getElementById('id').value;
    visitorId.innerHTML = idVal;
}

loginBtn.addEventListener('click', function(){
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('welcome-msg').style.visibility = 'visible';
});
