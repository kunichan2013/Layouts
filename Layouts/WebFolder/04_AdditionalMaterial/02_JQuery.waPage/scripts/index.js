
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var fadeOutButton = {};	// @button
	var fadeInButton = {};	// @button
	var changeMultiButton = {};	// @button
	var toHeightButton = {};	// @button
	var toContainerButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	fadeOutButton.click = function fadeOutButton_click (event)// @startlock
	{// @endlock
		$('#fadeContainer').fadeOut('slow');
	};// @lock

	fadeInButton.click = function fadeInButton_click (event)// @startlock
	{// @endlock
		$('#fadeContainer').fadeIn('slow');
	};// @lock

	changeMultiButton.click = function changeMultiButton_click (event)// @startlock
	{// @endlock
		$('[id^=formExample]').css("border","3px solid red");
	};// @lock

	toHeightButton.click = function toHeightButton_click (event)// @startlock
	{// @endlock
		$('#image1 img').css('width', '');
		$('#image1 img').css('height', '100%');

	};// @lock

	toContainerButton.click = function toContainerButton_click (event)// @startlock
	{// @endlock
		$('#image1 img').css('width', '100%');
		$('#image1 img').css('height', '100%');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//********* Right Anchored Splitter ************
		var containerID = 'container1';
		var containerWidth = $$(containerID).getWidth();
		var splitPosition = $$(containerID).getSplitPosition();
		var splitWidth = containerWidth - splitWidth;
		$$(containerID).setSplitPosition(splitPosition);
		
		resizeSplit = function(){
			containerWidth = $$(containerID).getWidth();
			if($$(containerID).getSplitPosition() != splitPosition){ //Splitter was dragged
				splitWidth = containerWidth - $$(containerID).getSplitPosition();
			}
			splitPosition = containerWidth - splitWidth;
			$$(containerID).setSplitPosition(splitPosition);
		}
		
//		$('#' + containerID).resize(resizeSplit);	
		
		//Alternate Wakanda syntax
		$$(containerID).addListener("resize", resizeSplit);
		//********** End Right Anchored Splitter ************
	};// @lock


// @region eventManager// @startlock
	WAF.addListener("fadeOutButton", "click", fadeOutButton.click, "WAF");
	WAF.addListener("fadeInButton", "click", fadeInButton.click, "WAF");
	WAF.addListener("changeMultiButton", "click", changeMultiButton.click, "WAF");
	WAF.addListener("toHeightButton", "click", toHeightButton.click, "WAF");
	WAF.addListener("toContainerButton", "click", toContainerButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
