Vector2 = function ( x, y ) {

	this.x = x || 0;
	this.y = y || 0;

}

Vector2.prototype.add = function ( v ) {

	this.x += v.x;
	this.y += v.y;

}

var randCount = 0;
Vector2.prototype.randomize = function () {

	if (randCount > 140) {
		var randx = Math.random() * (-.1 - .1) + .1;
		var randy = Math.random() * (-.1 - .1) + .1;

		if ( randx + this.x < .5 ) {
			this.x += randx;
		} else {
			this.x -= randx;
		}

		if ( randy + this.y < .5 ) {
			this.y += randy;
		} else {
			this.y -= randy;
		}

		randCount = 0;
	}
	
	randCount++;

}

Vector2.prototype.check = function () {

	if ( this.x < 0 ) {
		this.x = window.innerWidth;
	}
	if ( this.x > window.innerWidth ) {
		this.x = 0;
	}

	if ( this.y < 0 ) {
		this.y = window.innerHeight;
	}
	if ( this.y > window.innerHeight ) {
		this.y = 0;
	}

}