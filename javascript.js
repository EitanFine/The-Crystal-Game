var random_Result;
var lost = 0;
var win = 0;
var previous = 0;


var startGame = function(){

$(".crystals").empty();

random_Result = Math.floor((Math.random() * 69) + 30);

$("#result").html('Random Result: ' + random_Result);



var images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Baseball.svg/2000px-Baseball.svg.png',
            'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sport-PNG/American_Football_Ball_PNG_Clipart_Picture.png?m=1435373701',
            'http://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Football-PNG-Transparent-Image.png',
             'http://pngimagesfree.com/Sports/Basketball/Basketball__png-sports_red_.png']

for (var i = 0; i < 4; i++) {
    var random = Math.floor((Math.random() * 11) + 1);
        console.log(i);
        var crystal = $("<div>");
        crystal.attr({
        "class": "crystal",
        "data-random": random
    });

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size": "cover"


    });

    $(".crystals").append(crystal); 

}
    // $("#previous").append(previous);

}

startGame();
 


$(document).on('click', ".crystal", function () {
    
    
    var num = parseInt($(this).attr("data-random"));
    
    previous+= num;
    $("#previous").html("Total Score: " + previous);
    console.log(previous);
    


   if (previous> random_Result){
        console.log("You Lost!");
        lost ++;
         $("#losses").html("Losses: " + lost);
         previous = 0;
         startGame();
         previous = 0;
   }    

    else if(previous === random_Result) {
        console.log("You Win!");
        win ++ ;
        $("#wins").html("Wins: " + win);
        previous = 0;

        startGame();
        

    }

});


