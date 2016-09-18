;(function(){

	Array.prototype.booblesort = function( operator ){

		if( this.length === 0 ){
			return this;
		}else if( this.length === 1 ){
			return this;
		}

		var arr 		= this;
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

}());