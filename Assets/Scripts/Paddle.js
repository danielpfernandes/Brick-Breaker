#pragma strict
var mouseXposition;
var ball : BallScript;
		
function Update () {
if (LevelScript.demoMode) {
   		MoveWithBall();
	} else {
    	MoveWithMouse();
	}
}

function MoveWithMouse () {
	mouseXposition = Input.mousePosition.x / Screen.width * 16;
	var paddlePos = Vector3(mouseXposition, transform.position.y, 0);
	transform.position = new Vector2(
		Mathf.Clamp(paddlePos.x, 1.5, 14.5),
		Mathf.Clamp(paddlePos.y, 1, 1)
		);
}

function MoveWithBall () {    
	var paddlePos = transform.position;
    var ballPos = ball.transform.position;
    
    paddlePos.x = ballPos.x;
    transform.position = new Vector2(
		Mathf.Clamp(paddlePos.x, 1.5, 14.5),
		Mathf.Clamp(paddlePos.y, 1, 1)
		);
}