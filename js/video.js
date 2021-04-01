var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime > 67) {
		console.log("Going back to the beginning")
		video.currentTime = 0;
	}
	console.log("New location", video.currentTime);
});

document.querySelector("#slide").addEventListener("click", function() {
	console.log(this.value / 100);
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	var word = document.querySelector("#mute").innerHTML;
	if (word == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orid").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
