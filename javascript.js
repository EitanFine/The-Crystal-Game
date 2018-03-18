var random_Result;
var lost;
var win;


random_Result = Math.floor((Math.random() * 69) +30);

$("#result").html('Random Result: ' + random_result);
for(var i=0; i<4; i++){
random  = Math.floor((Math.random() * 12);

var crystal = $("<div>");
crystal.attr({"class" : 'crystal',
"data-random" : random

});

$(".crystals").append(crystal);

}

$(".crystals").on('click', function(){

console.log($(this).attr('data-random'));
}

}

