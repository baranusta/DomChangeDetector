var DataChangedTracker = (function(){
	var method = {};
	var isDataChangedListener;
		
	var trackedData = {num:0};
	
	method.initialize = function (trackedClass, listener) {

	    if (typeof listener === "function") {
	        var items = document.getElementsByClassName(trackedClass);
	        for (var i = 0; i < items.length; i++) {
	            items[i].addEventListener("onChange",onChange);
	            trackedData[items[i].id] = new TrackedElement(items[i].id, items[i].value);
	        }
		    isDataChangedListener = listener;
	    }
	}

	method.getChangedData = function () {
	    var changedData = {};
	    for (var property in trackedData) {
	        if (trackedData.hasOwnProperty(property)) {
	            if (!(property == 'num')) {
	                changedData[property] = document.getElementById(property).value;
	            }
	        }
	    }
	    return changedData;
	}
	
	 function onChange(f) {
		var id = f.srcElement.id;
		var text = f.srcElement.value;
		trackedData[id].isChanged = isChanged(trackedData[id].initialValue,text,trackedData[id].isChanged)
	}
	
	function TrackedElement(name,data){
		this.isChanged = false;
		this.initialValue = data;
	}
	
	function isChanged(text1,text2,state){
		if(text1.localeCompare(text2) != 0)
		{
			if(!state){
				invokeListener(true);
			}
			return true;
		}
		else{
			if(state){
				invokeListener(false);
			}
			return false;
		}
	}
	
	function invokeListener(state){
		if(state)
		{
			if(trackedData.num==0)
			{
				isDataChangedListener(state);
			}
			trackedData.num++;
		}
		else{
			if(trackedData.num==1){
				isDataChangedListener(state);
			}
			trackedData.num--;
		}
	}
	return method;
}());