#pragma strict

/*var brick1Sprite : Sprite;
var brick2Sprite : Sprite;
var brick3Sprite : Sprite;
var brick4Sprite : Sprite;*/

var maxHits : int;
var timesHit : int;
var hitSprites : Sprite[];
var fragments : GameObject;
var brickbreak: AudioClip; 
static var brickCount : int;

function Start () {
	timesHit = 0;
	brickCount++;
	//brickSprite = 'brick_1';
	//GetComponent(SpriteRenderer).sprite = 
}

/*function Update () {
	if(Collision2D) {
		GetComponent(AudioSource).Play();
	}
}*/


function OnCollisionEnter2D(c : Collision2D) {
	GetComponent(AudioSource).Play();
	timesHit ++;
	if (timesHit >= maxHits) {
		brickCount--;
		AudioSource.PlayClipAtPoint(brickbreak, transform.position);
		var brickDust = Instantiate (fragments, transform.position, Quaternion.identity);
		Destroy(this.gameObject);
		if (brickCount==0){
			Application.LoadLevel(Application.loadedLevel+1);
		}
	}
	GetComponent(SpriteRenderer).sprite = hitSprites[timesHit-1];
	
}