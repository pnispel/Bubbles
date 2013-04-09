
BubbleList = [];
var started = false;

function animate () {
	window.requestAnimationFrame( animate );

	for ( var i = 0; i < BubbleList.length; i++ ) {

		var bub = BubbleList[i];
		bub.velocity.randomize();
		bub.velocity.check();
		bub.position.check();
		bub.position.add( bub.velocity );

		$( bub.dom ).css( "left", bub.position.x );
		$( bub.dom ).css( "top", bub.position.y );

	}

}

Bubble = function ( name, text, date ) {

	if ( !started ) {
		animate();
	}

	this.position = new Vector2( Math.random() * window.innerHeight, Math.random() * window.innerWidth );
	this.velocity = new Vector2( Math.random() * .1 - .1 , Math.random() * .1 - .1);
	this.text = text;
	this.name = name;
	this.date = date;
	this.id = Template.main.getPointer();

	this.dom = document.createElement( 'a' );
	
	$( this.dom ).attr( 'id', this.id );
	$( this.dom ).addClass( 'bubble' );
	$( this.dom ).addClass( Template.main.getRandSize() );
	$( this.dom ).css( 'top', this.position.x + "px" );
	$( this.dom ).css( 'left', this.position.y + "px" );

	$( this.dom ).on( 'click', $.proxy( this.show, this ) );

	BubbleList.push( this );

	$( '.content' ).append( this.dom );

}

Bubble.prototype.show = function () {

	console.log('here')

	$( '.fact' ).text( this.text );
	$( '.author' ).text( 'Submitted by: ' + this.name );
	$( '.factnum' ).text( 'Fact #' + this.id );

	$( '.popup' ).show();
	$( this.dom ).hide(); 

};