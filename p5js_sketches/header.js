// Anonymous function preventing outside access
function fade(s) {
	s.noStroke();
	s.fill(255, 10);
	s.rect(0, 0, s.width, s.height);
}

function Pos(x, y, size, speed, s) {
	this.s = s;
	this.x = x;
	this.y = y;
	this.size = size;
	this.speed = speed;
	this.forward = true;
	this.c = s.color(s.random(0, 255));

	this.run = function () {
		this.s.fill(this.c);
		this.s.rect(this.x, this.y, this.size, this.size);
		this.x += this.s.random(0, this.speed + this.speed);
		this.y += this.s.random(0, this.speed + this.speed);

		this.forward ? this.speed += 0.1 : this.speed -= 0.1;

		if (this.speed > 40)
			this.forward = false;

		if (this.speed < 5)
			this.forward = true;

		if (this.x > this.s.width) {
			this.x = this.s.random(-this.size, this.size);
		}

		if (this.y > this.s.height) {
			this.y = this.s.random(-this.size, this.size);
		}
	}
}

var header = function (s) {
	var rects = [];
	var numberOfRects = 1;
	s.setup = function () {
		s.createCanvas($("#header").width(), $("#header").height());
		for (var i = 0; i < numberOfRects; i++) {
			rects.push(new Pos(s.random(s.width), s.random(s.width), 100, 5, s));
		}
	};

	s.draw = function () {
		fade(s);
		for (var i = 0; i < rects.length; i++) {
			rects[i].run();
		}
	};

	s.windowResized = function () {
		s.resizeCanvas($("#header").width(), $("#header").height());
	};

}

$(document).ready(function () {
	temp = new p5(header, "header");
});
