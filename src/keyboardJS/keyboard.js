var keyboard = (function (){

	var initialize = function(){

		//Draw the Keyboard
		var keyboardDiv = document.createElement("div");
		keyboardDiv.id = "keyboard";
		keyboardDiv.innerHTML="<div class='keyboard-row'><span id='49'>1 (C)</span> <span id='50'>2 (d)</span> <span id='51'>3 (e)</span> <span id='52'>4 (F)</span> <span id='53'>5 (G)</span> <span id='54'>6 (a)</span> <span id='55'>7 bDim</span> <span id='56'>8 (C)</span></div> \
							<div class='keyboard-row'><span id='81'>G6</span> <span id='87'>A6</span> <span id='69'>B6</span> <span id='82'>C7</span> <span id='84'>D7</span> <span id='89'>E7</span> <span id='85'>F7</span> <span id='73'>G7</span> </div> \
							<div class='keyboard-row'><span id='65'>E6</span> <span id='83'>F6</span> <span id='68'>G6</span> <span id='70'>A6</span> <span id='71'>B6</span> <span id='72'>C7</span> <span id='74'>D7</span> <span id='75'>E7</span>  </div> \
							<div class='keyboard-row'><span id='90'>C6</span> <span id='88'>D6</span> <span id='67'>E6</span> <span id='86'>F6</span> <span id='66'>G6</span> <span id='78'>A6</span> <span id='77'>B6</span> <span id='188'>C7</span> </div>"


		// keyboardDiv.innerHTML="<div class='keyboard-row'><span id='49'>1</span> <span id='50'>2</span> <span id='51'>3</span> <span id='52'>4</span> <span id='53'>5</span> <span id='54'>6</span> <span id='55'>7</span> <span id='56'>8</span></div> \
		// 					<div class='keyboard-row'><span id='81'>Q</span> <span id='87'>W</span> <span id='69'>E</span> <span id='82'>R</span> <span id='84'>T</span> <span id='89'>Y</span> <span id='85'>U</span> <span id='73'>I</span> </div> \
		// 					<div class='keyboard-row'><span id='65'>A</span> <span id='83'>S</span> <span id='68'>D</span> <span id='70'>F</span> <span id='71'>G</span> <span id='72'>H</span> <span id='74'>J</span> <span id='75'>K</span>  </div> \
		// 					<div class='keyboard-row'><span id='90'>Z</span> <span id='88'>X</span> <span id='67'>C</span> <span id='86'>V</span> <span id='66'>B</span> <span id='78'>N</span> <span id='77'>M</span> <span id='188'>,</span> </div>"

		var keyboardContainer = document.getElementById('keyboardContainer');
		keyboardContainer.appendChild(keyboardDiv);

		_setKeyboardHandler();
		_setMouseHandler(keyboardDiv);
	};

	var _setMouseHandler = function(aDiv){
		var rows = aDiv.children;

		for (var i = 0; i < rows.length; i++) {
			rows[i].setAttribute('data-col', String(rows.length-1 - i));
			for (var j = 0; j < rows[i].children.length; j++) {
				var elem = rows[i].children[j];
				elem.addEventListener('mousedown',_mouseClicked);
				elem.addEventListener('mouseup',_mouseReleased);

				// add index
				elem.setAttribute('data-row', String(j) );
			}
		}
	};

	var _setKeyboardHandler = function(){
		document.addEventListener('keydown',_keyPressed);
		document.addEventListener('keyup',_keyReleased);
	};

	var _keyPressed = function(event){
		var el = document.getElementById(''+event.keyCode+'');
		if (!el) return;

		triggerKeyDown(el);
	};

	var _keyReleased = function(event){
		var el = document.getElementById(''+event.keyCode+'');
		if (!el) return;

		triggerKeyUp(el);
	};

	var _mouseClicked = function(event){
		var el = document.getElementById(''+event.srcElement.id+'');

		triggerKeyDown(el);
	};

	var _mouseReleased = function(event){
		var el = document.getElementById(''+event.srcElement.id+'');
		if (!el) return;
		triggerKeyUp(el);
	};

	var setWidth = function(w){
		document.getElementById('keyboard').style.width = ''+w+'px';
	};

	// called by both mouse and key events
	var triggerKeyDown = function(el) {
		if (el.getAttribute('data-pressed') === '1') {
			return;
		}

		el.setAttribute('data-pressed', '1');
		el.style.transition="background linear 0.1s";
		el.style.background="#fe1";

		// dispatch custom event
		var customKeyDown = new Event('customkeydown', {
				'view': window,
		    'bubbles': true
		});
		customKeyDown.colIndex = el.parentElement.getAttribute('data-col');
		customKeyDown.rowIndex = el.getAttribute('data-row');
		el.dispatchEvent(customKeyDown);
	};

	// called by both mouse and key events
	var triggerKeyUp = function(el) {
		el.setAttribute('data-pressed', '0');
		el.style.transition="background linear 0.1s";
		el.style.background="#D9CB9E";

		// dispatch custom event
		var customKeyUp = new Event('customkeyup', {
				'view': window,
				'bubbles': true
		});

		customKeyUp.colIndex = el.parentElement.getAttribute('data-col');
		customKeyUp.rowIndex = el.getAttribute('data-row');
		el.dispatchEvent(customKeyUp);
	};

	return{
		initialize : initialize,
		setWidth : setWidth
	};
})();