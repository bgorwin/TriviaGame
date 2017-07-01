$(document).ready(function(){

	console.log("connected");

	// The time remaining: and 30 second countdown. 
	var countDown = 30;
	
	displaySeconds(countDown);

	function displaySeconds(sec){
		$("#seconds").text(sec);
	};

	$( "#startB" ).click(function() {
  		$( "#startB" ).hide( "slow", function() {
  		
    	
  
	var timer = setInterval(function(sec){
		countDown--;
		
		if (countDown === 0){
			clearInterval(timer);
		}
		displaySeconds(countDown);
	}, 1000);

});
	
});

	

	// Establish the total Correct and Incorrect tally
	function win(){
	  correctCount++; 
	  $('#correctCount').append(correctCount); 
	  reset();
	}

	function lose(){
	  inCorrectCount++;
	  $('#inCorrectCount').append(inCorrectCount);
	  reset();
	};

	var correctCount = 0;
	var inCorrectCount = 0;

	

	$("button").on("click", function(){

		$("question1").hasClass("correct")
			correctCount = correctCount++;
			

			if (correctCount == "correct"){
				win();
			}
		
		$("question1").hasClass("inCorrect") 
			inCorrectCount = inCorrectCount++;
			

			if (inCorrectCount == "inCorrect"){
				lose();
			}
		
	});





	
});