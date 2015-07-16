(function(params){

  Polymer('olos-analyser', {

    rootfolder: '../olos-analyser/',


    width: 300,
    height: 300,

    // handle i/o
    input: null,
    output: null,

    displayType: 'time',

    publicMethods: ['set'] ,

    ready: function() {
      this._audioContext = audioContext;

      this.initAnalyser();
      this.input = this.output = this.analyser;

      this.setupCanvas();

    },

    set: function() {
      // change to 'freq'
      this.displayType = 'time';
    },

    setupCanvas: function(container) {
      var scopeCanvas = document.createElement( 'canvas' );
      scopeCanvas.width = this.width; 
      scopeCanvas.height = this.height; 
      scopeCanvas.id = "scope";
      scopeCanvas.myContext = scopeCanvas.getContext( '2d' );

      this.$.container.appendChild(scopeCanvas);
      this.scopeCanvas = scopeCanvas;

      // TO DO: environment handles animation, only run when there is input
      window.requestAnimationFrame = window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame;

      this.animate();
    },

    initAnalyser: function() {
      // TO DO: dispose analyser if one exists
      this.analyser = audioContext.createAnalyser();
      this.analyser.fftSize = 2048;

      this.oscilloscope = new Oscilloscope(this.analyser, this.width, this.height);
    },

    animate: function() {
      var self = this;
      if (this.oscilloscope && this.displayType === 'time') {
        this.oscilloscope.draw(this.scopeCanvas.myContext);
      } else {
        drawFreqBars(this.oscilloscope.analyser,this.scopeCanvas);
      }
      this._animationFrame = window.requestAnimationFrame( this.animate.bind(this) );
    },

    dispose: function() {

     window.cancelAnimationFrame( this._animationFrame );

      // remove audio elements
      var nodes = ['analyser'];
      for (var i = 0; i < nodes.length; i++) {
        try {
          var node = self[nodes[i]];
          node.disconnect();
          node = null;
        } catch(e) { }
      }

    }

  });

})();