//Testing for makeStruct.js
test("Test addStruct", function() {
	var obj = {};
	
	equal(obj.a, undefined, "Empty object has no structure");
	
	addStruct("a.b.c.d",obj);
	
	equal((obj.a.b.c.d.value = true), true, "obj.a.b.c.d exists");
	equal((obj.a.b.c.value = true), true, "obj.a.b.c exists");
	equal((obj.a.b.value = true), true, "obj.a.b exists");
	equal((obj.a.value = true), true, "obj.a exists");

});

//
test("Test removeStruct", function() {
	var obj = {};
	
	addStruct("a.b.c.d", obj);
	
	equal((obj.a.b.c.d.value = true), true, "structure added succsesfully");
	
	removeStruct("a.b.c.d", obj);
	
	equal(obj.a, undefined, "obj.a == undefined");

	
	
	
});
