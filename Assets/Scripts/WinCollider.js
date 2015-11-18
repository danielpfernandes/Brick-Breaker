#pragma strict

var levelMgr: LevelScript;

function OnTriggerEnter2D (trigger){
	levelMgr.LoadLevel("Win");
}

