#pragma strict

var paddle: Paddle;
var paddleToBallDist : Vector3;

var notClicked = true;

function Start () {
	paddleToBallDist = transform.position - paddle.transform.position;
}

function Update () {
	if(notClicked) {
		transform.position = paddleToBallDist + paddle.transform.position;
	}
	ShootBall ();
}

function ShootBall () {
	if(Input.GetMouseButtonDown(0) && notClicked){
		var ballBody = GetComponent.<Rigidbody2D>();
			ballBody.velocity = new Vector2(2,10);
			notClicked = false;
	}
}
