var s = function() {
	// this.synth = new Sampler('audio/vibes-a1.mp3');
	this.synth = new Tone.Sampler({
		'C4' : 'audio/marimba/C3.mp3',
		'C5' : 'audio/marimba/C4.mp3',
		'C6' : 'audio/marimba/C5.mp3',
		'D4' : 'audio/marimba/D3.mp3',
		'D5' : 'audio/marimba/D4.mp3',
		'E4' : 'audio/marimba/E3.mp3',
		'E5' : 'audio/marimba/E4.mp3',
		'F4' : 'audio/marimba/F3.mp3',
		'F5' : 'audio/marimba/F4.mp3',
		'G4' : 'audio/marimba/G3.mp3',
		'G5' : 'audio/marimba/G4.mp3',
		'A4' : 'audio/marimba/A3.mp3',
		'A5' : 'audio/marimba/A4.mp3',
		'Bb4' : 'audio/marimba/Bb3.mp3',
		'Bb5' : 'audio/marimba/Bb4.mp3',
		'B4' : 'audio/marimba/B3.mp3',
		'B5' : 'audio/marimba/B4.mp3',
	});
	this.synth.toMaster();

	this.triggerAttack = function(midiVal) {
		var note = this.synth.midiToNote(midiVal);
		this.synth.triggerAttack(note);
	}

	this.triggerRelease = function(midiVal) {
		// console.log('release: ' + midiVal);
		// var note = this.synth.midiToNote(midiVal);
		// this.synth.triggerRelease(this.synth.now(), 0.8);
	}
}

var Sounds = new s();