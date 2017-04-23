 // *****START THE GAME*****//
$("#start").on("click", function() {
    $("form").show();
    $("#submit").show();
    $("#start").html("00:45");
    $("form").on("click", function() {
                $("#Ting")[0].play();      
    });
    
    // *****TIMER***** //
    var countDown = setInterval(cDown, 1000);
    var i = 45;

    function cDown() {
        i--;
        if (i > 9) {
            $("#start").html("00:" + i );
        }
        else if (i < 10 && i > -1) {
            $("#start").html("00:0" + i ); 
        }
        else {
            clearInterval(countDown);
            compare();
        }
    } 
    // *****COMPARES ALL ANSWERS TO CORRECT ANSWERS***** //
    function compare() {
        
        var allAns = [];   
        var correctAns = ["q14", "q2", "q33", "q42", "q53", "q62", "q74", "q82", "q9", "q103", "q114", "q12", "q134", "q14", "q15"];
        var correctCounter = 0;
        var incorrectCounter = 0;
        var missedCounter = 0;

        allAns.push(gameForm.question1.value);
        allAns.push(gameForm.question2.value);
        allAns.push(gameForm.question3.value);
        allAns.push(gameForm.question4.value);
        allAns.push(gameForm.question5.value);
        allAns.push(gameForm.question6.value);
        allAns.push(gameForm.question7.value);
        allAns.push(gameForm.question8.value);
        allAns.push(gameForm.question9.value);
        allAns.push(gameForm.question10.value);
        allAns.push(gameForm.question11.value);
        allAns.push(gameForm.question12.value);
        allAns.push(gameForm.question13.value);
        allAns.push(gameForm.question14.value);
        allAns.push(gameForm.question15.value);

        for (var i=0; i < correctAns.length; i++) {

            if (correctAns[i] === allAns[i]) {
                correctCounter++;  
            }
            else if (allAns[i] === "") {
                missedCounter++;  
            }
            else {
                incorrectCounter++;                
            }
        }

        $("form").hide();
        $(".results").show();
        $("#Inconceivable")[0].play();
        $("#correctCounter").html(correctCounter);
        $("#incorrectCounter").html(incorrectCounter);
        $("#missedCounter").html(missedCounter);
        $("#start").html("Restart");  

    } 

    // *****WHEN PLAYER CLICKS SUBMIT BUTTON*****//
    $("#submit").on("click", function() {
        event.preventDefault();
        clearInterval(countDown);
        compare();              
    });

// *****RESETS FORM, HIDES GAME RESULTS AND STARTS GAME AT TOP OF PAGE*****//
$("#form").trigger('reset');
$(".results").hide();
$("html, body").scrollTop(0);

});
