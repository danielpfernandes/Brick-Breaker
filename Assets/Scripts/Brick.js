#pragma strict

/*var brick1Sprite : Sprite;
var brick2Sprite : Sprite;
var brick3Sprite : Sprite;
var brick4Sprite : Sprite;*/

var maxHits : int;
var timesHit : int;
var hitSprites : Sprite[];
static var brickCount : int;

function Start () {
	timesHit = 0;
	brickCount++;
	//brickSprite = 'brick_1';
	//GetComponent(SpriteRenderer).sprite = 
}

/*function Update () {
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
*/

function OnCollisionEnter2D(c : Collision2D) {
	timesHit ++;
	if (timesHit >= maxHits) {
		brickCount--;
		Destroy(this.gameObject);
		if (brickCount==0){
		Application.LoadLevel(Application.loadedLevel+1);
		}
	}
	GetComponent(SpriteRenderer).sprite = hitSprites[timesHit-1];
}