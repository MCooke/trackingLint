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

checkDataAttributes = function( object ){
	dataCat = $( object ).attr('data-category');
	dataAct = $( object ).attr('data-action');
	tagName = self.nodeName.toLowerCase();

	if ( dataCat || dataAct ){
		if ( dataAct && dataCat ){
			testAttributes = 1;
		} else {
			testAttributes = 0;
		}
	} else {
		if (tags.indexOf(tagName) > -1){
			testDesiredTag = 0;
			testAttributes = 0;
		} else {
			testDesiredTag = 1;
			testAttributes = 1;
		}
	}
}


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

var tags = ["button", "a"];

$.each( $('*'), function(i){
	self = this;
	testDesiredTag = 1;
	testAttributes = 1;
	$.each( exclusion, function(){
		switch ( this.type ){
			case "class":
				//If we have the excluded class
				if ( self.className.indexOf( this.element ) > -1 ){
					isExcluded = 1;
				} else {
					isExcluded = 0;
				}
				break;
			}
		});

	checkDataAttributes(self);
	testParentAttributes = 0;

	if ( dataTest == 0 ){
		testParentAttributes = checkDataAttributes( self.parent );
	}


	result[i] = [{
		"id": i,
		"class": self.className,
		"tagName": tagName,
		"category": dataCat,
		"action": dataAct,
		"isExcluded": isExcluded,
		"testAttributes": testAttributes,
		"testParentAttributes": testParentAttributes,
		"testDesiredTag": testDesiredTag
	}];
});

failedResults = {};
$.each( result, function(j){
	pDataTest = this[0]['testAttributes'];
	ptestDesiredTag = this[0]['testDesiredTag'];
	pParentTest = this[0]['testParentAttributes'];

	failure = 0;
	if ( pDataTest == 0 || ptestDesiredTag == 0){
		failure = 1;
	}
	if ( this[0]['isExcluded'] == 1 || pParentTest == 1){
		failure = 0;
	}
	if (failure == 1){
		failedResults[j] = this[0];
	}
});

console.log(failedResults);

// Check every A and Button for tracking
// Data Attr Check