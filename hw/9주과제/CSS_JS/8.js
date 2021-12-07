		var show=null, count;

		function ontime()
		{
			document.getElementById("grade").innerHTML = 0;
			var time = document.getElementById("time");
			count = 10;
			if(show != null)
				clearTimeout(show);
			outtime(time);
		}

		function outtime(cls)
		{
			count--;
			cls.innerHTML = count;
			if(count != 0)
				show = setTimeout("outtime(time)", 1000);
			else
				correct();
		}

		function make()
		{
			var one = document.getElementsByClassName("one");
			var two = document.getElementsByClassName("two");

			for(i=0; i<one.length; i++)
			{
				var num1 = Math.floor(Math.random()*99);
				var num2 = Math.floor(Math.random()*99);
				var op = Math.floor(Math.random()*4);
				var operator;

				switch(op)
				{
					case 0 : operator = "+";
						break;
					case 1 : operator = "-";
						break;
					case 2 : operator = "*";
						break;
					case 3 : operator = "/";
						break;
				}

				one[i].innerHTML = num1 + operator + num2;
			}
		}

		function correct()
		{
			var countgrade = 0;
			var one = document.getElementsByClassName("one");
			var two = document.getElementsByClassName("two");

			for(i=0; i<one.length; i++)
			{
				var question = one[i].innerHTML;
				var answer = two[i].value;
				var correct = Math.floor(eval(question));

				if(parseInt(answer) == correct)
					countgrade += 1;
				else if(answer=="")
					one[i].style.textDecoration = "line-through";
				else if(isNaN(answer))
					one[i].style.textDecoration = "line-through";
				else
					one[i].style.textDecoration = "line-through";
			}
			document.getElementById("grade").innerHTML = countgrade;
