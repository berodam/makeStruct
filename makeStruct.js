//Add a structure from the string 
// in format 'a.b.c.d'
// into any object
function addStruct(str, obj) {
    var list = str.split('.').reverse();
    var currentLocation = '';

    while (list.length) {
        //build a string for current location
        currentLocation += ('["' + list.pop() + '"]');

        //build the string for evaluation
        var evalString = ('obj' + currentLocation + '={}');

        //put empty object at each new level
        eval(evalString);
    }
}


// Remove structure from an object
// delete the node from the highest level

function removeStruct(str, obj) {	
	var list = str.split('.');
	delete obj[list[0]];
};

