// Tweak the Tone.Sampler for our purposes.

var Sampler = (function(){
  var Sampler = function(val) {
    // Sampler extends the Tone.Sampler
    Tone.Sampler.call(this, val);

    // base note
    this.baseNote = "C3";
  }

  // Sampler prototpye has all the sample things as the Tone.Sampler
  Sampler.prototype = Object.create(Tone.Sampler.prototype);


  // Save these methods so we can override them
  Sampler.prototype._triggerAttack = Sampler.prototype.triggerAttack;
  Sampler.prototype._triggerRelease = Sampler.prototype.triggerRelease;

  // Override the triggerAttack method
  Sampler.prototype.triggerAttack = function(value, time, velocity) {
    var diff = this.noteToMidi(value) - this.noteToMidi(this.baseNote);
    this.pitch = diff - 7;
    velocity = 1 - Math.random()/10;
    this._triggerAttack(null, time, velocity);
  }

  // Override the triggerRelease method
  Sampler.prototype.triggerRelease = function(value, time, velocity) {
    this._triggerRelease(time);
  }

  return Sampler;
})();

// module.exports = Sampler;