var inSponsorsMenu = false;
var inMenu = false;
var menuNum = 1;



function prepareEnv(){
	$(".building").css("bottom", "105%");
	$(".building.events").click( function(){ startMenu("events"); } );
	$(".building.workshops").click( function(){ startMenu("workshops"); } );
	$(".building.gallery").click( function(){ startMenu("gallery"); } );
	$(".building.fsr").click( function(){ startMenu("fsr"); } );
	
	$(".batMenuSide").hover(
		function(){
	  		$(this).stop().animate({width: '250'}, 200); }, 
		function(){
			$(this).stop().animate({width: '200'}, 200); }
		);

	$("#events.batMenuSide").click(function(){switchMenu("events")});
	$("#workshops.batMenuSide").click(function(){switchMenu("workshops")});
	$("#pronite.batMenuSide").click(function(){switchMenu("pronite")});
	$("#informals.batMenuSide").click(function(){switchMenu("informals")});
	$("#gallery.batMenuSide").click(function(){switchMenu("gallery")});
	$("#sponsors.batMenuSide").click(function(){switchMenu("sponsors")});

	$('#trick-door').click(function(){
	    $('#backdrop').slideUp();
		$('#trick-main').fadeIn("slow");
	    $("#sceneToggle").fadeIn("slow");
	    $("#sponsorHand").fadeIn("slow");
	    dropInEnv();
	});
	$('#treat-door').click(function(){
	    $('#backdrop').slideUp();
		$('#treat-main').fadeIn("slow");
		$("#sceneToggle").fadeIn("slow");
	    $("#sponsorHand").fadeIn("slow");
	    dropInEnv();
	});
	$('#sceneToggle').click(function(){
	    $('#trick-main').fadeToggle("slow");
	    $('#treat-main').fadeToggle("slow");

	});
	$("#sponsorHand").hover(function(){
		inSponsorsMenu = true;
		$(".sponsors.container.trick").animate({
			top:"10%"
		},400,"swing");
	});
	$("#sponsorHand").hover(function(){
		inSponsorsMenu = true;
		console.log("in pull");
		$(".sponsors.container.trick").stop().animate({
			top:"10%"
		},400,"swing");
	});

	$(".sponsors.container").hover(function(){},function(){
		console.log("out");
		if(inSponsorsMenu){
			$(this).stop().animate({
				top:"100%"
			},400,"swing");
			console.log("push");
			inSponsorsMenu = false;
		}
	});
	
}


function dropInEnv(){
	$(".building").each(function(indx, ele){
		setTimeout(function(){
			$(ele).animate({
		   		 bottom: "15%"
				},2000,"easeOutElastic");
			},
			Math.floor(Math.random()*500)); 
	});
}

function startMenu(category){
	if(inMenu)
		{return;}
	BatTransport.bringMenu();
	switchMenu(category);
	inMenu = true;
}

function switchMenu(category){
		
	if(!inMenu){
		$(".desc"+menuNum).children().remove();
		$(".desc"+menuNum).append($("<h1> <center>"+ category +" </center> </h1>"));
		$(".desc"+menuNum).animate({
			bottom:"10%"
		},1000, "easeOutElastic");
	}
	else{
		$(".desc"+menuNum).animate({
			bottom:"-100%"
		},500, "swing", function(){
			$(this).css("bottom","100%");
			$(this).children().remove();

		});	
		
		menuNum = (menuNum==1)? 2:1;
		$(".desc"+menuNum).children().remove();
		$(".desc"+menuNum).append($("<h1> <center>"+ category +" </center> </h1>"));
		$(".desc"+menuNum).append($("#sponsorContents"));

		$(".desc"+menuNum).animate({
			bottom:"10%"
		},500, "swing");	
		
		if(category == "sponsors")
			$("#sponsorContents").toggle();
	
		
	}

}


var checkLoaded = setInterval(function(){
	if(doneLoading){
		clearInterval(checkLoaded);
		prepareEnv();		
	}
},20)








