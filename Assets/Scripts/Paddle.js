#pragma strict
var mouseXposition;
var ball : BallScript;

function Start() {
	if (LevelScript.demoMode) {
		yield WaitForSeconds(45);
		if (Application.loadedLevel == 3) {
			Application.LoadLevel(0);
		} else {
			Application.LoadLevel(Application.loadedLevel+1);
		}
	}
}		
						
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
	if (Input.GetMouseButtonDown(0)){
		Application.LoadLevel("Start");
		LevelScript.demoMode = false;
	}
	var paddlePos = transform.position;
    var ballPos = ball.transform.position;
    
    paddlePos.x = ballPos.x;
    transform.position = new Vector2(
		Mathf.Clamp(paddlePos.x, 1.5, 14.5),
		Mathf.Clamp(paddlePos.y, 1, 1)
		);
}

function OnCollisionEnter2D(c : Collision2D) {
	GetComponent(AudioSource).Play();
}