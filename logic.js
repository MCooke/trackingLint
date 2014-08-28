// Check Everything
// If not excluded
// Data Attr Check

// Data Attr Check - Function
// * Check for data attr on self
// * If not on self check parent/child
// * If found either cat or act check for other
// * Check each data attr - Is not empty string, has valid characters



//Classes
//Id
//Exclusion Test
//Data Attributes Test

var result = {};

var exclusion = [
    {
        "type": "class",
        "element": "selectboxit"
    },
    {
        "type": "id",
        "element": "selectboxit2"
    }
];

$.each( $('*'), function(i){
	self = this;
	
	$.each( exclusion, function(){
		switch ( this.type ){
			case "class":
				//If we have the excluded class
				if ( self.className.indexOf( this.element ) > -1 ){
					exclusionTest = 0;
				} else {
					exclusionTest = 1;
				}
			break;
		}
	});

	result[i] = [{
		"id": "itemID",
		"class": self.className,
		"exclusionTest": exclusionTest
	}];
});


$.each( result, function(){
	pass = this[0]['exclusionTest'];
	if ( pass == 1 ){
	 console.log( "pass" );
	}
});


// Check every A and Button for tracking
// Data Attr Check