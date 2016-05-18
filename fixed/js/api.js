
/*section1*/
;(function(){
	/*head_portrait*/
	var oPs = utils.getElementsByClass("head_portrait_text");
	var line = utils.getElementsByClass("line")[0];

	var load = document.getElementById("load");

	function fnLoad() {
		var me = utils.getElementsByClass("meImg")[0];
		var realSrc = me.getAttribute('realSrc');
		console.log(realSrc);
		me.src = realSrc + "?" + Math.random();
		me.onload = function() {
			animate(load, {"opacity": 0}, 1, 1000);
			window.setTimeout(function(){
				load.style.display = "none";
				portraitTextAni();
			},1000);
		}
	}
	fnLoad();


	function portraitTextAni() {
		var i = 0;
		function step() {
			animate(oPs[i], {"top": 0}, 1, 800);
			i++;
			if(i>=oPs.length)
				return;
			window.setTimeout(step, 1000);
		}
		step();

		window.setTimeout(function(){
			animate(line, {width: 500}, 1, 1000);
		}, 1500);
	}

	function resetportraitText() {
		for(var i=0; i<oPs.length; i++){
			oPs[i].style.top = "18px";
		}
		line.style.width = 0;

	}

	Event.on(window, "hashchange", function(){
		if(location.hash == "#firstPage"){
			portraitTextAni();
		}else {
			resetportraitText();
		}
	});

	




})();


/*section2*/
;(function(){
	var procseeDivs = utils.getElementsByClass("process_inner");
	var percentOspans = document.getElementById('skills').getElementsByTagName('span');
	var processState = true;
	Event.on(window, "hashchange", function(){
		console.log(location.hash);
		if(location.hash == "#secondPage"){
			if(processState === true){
				processState = false;
				utils.addClass(procseeDivs[0], "increase_width_one")
				utils.addClass(procseeDivs[1], "increase_width_two")
				utils.addClass(procseeDivs[2], "increase_width_three")
				utils.addClass(procseeDivs[3], "increase_width_four")
				utils.addClass(procseeDivs[4], "increase_width_five")
				utils.addClass(procseeDivs[5], "increase_width_six")
				increaseNum(percentOspans[0], 95, 3000);
				increaseNum(percentOspans[1], 85, 3000);
				increaseNum(percentOspans[2], 80, 3000);
				increaseNum(percentOspans[3], 60, 3000);
				increaseNum(percentOspans[4], 50, 3000);
				increaseNum(percentOspans[5], 50, 3000);
			}
		}else{
			processState = true;
			utils.removeClass(procseeDivs[0], "increase_width_one")
			utils.removeClass(procseeDivs[1], "increase_width_two")
			utils.removeClass(procseeDivs[2], "increase_width_three")
			utils.removeClass(procseeDivs[3], "increase_width_four")
			utils.removeClass(procseeDivs[4], "increase_width_five")
			utils.removeClass(procseeDivs[5], "increase_width_six")
		}
	});

	function increaseNum(ele, target, duraction){
		var interval = duraction/target;
		var times = 0;
		interval = 15;
		function step() {
			times += interval;
			if(times < duraction) {
				num = times/duraction * target;
				ele.innerHTML = Math.ceil(num) + '%';
			}else {
				ele.innerHTML = target + '%'
				return;
			}
			window.setTimeout(step, interval);
		}
		step();
	}
})();

/*section3*/
;(function(){
	var demo = utils.getElementsByClass('demo');
	var section4_left = utils.getElementsByClass('section4_left')[0];
	var section4_right = utils.getElementsByClass('section4_right')[0];
	Event.on(window, "hashchange", function(){
		if(location.hash == "#3rdPage"){
			for(var i=0; i<demo.length; i++){

				utils.addClass(demo[i], 'demo-action');
			}
		}else {
			for(var i=0; i<demo.length; i++){
				utils.removeClass(demo[i], 'demo-action');
			}
		}


	});
})();