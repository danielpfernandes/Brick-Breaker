#pragma strict

var maxHits : int;
var timesHit : int;
var brick1Sprite : Sprite;
var brick2Sprite : Sprite;
var brick3Sprite : Sprite;
var brick4Sprite : Sprite;

function Start () {
	timesHit = 0;
	//brickSprite = 'brick_1';
	//GetComponent(SpriteRenderer).sprite = 
	this.gameObject.GetComponent.<SpriteRenderer>().sprite = brick1Sprite;
	
}

function Update () {
	if (timesHit == 1) {
		this.gameObject.GetComponent.<SpriteRenderer>().sprite = brick2Sprite;
	}
	if (timesHit == 2) {
		this.gameObject.GetComponent.<SpriteRenderer>().sprite = brick3Sprite;
	}
	if (timesHit == 3) {
		this.gameObject.GetComponent.<SpriteRenderer>().sprite = brick4Sprite;
	}		
}

function OnCollisionEnter2D(c : Collision2D) {
	timesHit ++;
	if (timesHit >= maxHits) {
		Destroy(this.gameObject);
	}
}