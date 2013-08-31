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
	    $("#sponsorTab").fadeIn("slow");
	    $("#street").fadeIn("slow");
	    $("#loader").fadeOut("fast");
	    $("#festLogo").fadeIn(1000);
	    $("#bg_building").fadeIn("slow");
	    $("#car").fadeIn("slow");
	    $("#moonsky").fadeIn(1000);
	    $("#sponsorContainer").show();
	    dropInEnv();
	});
	$('#treat-door').click(function(){
	    $('#backdrop').slideUp();
		$('#treat-main').fadeIn("slow");
		$("#sceneToggle").fadeIn("slow");
	    $("#sponsorTab").fadeIn("slow");
	    $("#street").fadeIn("slow");
	    $("#loader").fadeOut("fast");
	    $("#festLogo").fadeIn(1000);
	    $("#bg_building").fadeIn("slow");
	    $("#car").fadeIn("slow");
	    $("#moonsky").fadeIn(1000);
	    $("#sponsorContainer").show();
	    dropInEnv();

	});
	$('#sceneToggle').click(function(){
	    $('#trick-main').stop().fadeToggle("slow");
	    $('#treat-main').stop().fadeToggle("slow");

	});
	$("#sponsorTab").hover(function(){
		inSponsorsMenu = true;
		$(".sponsors.container").animate({
			top:"10%"
		},400,"swing");
	});

	$(".sponsors.container").hover(function(){},function(){
		//if(inSponsorsMenu){
			$(this).stop().animate({
				top:"100%"
			},400,"swing");
		//	inSponsorsMenu = false;
		//}
	});
	
}


function dropInEnv(){
	$(".building").each(function(indx, ele){
		setTimeout(function(){
			$(ele).animate({
		   		 bottom: "28%"
				},2000,"easeOutElastic");
			},
			Math.floor(Math.random()*500)); 
	});
	$("#street").animate({
		   		 left: "0%"
				},1500,"easeOutQuad");
	setTimeout(function(){
		$("#sponsorTab").animate({
		   		 bottom: "0%"
				},500,"swing");
	},2000);
	setTimeout(function(){
		$("#sceneToggle").animate({
		   		 right: "2%"
				},1000,"easeOutElastic");
	},2500);
	setTimeout(animateCar, 2000);

	//Delayed loading of sponsor logos
	$('.sponsor_c img').each(function(){
	  $(this).attr('src', $(this).attr('delayedsrc'));
	});
		
}

function animateCar(){
	$("#car").animate({
		left:"-30%"
	}, 10000, "linear", function(){ $(this).css("left","110%"); animateCar();});
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








