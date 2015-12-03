#pragma strict

static var demoMode = false;

function LoadLevel (name :String) {
	Brick.brickCount = 0;
	Application.LoadLevel(name);
}

function RequestQuit () {
	Application.Quit();
}

function StartDemo() {
    demoMode = true;
    Application.LoadLevel("Level1");
   // add a statement here to load the first level
}