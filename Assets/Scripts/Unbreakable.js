#pragma strict

function OnCollisionEnter2D(c : Collision2D) {
	GetComponent(AudioSource).Play();
}