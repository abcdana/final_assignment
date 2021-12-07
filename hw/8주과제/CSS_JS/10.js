        var expression="";
        function number(text)   //  버튼으로 입력받은 문자를 win에 표시
        {
            expression += text;
            document.getElementById("win").value = expression;
        }

        function compute()  //  win에 표시된 수식들을 계산, 수식이 불가능한 경우를 생각해서 수정을 할려고 했으나 모르겠습니다.ex> 12+- 이런 경우에 어떻게 구분을 해야 하는지 모르겠습니다.
        {
            document.getElementById("win").value = eval(expression);
        }
        function evalclear()    //  초기화
        {
            document.getElementById("win").value = "";
            expression = "";
        }
        function Backspace()    //  마지막 문자를 지움
        {
            length = document.getElementById("win").value.length;
            document.getElementById("win").value = document.getElementById("win").value.substring(0, length - 1);
            expression = document.getElementById("win").value.toString();
            document.getElementById("win").value = expression;
        }