
var m_bubbleObjects = [];
var m_pointer = 0;

Template.main.bubble = function () {
	return Bubbles.find();
};

Template.main.createBubble = function ( bubble ) {

	m_bubbleObjects.push( new Bubble( bubble.fetch()[0] ) );

};

Template.main.getPointer = function () {

	return m_pointer;

};

Template.main.getRandSize = function () {

	var rand = Math.floor( Math.random() * 3 );

	if ( rand == 0 ) { return "small"; }
	if ( rand == 1 ) { return "medium"; }
	if ( rand == 2 ) { return "large"; }

}

Template.main.incrementPointer = function () {

	m_pointer++;

};

Template.main.events = {

	'click #flyout' : function ( e ) {

		var curr = parseInt( $( e.currentTarget ).css( 'top' ) );

		if ( curr === 0 ) {
			$( e.currentTarget ).css( 'top', -255 );
		} else {
			$( e.currentTarget ).css( 'top', 0 );
		}
		
	},
	'click .close' : function ( e ) {

		$(".popup a.close").on("click", function(e){
			$(this).parents(".popup").first().hide(); // Hide popup.
			$("#overlay").hide(); // Hide overlay.
			e.preventDefault();
		});
		
	}

}