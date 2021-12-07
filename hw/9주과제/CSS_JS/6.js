		var time=null;

		function onofftime()	//div를 눌렀을 때 멈추고 다시 눌렀을 때 시작.
		{
			if(time != null)	//time이 null이 아닐 때 멈춤
			{
				clearInterval(time);
				time = null;
				document.getElementById("clock").style.color = "gray";
			}
			else				//time이 null일 때 시작.
			{
				time = setInterval("outtime(clock)", 100);
				document.getElementById("clock").style.color = "black";
			}
		}

		function gotime()	//body에서 로드 됨.
		{
			var clock = document.getElementById("clock");
			outtime(clock);
			time = setInterval("outtime(clock)", 100);
		}

		function outtime(e)	//div에 시간 출력
		{
			var date = new Date();
			e.innerHTML = date.toLocaleTimeString()
		}