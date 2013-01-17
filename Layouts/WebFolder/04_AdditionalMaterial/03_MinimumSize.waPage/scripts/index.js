
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var minH = 400;
		var minW = 900;

		$(window).resize(function(){
			if($(window).width() < minW){
				$('#container1').css("width", minW + "px");
			} else {
				$('#container1').css("width", "");
			}

			if($(window).height() < minH){
				$('#container1').css("height", minH + "px");
			} else {
				$('#container1').css("height", "");
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
