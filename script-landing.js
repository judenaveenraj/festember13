var doneLoading = false;

$('#trick-door').mouseover(function(){
    $('#trick').animate({top:'10%'},500,'linear');
});

$('#treat-door').mouseover(function(){
    $('#treat').animate({top:'10%'},500,'linear');
});





        var imageContainer;
        var currentImage;
        var loaderWidth;
        var loaderColor;
  		var borderPadding;
        var preload;
		var oldItem;



            manifest = [
                {src:"workshops.png", id:"image0"},
                {src:"gallery.png", id:"image1"},
                {src:"events.png", id:"image2"},
                {src:"fsr.png", id:"image3"},
                {src:"workshops_trick.png", id:"image4"},
                {src:"gallery_trick.png", id:"image5"},
                {src:"events_trick.png", id:"image6"},
                {src:"fsr_trick.png", id:"image7"},
                {src:"bats.png", id:"image7"},
                {src:"sponsorhand.png", id:"image8"},
                {src:"festember.png", id:"image9"},
                
            ];

            function init(){
                preload = new createjs.LoadQueue(true, "images/");
            // Use this instead to use tag loading
            //preload = new createjs.PreloadJS(false);

            preload.addEventListener("progress", handleProgress);
            preload.addEventListener("complete", handleComplete);
            preload.loadManifest(manifest);

            createjs.Ticker.setFPS(30);
        }

        function stop() {
            if (preload != null) { preload.close(); }
        }

        function handleProgress(event) {
            if(event)
            $("#loader h2").text((event.loaded*100.0).toString()) ;
        }

        function handleComplete(event) {
            $("#loader h2").text("Final Loading");
            var css = document.createElement('link');
			css.type = "text/css";
			css.rel  = "stylesheet";
			css.href = "main.css?"+Math.random().toString();

			// a new JS
			var js  = document.createElement("script");
			js.type = "text/javascript";
			js.src  = "script.js?"+Math.random().toString();

			// preload JS and CSS
			$("head").append(css);
			document.body.appendChild(js);
            doneLoading = true;
            BatTransport.init(200);
            $("#loader h2").text("Done Loading");

        }
        init();