Vector2 = function ( x, y ) {

	this.x = x || 0;
	this.y = y || 0;

	this.randCount = 0;

}

Vector2.prototype.add = function ( v ) {

	this.x += v.x;
	this.y += v.y;

}

Vector2.prototype.randomize = function () {

	if (this.randCount > 1000) {
		var randx = Math.random() * (-.1 - .1) + .1;
		var randy = Math.random() * (-.1 - .1) + .1;

		if ( randx + this.x < .2 ) {
			this.x += randx;
		} else {
			this.x -= randx;
		}

		if ( randy + this.y < .2 ) {
			this.y += randy;
		} else {
			this.y -= randy;
		}

		this.randCount = 0;
	}
	
	this.randCount++;

}

Vector2.prototype.check = function () {

	if ( this.x < -200 ) {
		this.x = window.innerWidth + 200;
	}
	if ( this.x > window.innerWidth + 200 ) {
		this.x = -200;
	}

	if ( this.y < -200 ) {
		this.y = window.innerHeight + 200;
	}
	if ( this.y > window.innerHeight + 200) {
		this.y = -200;
	}

}