// Ideas:
// Split the player and computer into two
// Add blocks in the middle, bilde av David Hasselhoff

function preventKeysFromMovingWindow() {
	window.addEventListener("keydown", function (e) {
		// space and arrow keys
		if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
}

function random(from, to) {
	return Math.floor((Math.random() * to) + from);
};

function background(s, g, ball) {
	if (ball.x < 30 || ball.x > s.width - 30)
		s.fill(g.reset);
	else
		s.fill(g.bg);

	s.noStroke();
	s.rect(0, 0, s.width, s.height);
};

function middleLine(s) {
	s.stroke(0);
	s.strokeWeight(10);
	for (var i = 0; i < s.height; i += 95) {
		s.line(s.width / 2, i, s.width / 2, i + 40);
	}
};

function resetValues(s, ball, range, player, computer) {
	ball.x = s.width - 100;
	ball.y = s.height - 100;
	ball.right = false;
	ball.up = true;
	ball.game = true;

	if (ball.first) {
		ball.speedX = random(5, 10);
		ball.speedY = random(5, 10);
	} else {
		ball.speedX = random(range[0], range[1]);
		ball.speedY = random(range[0], range[1]);
	}
	player.speed = range[2];
	computer.speed = range[3];
}

function newGame(s, ball, g, player, computer) {
	s.noStroke();
	s.textSize(20).fill(g.win);

	if (ball.first) {
		s.text("PONG 2.0", (s.width / 2) - (s.textWidth("PONG 2.0") / 2), 200);
		s.text("PRESS 1 FOR EASY", (s.width / 2) - (s.textWidth("WWWWWWWWWW") / 2), 300);
		s.text("PRESS 2 FOR HARD", (s.width / 2) - (s.textWidth("WWWWWWWWWW") / 2), 400);
		s.text("PRESS 3 FOR IMPOSSIBLE", (s.width / 2) - (s.textWidth("WWWWWWWWWW") / 2), 500);

		// keyCodes 1:49, 2:50, 3:51
		if (s.keyIsPressed) {
			if (s.keyCode === 49) {
				ball.range = [5, 15, 12, 10];
				ball.first = false;
				resetValues(s, ball, ball.range, player, computer);
			} else if (s.keyCode === 50) {
				ball.range = [7, 20, 15, 12];
				ball.first = false;
				resetValues(s, ball, ball.range, player, computer);
			} else if (s.keyCode === 51) {
				ball.range = [10, 25, 18, 18];
				ball.first = false;
				resetValues(s, ball, ball.range, player, computer);
			}
		}
	} else {
		if (ball.x > 0)
			s.text("YOU WIN", (s.width / 2) - (s.textWidth("YOU WIN") / 2), 200);
		else
			s.text("YOU LOOSE", (s.width / 2) - (s.textWidth("YOU LOOSE") / 2), 200);

		s.text("PRESS ENTER TO PLAY AGAIN", (s.width / 2) -
			(s.textWidth("PRESS ENTER TO PLAY AGAIN") / 2), 300);

		s.text("PRESS 0 TO RESET", (s.width / 2) -
			(s.textWidth("PRESS 0 TO RESET") / 2), 400);

		if (s.keyIsPressed) {
			if (s.keyCode === 13) {
				resetValues(s, ball, ball.range, player, computer);
			} else if (s.keyCode === 48) {
				ball.first = true;
			}
		}
	}
};

function playerMoves(s, g, player) {
	s.stroke(g.player);

	if (s.keyIsDown(s.UP_ARROW)) {
		player.y1 -= player.speed;
		player.y2 -= player.speed;
	}

	if (s.keyIsDown(s.DOWN_ARROW)) {
		player.y1 += player.speed;
		player.y2 += player.speed;
	}
	//	s.text(s.keyCode, 100, 100);
}

function computerMoves(s, g, player) {
	s.stroke(g.computer);

	if (player.ball.right && player.ball.x > s.width / 3 || player.ball.x > s.width - 300) {
		if (player.y1 + player.length / 2 > player.ball.y) {
			player.y1 -= player.speed;
			player.y2 -= player.speed;
		} else {
			player.y1 += player.speed;
			player.y2 += player.speed;
		}
	}
}

function GlobalColors(s) {
	this.reset = s.color(100, 0, 80);
	this.bg = s.color(150, 0, 59, 80);
	this.player = s.color(255, 255, 0);
	this.computer = s.color(255, 40, 156);
	this.ball = s.color(55, 205, 255);
	this.win = s.color(133, 199, 52);
};

function lineResize(s, l) {
	l.x1 = s.width - l.size / 2;
	l.x2 = s.width - l.size / 2;
	l.y1 = l.size / 2 + l.length;
	l.y2 = l.length * 2;
}

function Line(s, g, who) {
	this.who = who;
	this.size = 20;
	this.length = 150;
	this.speed;
	this.ball;

	if (this.who === "p") {
		this.x1 = this.size / 2;
		this.x2 = this.size / 2;
		this.y1 = this.size / 2 + this.length;
		this.y2 = this.length * 2;
	} else if (this.who === "c") {
		this.x1 = s.width - this.size / 2;
		this.x2 = s.width - this.size / 2;
		this.y1 = this.size / 2 + this.length;
		this.y2 = this.length * 2;
	}

	this.move = function () {

		// Player moves
		if (this.who === "p") {
			playerMoves(s, g, this);
			// Computer moves
		} else if (this.who === "c") {
			computerMoves(s, g, this);
		}
		s.strokeWeight(this.size);
		s.line(this.x1, this.y1, this.x2, this.y2);

	};
};

function Ball(s, g, player, computer) {
	this.game = false;
	this.first = true;

	this.x = s.width - 100;
	this.y = s.height - 100;
	this.size = 25;

	this.speedX;
	this.speedY;
	this.right = false;
	this.up = false;

	this.move = function () {

		// out of bounds
		if (this.x < 0 || this.x > s.width) {
			this.game = false;
		}

		if (this.right) {
			this.x += this.speedX;

			// hits computer
			if (this.x > s.width - player.size && this.y > computer.y1 && this.y < computer.y2) {
				this.right = false;
				this.speedX = random(5, 15);
				this.speedY = random(5, 15);
			}
		} else {
			this.x -= this.speedX;

			// hits player
			if (this.x <= player.size && this.y > player.y1 && this.y < player.y2) {
				this.right = true;
				this.speedX = random(5, 15);
				this.speedY = random(5, 15);
			}
		}

		if (this.up) {
			this.y -= this.speedY;
			if (this.y <= 0 + this.size / 2) {
				this.up = false;
			}
		} else {
			if (this.y >= s.height - this.size / 2) {
				this.up = true;
			}
			this.y += this.speedY;
		}

		s.noStroke();
		s.fill(g.ball);
		s.ellipse(this.x, this.y, this.size, this.size);
	};
};

var pong = function (s) {
	var g;
	var player;
	var computer;
	var ball;
	var edge = 15;

	s.setup = function () {
		s.createCanvas(750, 550);

		preventKeysFromMovingWindow();

		g = new GlobalColors(s);
		player = new Line(s, g, "p");
		computer = new Line(s, g, "c");
		ball = new Ball(s, g, player, computer);
		computer.ball = ball;
	};

	s.draw = function () {
		background(s, g, ball);
		middleLine(s);

		// playing
		if (ball.game) {
			ball.move();
			player.move();
			computer.move();
		} else {
			s.fill(g.reset);
			s.rect(0, 0, s.width, s.height);
			newGame(s, ball, g, player, computer);
		}
	};

	s.windowResized = function () {
		s.resizeCanvas(s.windowWidth - edge, s.windowHeight - edge);
		lineResize(s, computer);
	}

};

// Add <script src="sketches/sketch1/pong.js"></script>
// Add <div id="sketch1"></div>
// The object below will create a canvas inside the div with name sketch1
$("#modal").ready(function () {
	var toRender = new p5(pong, "pong-inject");
});
