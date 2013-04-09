Template.form.events = {

	"click input" : function ( e ) {
		e.stopImmediatePropagation();
	},
	"click textarea" : function ( e ) {
		e.stopImmediatePropagation();
	},
	"click button" : function ( e ) {
		
		var name = $("input").val();
		var text = $("textarea").val();

		if ( name.length == 0  || text.length == 0 ) { return; }

		$("input").val('');
		$("textarea").val('');

		Bubbles.insert( { name: name, text: text, date: Date.now() } );

	}

}