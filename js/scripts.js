/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const id = document.getElementById('id'); // id를 입력할 수 있는 input 
const password = document.getElementById('password'); //  password를 입력할 수 있는 input


// id를 입력했을 때 && 비밀번호를 6자 이상 입력을 동시에 충족했을 때 로그인 버튼이 활성화(투명도 1)
id.addEventListener('keyup', function(){
    if(id.value !== "" && password.value.length > 5){
         document.getElementById('login-btn').style.opacity = '1';
    } // loginButton : 로그인 버튼
});

password.addEventListener('keyup', function(){
    if(id.value !== "" && password.value.length > 5){
         document.getElementById('login-btn').style.opacity = '1';
    }
});

