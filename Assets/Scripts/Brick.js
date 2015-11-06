#pragma strict

var maxHits : int;
var timesHit : int;

function Start () {
	timesHit = 0;
}

function Update () {

}

function OnCollisionEnter2D(c : Collision2D) {
	timesHit ++;
	if (timesHit > 1) {
		Destroy(this.gameObject);
	}
}