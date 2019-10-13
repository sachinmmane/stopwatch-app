$(function(){
	//variables
	var mode = 0;//app mode
    var timecounter = 0;//time counter
	var lapcounter = 0;//lap counter
	var action;	//variables of setIntervals
	var lapnumber = 0;	// Number of Laps
	
	// minutes, seconds, centiseconds for time and lap
	var timeminutes, timeseconds, timecentiseconds, lapminutes, lapseconds, lapcentiseconds 
	
	//on App load show start and lap button
	hideshowButton("#startButton", "#lapButton");
	
	
	$("#startButton").click(function(){
		//mode on
		mode = 1;
		//show stop and lap button
		hideshowButton("#stopButton","#lapButton")
		// start counter
		startAction();
	})
		
	
	//click on stop button
	$("#stopButton").click(function(){
		//show resume and reset button
		hideshowButton("#resumeButton", "#resetButton")
		//Stop counter
		clearInterval(action);
	})
		
	
	
	//click on resume button
	$("#resumeButton").click(function(){
	//show stop and lap button
		hideshowButton("#stopButton", "#lapButton")
		
		//start counter
		startAction();
	})
	
		
	
	//click on reset Button
		$("#resetButton").click(function(){
	//reaload the page
		location.reload();
	})
		
	
	
	//click on Lap Button
	$("#lapButton").click(function(){
	//if mode in on
		if(mode){
			//stop action
			clearInterval(action);
			//resetLap and print lap details
			lapcounter = 0;
			addlap();
			//start action
			startAction();
		}
			
		
		
	})
		
	
	//function
	//hideshowButton functions shows two buttons
	function hideshowButton(x,y) {
		$(".control").hide();
		$(x).show();
		$(y).show();
	}
	
	
	//stat the counter
	function startAction(){
		action = setInterval(function() {
			timecounter++;
			if(timecounter == 100*60*100){
				timecounter = 0;
			}
			lapcounter++;
			if(timecounter == 100*60*100){
				timecounter = 0;
			}
			updateTime();
		},10);
		
	}
	
	//update Time : converts counters to min, sec, centisec.
	function updateTime(){
		//1min = 60*100 centiseconds = 6000centiseconds
		timeminutes = Math.floor(timecounter/6000);
		//1sec = 100 centiseconds
		timeseconds = Math.floor((timecounter%6000)/100);
		timecentiseconds = ((timecounter%6000)%100);
			$("#timemiute").text(format(timeminutes));
			$("#timesecond").text(format(timeseconds));
			$("#timecentisecond").text(format(timecentiseconds));
		
		//1min = 60*100 centiseconds = 6000centiseconds
		lapminutes = Math.floor(lapcounter/6000);
		//1sec = 100 centiseconds
		lapseconds = Math.floor((lapcounter%6000)/100);
		lapcentiseconds = ((lapcounter%6000)%100);
			$("#lapmiute").text(format(lapminutes));
			$("#lapsecond").text(format(lapseconds));
			$("#lapcentisecond").text(format(lapcentiseconds));
	}
		//function to formate our number
	function format(number){
		if(number<10){
			return '0'+number;
		}else{
			return number;
		}
	}
	
	//addlap function print the lap details inside the lapbox
	
	function addlap() {
		var mylapdetails = '<div>Lap</div>';
		$(mylapdetails).appendTo("#laps");
		
	}
	
	
	
});