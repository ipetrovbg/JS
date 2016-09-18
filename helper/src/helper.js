	var $helper = (function (){

		var _name;
		var getName = function(){
			if(typeof(_name) !== 'undefined'){
				return _name;
			} else {
				return "name was not set";
			}
		}

		var setName = function( name ){
			_name = name;
		}

		var booblesort = function( arr, operator ){
			if( arr ){
				if( arr.length === 0 ){
					return arr;
				}else if( arr.length === 1 ){
					return arr;
				}
			}
				

				var swapped 	= true;
				var j 			= 0;
				var i 			= 0;
				var tmp;

				if( operator ){
					if( operator === 'undefined'){
						operator = false;
					}
				}

				while (swapped) {
			            swapped = false;
			            j++;
			            if( arr ){
			            	for (i = 0; i < arr.length - j; i++) { 
				            	if(operator){
				            		if (arr[i] < arr[i + 1]) {                       
					                        tmp = arr[i];
					                        arr[i] = arr[i + 1];
					                        arr[i + 1] = tmp;
					                        swapped = true;
					                  }
				            	}else{
				            		if (arr[i] > arr[i + 1]) {                       
					                        tmp = arr[i];
					                        arr[i] = arr[i + 1];
					                        arr[i + 1] = tmp;
					                        swapped = true;
					                  }
				            	}                                     
				                  
				            }   
			            }
			                         
			      }
			      return arr;
			}
		



		var publicFunctions = {
			getName: getName,
			setName: setName,
			booblesort: booblesort,
		}

		return publicFunctions;
	})();