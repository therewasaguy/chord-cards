var s = function() {
	this.synth = new Tone.PolySynth();
	this.synth.toMaster();

	this.triggerAttack = function(midiVal) {
		console.log('attack: ' + midiVal);
		var note = this.synth.midiToNote(midiVal);
		this.synth.triggerAttack(note);

	}

	this.triggerRelease = function(midiVal) {
		console.log('release: ' + midiVal);
		var note = this.synth.midiToNote(midiVal);
		this.synth.triggerRelease(note, this.synth.now());
	}
}

var Sounds = new s();