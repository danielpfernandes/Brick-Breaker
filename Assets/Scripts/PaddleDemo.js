#pragma strict
	var mouseXposition;

function Update () {
	mouseXposition = Input.mousePosition.x / Screen.width * 16;
	var paddlePos = Vector3(mouseXposition, transform.position.y, 0);
	transform.position = new Vector2(
		Mathf.Clamp(paddlePos.x, 1.5, 14.5),
		Mathf.Clamp(paddlePos.y, 1, 1)
		);
}