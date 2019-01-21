sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function (Controller) {
																																																									"use strict";

	return Controller.extend("trainingBaseProject.controller.View1", {
		


 calculate: function(value) {
    for (var index = 1; index <= value; index++) {
        var i = index;
        var sum=0;
        var summation = 0;
        sum = this.computeDigits(i, sum);
        summation = this.computeDigits(sum, summation);

        if (summation === 7) {
            console.log(index);
        }
        
    }
},
																																																																																																																																																																																		
																																																																																																																																																																																		computeDigits: function(i, sum) {
																																																																																																																																																																																		    while(i>9) {
        sum += i%10;
        i = i/10;
    }
    sum += i;
    
    return sum;
   
},

onclick: function(){
  var value = this.getView().byId("onclick").getValue();
    this.calculate(value);
}


	});
});