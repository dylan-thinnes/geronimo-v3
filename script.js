var game;
var keyNameReference = {
	8: "BACKSPACE",
	9: "TAB",
	13: "ENTER",
	16: "SHIFT",
	17: "CTRL",
	18: "ALT",
	19: "PAUSE/BREAK",
	20: "CAPS LOCK",
	27: "ESCAPE",
	32: "SPACE",
	33: "PAGE UP",
	34: "PAGE DOWN",
	35: "END",
	36: "HOME",
	37: "LEFT ARROW",
	38: "UP ARROW",
	39: "RIGHT ARROW",
	40: "DOWN ARROW",
	45: "INSERT",
	46: "DELETE",
	48: "0",
	49: "1",
	50: "2",
	51: "3",
	52: "4",
	53: "5",
	54: "6",
	55: "7",
	56: "8",
	57: "9",
	65: "A",
	66: "B",
	67: "C",
	68: "D",
	69: "E",
	70: "F",
	71: "G",
	72: "H",
	73: "I",
	74: "J",
	75: "K",
	76: "L",
	77: "M",
	78: "N",
	79: "O",
	80: "P",
	81: "Q",
	82: "R",
	83: "S",
	84: "T",
	85: "U",
	86: "V",
	87: "W",
	88: "X",
	89: "Y",
	90: "Z",
	91: "LEFT WINDOW KEY",
	92: "RIGHT WINDOW KEY",
	93: "SELECT KEY",
	96: "NUMPAD 0",
	97: "NUMPAD 1",
	98: "NUMPAD 2",
	99: "NUMPAD 3",
	100: "NUMPAD 4",
	101: "NUMPAD 5",
	102: "NUMPAD 6",
	103: "NUMPAD 7",
	104: "NUMPAD 8",
	105: "NUMPAD 9",
	106: "MULTIPLY",
	107: "ADD",
	109: "SUBTRACT",
	110: "DECIMAL POINT",
	111: "DIVIDE",
	112: "F1",
	113: "F2",
	114: "F3",
	115: "F4",
	116: "F5",
	117: "F6",
	118: "F7",
	119: "F8",
	120: "F9",
	121: "F10",
	122: "F11",
	123: "F12",
	144: "NUM LOCK",
	145: "SCROLL LOCK",
	186: "SEMI-COLON",
	187: "EQUAL SIGN",
	188: "COMMA",
	189: "DASH",
	190: "PERIOD",
	191: "FORWARD SLASH",
	192: "GRAVE ACCENT",
	219: "OPEN BRACKET",
	220: "BACK SLASH",
	221: "CLOSE BRAKET",
	222: "SINGLE QUOTE"
}
var initGame = function(type){
	var options = {
		pieces: {
			0: {
				start: [4,-2],
				color: "#888888",
				shadowColor: "#bbbb00",
				name: "O",
				rotation: {
					0: [3,3],
					1: [3,3],
					2: [3,3],
					3: [3,3]
				},
				queueOffset: [1,0],
				wallKicks:[]
			},
			1: {
				start: [3,-2],
				color: "#888888",
				shadowColor: "#00bbbb",
				name: "I",
				rotation: {
					0: [0,15],
					1: [4,4,4,4],
					2: [0,0,15],
					3: [2,2,2,2]
				},
				queueOffset: [0,-0.5]
			},
			2: {
				start: [3,-2],
				color: "#888888",
				shadowColor: "#770077",
				name: "T",
				rotation: {
					0: [2,7],
					1: [2,6,2],
					2: [0,7,2],
					3: [2,3,2]
				},
				queueOffset: [0.5,0]
			},
			3: {
				start: [3,-2],
				color: "#888888",
				shadowColor: "#bb5500",
				name: "L",
				rotation: {
					0: [4,7],
					1: [2,2,6],
					2: [0,7,1],
					3: [3,2,2]
				},
				queueOffset: [0.5,0]
			},
			4: {
				start: [3,-2],
				color: "#888888",
				shadowColor: "#0000bb",
				name: "J",
				rotation: {
					0: [1,7],
					1: [6,2,2],
					2: [0,7,4],
					3: [2,2,3]
				},
				queueOffset: [0.5,0]
			},
			5: {
				start: [3,-2],
				color: "#888888",
				shadowColor: "#bb0000",
				name: "Z",
				rotation: {
					0: [3,6],
					1: [4,6,2],
					2: [0,3,6],
					3: [2,3,1]
				},
				queueOffset: [0.5,0]
			},
			6: {
				start: [3,-2],
				startPoint: [0,1],
				color: "#888888",
				shadowColor: "#00bb00",
				name: "S",
				rotation: {
					0: [6,3],
					1: [2,6,4],
					2: [0,6,3],
					3: [1,3,2]
				},
				queueOffset: [0.5,0]
			}
		},
		gameSettings:{
			winType:"race",
			winCondition:40,
			pointSystem:"standard",
			queueLength:5,
			holdLength:1,
			delays: {
				rightRotate: false,
				right: 100,
				softDown: 100,
				left: 100,
				leftRotate: false,
				softUp: 100,
				hardDown: false,
				hold: false
			},
			repeats: {
				
			}
		},
		matrixSettings:{
			width:10,
			visibleHeight:20,
			invisibleHeight:5,
			gravity:500,
			gravityDelay:500,
			lockDelay:1000
		},
		keybinds:[[],[]]
	};
	options.keybinds[0][13] = ["submit"];
	options.keybinds[0][38] = ["up"];
	options.keybinds[0][40] = ["down"];
	options.keybinds[0][39] = ["right"];
	options.keybinds[0][37] = ["left"];
	options.keybinds[0][27] = ["escape"];
				
	options.keybinds[1][38] = ["rightRotate"];
	options.keybinds[1][39] = ["right"];
	options.keybinds[1][40] = ["softDown"];
	options.keybinds[1][37] = ["left"];
	options.keybinds[1][90] = ["leftRotate"];
	options.keybinds[1][72] = ["softUp"];
	options.keybinds[1][32] = ["hardDown"];
	options.keybinds[1][16] = ["hold"];
	options.keybinds[1][27] = ["pause"];
	game = TetrisGame("mainScreen",options);
};

TetrisGame = function(canvasID,options) {
	var publicValues = {};
	var outputCanvas = document.getElementById(canvasID);
	if(outputCanvas.getContext){
		var context = outputCanvas.getContext('2d');
	}
	//context.translate(0.5,0.5);
	context.fillStyle = "#000000";
	context.fillRect(0,0,1000,500);
	var running = false;
	var options = options;
	var communicator = {
		getNewPiece: function(){
			matrix.setPiece(queue.withdrawPiece());
			queue.drawQueue();
		},
		clearContext: function(){
			context.fillStyle = "#000000";
			context.fillRect(0,0,1000,500);
		},
		getHold: function(currentPieceNum){
			var withdraw = queue.withdrawHold(currentPieceNum);
			//queue.drawHold();
			queue.drawQueue();
			if(withdraw >= 0){
				matrix.setPiece(withdraw);
			}
		},
		startGame: function(){
			matrix.initMatrix(queue.initQueue());
			stats.initStats();
			menu.clearHistory();
			menu.downMenu(1,true,0,false);
			menu.setGameStarted(true);
			//clearContext();
			communicator.gameWon = false;
			communicator.toggleGame();
		},
		toggleGame: function(){
			if(running){
				communicator.pauseGame();
			}else{
				communicator.unpauseGame();
			}
			running = !running;
		},
		pauseGame: function(){
			stats.pauseTimer();
			//clearContext();
			clearInterval(intervalID);
			controls.changeFocus(0);
			menu.drawMenu();
		},
		unpauseGame: function(){
			communicator.frameTimestamp = Date.now();
			stats.unpauseTimer();
			//clearContext();
			controls.changeFocus(1);
			matrix.drawOutline();
			matrix.repaintBackground();
			queue.drawOutline();
			queue.drawQueue();
			queue.drawHold();
			stats.drawOutline();
			stats.drawStats();
			//context.strokeStyle = "#ffffff";
			//context.strokeRect(101.5,40.5,201,401);
			intervalID = setInterval(gameRun,1000/60);
		},
		endGame: function(timestamp){
			//communicator.toggleGame();
			stats.pauseTimer();
			clearInterval(intervalID);
			communicator.frameTimestamp = timestamp;
			menu.setGameStarted(false);
			controls.changeFocus(0);
			var statMenu = [
				{
					type: 0,
					display: 1,
					name: "Back to Menu",
					value: 0,
					action: menu.upMenu//communicator.startGame()
				},
				{
					type: 1,
					display: 0,
					name: "Time Elapsed",
					value: stats.formatStat("timeElapsed"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				},
				{
					type: 1,
					display: 0,
					name: "Points Earned",
					value: stats.formatStat("points"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				},
				{
					type: 1,
					display: 0,
					name: "Level Reached",
					value: stats.formatStat("level"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				},
				{
					type: 1,
					display: 0,
					name: "Lines Cleared",
					value: stats.formatStat("lines"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				},
				{
					type: 1,
					display: 0,
					name: "Pieces Placed",
					value: stats.formatStat("piecesPlaced"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				},
				{
					type: 1,
					display: 0,
					name: "Pieces Per Second",
					value: stats.formatStat("piecesPerSecond"),
					editable: false,
					//increment: 10,
					//min:0,
					//autoAction: true,
					action: function(){}
				}
			];
			menu.clearHistory();
			menu.downMenu(0,true,0,false);
			menu.downMenu("finishStats",false,0,false,statMenu);
			//newMenuIndex,newSmallMenu,newSelectedIndex,toSmallMenu,newMenu
			communicator.gameWon = true;
		},
		toSmallMenu: function(gameStarted){
			stats.drawOutline();
			stats.drawStats();
			matrix.drawOutline();
			queue.drawOutline();
			if(gameStarted){
				queue.drawQueue();
				queue.drawHold();
			}
		},
		sendEvent: function(eventOwner,eventType,eventName,eventMeta){
			switch(eventOwner){
				case "matrix":
					matrix.addToInputQueue(eventName);
					break;
				case "menu":
					menu.handleEvent(eventName);
					break;
				default:
					break;
			}
		},
		startRebind: function(keyCode,eventName){
			console.log(keyCode,eventName);
			//menu.endRebind(menuEntryIndex,"<Press a key>");
			controls.startRebind(keyCode,eventName);
		},
		endRebind: function(newKeyCode){
			menu.endRebind(newKeyCode);
		},
		clearLines: function(linesCleared){
			//sound.playBoop();
			stats.clearLines(linesCleared);
		},
		placePiece: function(){
			//sound.playBoop();
			stats.placePiece();
		},
		frameTimestamp: Date.now(),
		gameWon: false
	}
	var intervalID = 0;
	var matrix = TetrisMatrix(options,context,communicator);
	var queue = TetrisQueue(options,context,communicator);
	var controls = TetrisControls(options,context,communicator);
	var stats = TetrisStats(options,context,communicator);
	var menu = TetrisMenu(options,context,communicator);
	var sound = TetrisSound(options,context,communicator);
	queue.drawOutline();
	stats.drawOutline();
	stats.initStats();
	stats.drawStats();
	menu.initMenu();
	menu.drawOutline();
	menu.drawMenu();
	var gameRun = function(){
		communicator.frameTimestamp = Date.now();
		controls.checkRepeat();
		matrix.autoTriggers();
		matrix.processInput();
		stats.updateDisplay();
		if(communicator.gameWon){
			//communicator.clearContext();
			menu.drawMenu();
		}
		//requestAnimationFrame(function(){});
	}
	//var intervalID = setInterval(gameRun,1000/60);
	//communicator.toggleGame(true);
	return publicValues;
}

TetrisStats = function(options,context, communicator) {
	var publicValues = {};
	var communicator = communicator;
	var options = options;
	var context = context;
	var offset = [384,41];
	var stats = {}
	var displayStats = ["timeElapsed","points","level","lines","piecesPlaced","piecesPerSecond"];
	publicValues.stats = stats;
	var calcPoints = function(linesCleared,specialEvents){
		
	}
	var checkWin = function(){
		if(stats.winType === "race" && stats.linesCleared >= stats.winCondition){
			stats.endTime = communicator.frameTimestamp;
			communicator.endGame(stats.endTime);
			//alert("you have won!");
			//console.log("game won at time "+stats.endTime+"!");
		}else if(stats.winType === "level" && stats.level >= stats.winCondition){
			stats.endTime = communicator.frameTimestamp;
			communicator.endGame(stats.endTime);
			//console.log("game won at time "+stats.endTime+"!");
		}else if(stats.winType === "points" && stats.points >= stats.winCondition){
			stats.endTime = communicator.frameTimestamp;
			communicator.endGame(stats.endTime);
			//console.log("game won at time "+stats.endTime+"!");
		}
	}
	var drawOutline = function(){
		context.strokeStyle = "#ffffff";
		context.strokeRect(383.5,40.5,201,401);
		context.fillStyle = "#000000";
		context.fillRect(offset[0],offset[1],200,400)
		context.font = "bold 20px monospace";
		context.textAlign = "start";
		context.textBaseline = "top";
		context.fillStyle = "#ffffff";
		context.fillText("Time:",offset[0]+10,offset[1]+10);
		context.fillText("Points:",offset[0]+10,offset[1]+35);
		context.fillText("Level:",offset[0]+10,offset[1]+60);
		context.fillText("Lines:",offset[0]+10,offset[1]+85);
		context.fillText("Pieces:",offset[0]+10,offset[1]+110);
		context.fillText("PPS:",offset[0]+10,offset[1]+135);
	}
	publicValues.drawOutline = drawOutline;
	var pauseTimer = function(){
		stats.timeElapsed += communicator.frameTimestamp-stats.startTime;
		stats.startTime = communicator.frameTimestamp;
	}
	publicValues.pauseTimer = pauseTimer;
	var unpauseTimer = function(){
		stats.startTime = communicator.frameTimestamp;
	}
	publicValues.unpauseTimer = unpauseTimer;
	var initStats = function(){
		stats.timeElapsed = 0;
		stats.piecesPlaced = 0;
		stats.linesCleared = 0;
		stats.level = 1;
		stats.points = 0;
		stats.startTime = communicator.frameTimestamp;
		stats.endTime = -1;
		stats.winType = options.gameSettings.winType;
		stats.winCondition = options.gameSettings.winCondition;
		/*drawOutline();
		drawStats();*/
	}
	publicValues.initStats = initStats;
	var drawStats = function(){
		displayStats.forEach(function(currentValue,index,array){
			drawStat(currentValue,index);
		});
	}
	publicValues.drawStats = drawStats;
	var drawStat = function(statName,statIndex){
		statIndex = statIndex || displayStats.indexOf(statName);
		context.fillStyle = "#000000";
		context.fillRect(offset[0]+106,offset[1]+10+25*statIndex,94,25);
		context.font = "20px monospace";
		context.textAlign = "start";
		context.textBaseline = "top"
		context.fillStyle = "#ffffff";
		var statValue = formatStat(statName);
		context.fillText(statValue,offset[0]+106,offset[1]+10+25*statIndex);
	}
	var formatStat = function(statName){
		var statValue = "";
		switch(statName){
			case "timeElapsed":
				statValue = (communicator.frameTimestamp-stats.startTime+stats.timeElapsed)/1000
				break;
			case "points":
				statValue = stats.points;
				break;
			case "lines":
				statValue = stats.linesCleared;
				break;
			case "level":
				statValue = stats.level;
				break;
			case "piecesPlaced":
				statValue = stats.piecesPlaced;
				break;
			case "piecesPerSecond":
				statValue = communicator.frameTimestamp-stats.startTime+stats.timeElapsed === 0 ? "0" : Math.floor(stats.piecesPlaced*1000000/(communicator.frameTimestamp-stats.startTime+stats.timeElapsed))/1000;
				break;
			default:
				break;
		}
		return statValue;
	};
	publicValues.formatStat = formatStat;
	var updateDisplay = function(){
		drawStat("timeElapsed");
		drawStat("piecesPerSecond");
	}
	publicValues.updateDisplay = updateDisplay;
	var clearLines = function(linesCleared,specialEvents){
		stats.points += linesCleared*10*stats.level;
		stats.linesCleared += linesCleared;
		stats.level = Math.ceil(Math.sqrt(stats.linesCleared/5));
		drawStat("points");
		drawStat("lines");
		drawStat("level");
		checkWin();
	}
	publicValues.clearLines = clearLines;
	var placePiece = function(piece){
		stats.piecesPlaced++;
		drawStat("piecesPerSecond");
		drawStat("piecesPlaced");
	}
	publicValues.placePiece = placePiece;
	var replay = [];
	var logEvent = function(timestamp,eventName){
		timestamp = timestamp || Date.now();
		replay.push({timestamp:timestamp,eventName:eventName});
	}
	publicValues.logEvent = logEvent;
	return publicValues;
}

var TetrisSound = function(options,context,communicator){
	var publicValues = {};
	var communicator = communicator;
	var options = options;
	var context = context;
	var boop = new Howl({src: ['boop.wav']});
	var playBoop = function(rate){
		var rate = rate || 1;
		boop.rate(rate);
		boop.play();
	}
	publicValues.playBoop = playBoop;
	return publicValues;
}

var TetrisMenu = function(options,context,communicator){
	var publicValues = {};
	var communicator = communicator;
	var options = options;
	var context = context;
	var offset = [41,41];
	var indexOffset = 0;
	var selectedIndex = 0;
	var currMenu = 0;
	var smallMenu = true;
	var clearHistory = function(){
		menuHistory = [];
	}
	publicValues.clearHistory = clearHistory;
	var upMenu = function(){
		var nextMenu = menuHistory.pop();
		setMenu(nextMenu[0],nextMenu[1],nextMenu[2],(!smallMenu && nextMenu[1]?true:false));
	}
	publicValues.upMenu = upMenu;
	var downMenu = function(newMenuIndex,newSmallMenu,newSelectedIndex,toSmallMenu,newMenu){
		newSmallMenu = newSmallMenu !== undefined ? newSmallMenu : smallMenu;
		menuHistory.push([currMenu,smallMenu,selectedIndex]);
		setMenu(newMenuIndex,newSmallMenu,newSelectedIndex,toSmallMenu,newMenu);
	}
	publicValues.downMenu = downMenu;
	var setMenu = function(newMenuIndex,newSmallMenu,newSelectedIndex,toSmallMenu,newMenu){
		console.log(menuHistory);
		if(newMenu === undefined){
			smallMenu = newSmallMenu !== undefined ? newSmallMenu : smallMenu;
			currMenu = newMenuIndex;
			selectedIndex = newSelectedIndex !== undefined ? newSelectedIndex : 0;
			//drawOutline();
			drawMenu(toSmallMenu);
		}else{
			menus[newMenuIndex] = newMenu;
			smallMenu = newSmallMenu !== undefined ? newSmallMenu : smallMenu;
			currMenu = newMenuIndex;
			selectedIndex = newSelectedIndex !== undefined ? newSelectedIndex : 0;
			//drawOutline();
			drawMenu(toSmallMenu);
		}
		return newMenu;
	}
	publicValues.setMenu = setMenu;
	var menus = [
		[
			{
				type: 0,
				display: 1,
				name: "Start Game",
				value: 0,
				action: communicator.startGame
			},
			{
				type: 0,
				display: 1,
				name: "Rebind Keys",
				value: 0,
				action: downMenu.bind(null,2,false)
			},
			{
				type: 0,
				display: 1,
				name: "Settings",
				value: 0,
				action: downMenu.bind(null,3,false)
			}/*,
			{
				type: 1,
				display: 0,
				name: "Test Counter",
				value: 2,
				action: function(){}
			}*/
		],
		[
			{
				type: 0,
				display: 1,
				name: "Unpause",
				value: 0,
				action: communicator.toggleGame
			},
			{
				type: 0,
				display: 1,
				name: "Restart",
				value: 0,
				action: communicator.startGame
			},
			{
				type: 0,
				display: 1,
				name: "Rebind Keys",
				value: 0,
				action: downMenu.bind(null,2,false)
			},
			{
				type: 0,
				display: 1,
				name: "Settings",
				value: 0,
				action: downMenu.bind(null,3,false)
			}/*,
			{
				type: 1,
				display: 0,
				name: "Test Counter",
				value: 2,
				action: function(){}
			}*/
		],
		[/*
			{
				type: 1,
				display: 0,
				name: "Rotate Right",
				value: "ArrowUp",
				action: communicator.startRebind.bind(null,"rightRotate",0)
			},
			{
				type: 1,
				display: 0,
				name: "Rotate Left",
				value: "Z",
				action: communicator.startRebind.bind(null,"leftRotate",1)
			},
			{
				type: 1,
				display: 0,
				name: "Soft Drop",
				value: "ArrowDown",
				action: communicator.startRebind.bind(null,"softDown",2)
			},
			{
				type: 1,
				display: 0,
				name: "Hard Drop",
				value: "Space",
				action: communicator.startRebind.bind(null,"hardDown",3)
			},
			{
				type: 1,
				display: 0,
				name: "Move Right",
				value: "ArrowRight",
				action: communicator.startRebind.bind(null,"right",4)
			},
			{
				type: 1,
				display: 0,
				name: "Move Left",
				value: "ArrowLeft",
				action: communicator.startRebind.bind(null,"left",5)
			},
			{
				type: 1,
				display: 0,
				name: "Hold Piece",
				value: "ShiftLeft",
				action: communicator.startRebind.bind(null,"hold",6)
			},
			{
				type: 1,
				display: 0,
				name: "Pause Game",
				value: "Escape",
				action: communicator.startRebind.bind(null,"hold",7)
			}*/
		],
		[
			{
				type: 1,
				display: 0,
				name: "Soft Drop",
				value: options.gameSettings.delays["softDown"],
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){}
			},
			{
				type: 1,
				display: 0,
				name: "Move Right",
				value: options.gameSettings.delays["right"],
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){options.gameSettings.delays["right"] = this.value}
			},
			{
				type: 1,
				display: 0,
				name: "Move Left",
				value: options.gameSettings.delays["left"],
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){options.gameSettings.delays["left"] = this.value}
			},
			{
				type: 1,
				display: 0,
				name: "Gravity",
				value: options.matrixSettings.gravity,
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){options.matrixSettings.gravity = this.value}
			},
			{
				type: 1,
				display: 0,
				name: "Lock Delay",
				value: options.matrixSettings.lockDelay,
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){options.matrixSettings.lockDelay = this.value}
			},
			{
				type: 1,
				display: 0,
				name: "Gravity Delay",
				value: options.matrixSettings.gravityDelay,
				increment: 10,
				min:0,
				autoAction: true,
				action: function(){options.matrixSettings.gravityDelay = this.value}
			}
		]
	]
	var eventList = {
		right: ["Move Right",0],
		left: ["Move Left",1],
		softDown: ["Soft Drop",2],
		hardDown: ["Hard Drop",3],
		rightRotate: ["Rotate Right",4],
		leftRotate: ["Rotate Left",5],
		hold: ["Hold",6]
	};
	var initMenu = function(){
		var ii = 0;
		options.keybinds[1].forEach(updateEventList);
	}
	publicValues.initMenu = initMenu;
	var rebindMenuEntryIndex = NaN;
	var startRebind = function(menuEntryIndex){
		menus[2][menuEntryIndex].value = "<ESC to Cancel>";
		rebindMenuEntryIndex = menuEntryIndex;
		communicator.startRebind(menus[2][menuEntryIndex].keyCode,menus[2][menuEntryIndex].eventName);
		drawEntry(menus[2][menuEntryIndex],menuEntryIndex);
	}
	var endRebind = function(newKeyCode,menuEntryIndex){
		menus[2][rebindMenuEntryIndex].value = keyNameReference[newKeyCode];
		menus[2][rebindMenuEntryIndex].keyCode = newKeyCode;
		drawEntry(menus[2][rebindMenuEntryIndex],rebindMenuEntryIndex);
		rebindMenuEntryIndex = NaN;
	}
	publicValues.endRebind = endRebind;
	var updateEventList = function(currentValue,index,array){
		//console.log(currentValue);
		var keybindLength = currentValue.length;
		for(var jj=0;jj<keybindLength;jj++){
			if(eventList[currentValue[jj]]){
				menus[2][eventList[currentValue[jj]][1]] = {
					type: 1,
					display: 0,
					name: eventList[currentValue[jj]][0],
					keyCode: index,
					eventName: currentValue[jj],
					value: keyNameReference[index],
					action: startRebind.bind(null,eventList[currentValue[jj]][1])
				}
			}
		}
	}
	var menuHistory = [];
	/*
	menu 0 is the start game menu
	menu 1 is the paused game menu
	menu 2 is the key rebind menu
	*/
	//console.log(menus);
	var gameStarted = 0;
	var setGameStarted = function(newValue){
		gameStarted = newValue ? true : false;
	}
	publicValues.setGameStarted = setGameStarted;
	var changeMenuProp = function(menuIndex,entryIndex,value){
		menus[menuIndex][entryIndex].value = value;
		drawEntry(menus[menuIndex][entryIndex],entryIndex);
	}
	publicValues.changeMenuProp = changeMenuProp;
	var drawOutline = function(smallMenuOverride){
		console.log(smallMenu);
		if(smallMenu){
			offset = [102,41];
			context.strokeStyle = "#ffffff";
			context.strokeRect(101.5,40.5,201,401);
			context.fillStyle = "#000000";
			context.fillRect(offset[0],offset[1],200,400);
		}else{
			offset = [41,41];
			context.strokeStyle = "#ffffff";
			context.strokeRect(40.5,40.5,544,401);
			context.fillStyle = "#000000";
			context.fillRect(offset[0],offset[1],543,400);
		}
	}
	publicValues.drawOutline = drawOutline;
	var drawMenu = function(toSmallMenu){
		toSmallMenu = toSmallMenu !== undefined ? toSmallMenu : false;
		if(smallMenu){
			if(toSmallMenu){
				communicator.clearContext();
				communicator.toSmallMenu(gameStarted);
			}
			drawOutline();
			menus[currMenu].forEach(function(currentValue,index,array){
				drawEntry(currentValue,index);
			});
		}else{
			selectedIndex = 0;
			communicator.clearContext();
			drawOutline();
			menus[currMenu].forEach(function(currentValue,index,array){
				drawEntry(currentValue,index);
			});
		}
	}
	publicValues.drawMenu = drawMenu;
	var drawEntry = function(entry,yOffset){
		var width = smallMenu ? 200 : 543;
		context.fillStyle = "#000000";
		context.fillRect(offset[0],offset[1]+10+yOffset*25,width,25);
		if(entry.type === 0){
			context.fillStyle = selectedIndex === yOffset ? "#ff0000" : "#ffffff";
			context.font = "20px monospace";
			context.textAlign = entry.display ? "center" : "start";
			context.textBaseline = "top"
			var xPos = offset[0] + (entry.display ? Math.floor(width/2) : 10);
			context.fillText(entry.name,xPos,offset[1]+10+yOffset*25);
		} else if(entry.type === 1){
			context.fillStyle = "#ffffff";
			context.font = "20px monospace";
			context.textAlign = "start";
			context.textBaseline = "top"
			context.fillText(entry.name,offset[0]+10,offset[1]+10+yOffset*25);
			context.fillStyle = selectedIndex === yOffset ? "#ff0000" : "#ffffff";
			context.textAlign = "end";
			context.fillText(entry.value,offset[0]+533,offset[1]+10+yOffset*25);
		}
		
	}
	var select = function(indexOverride){
		var index = indexOverride || selectedIndex;
		menus[currMenu][index].action();
	}
	var upSelect = function(){
		oldIndex = selectedIndex;
		selectedIndex = selectedIndex === 0 ? menus[currMenu].length-1 : selectedIndex - 1;
		drawEntry(menus[currMenu][oldIndex],oldIndex);
		drawEntry(menus[currMenu][selectedIndex],selectedIndex);
	}
	var downSelect = function(){
		oldIndex = selectedIndex;
		selectedIndex = selectedIndex === (menus[currMenu].length-1) ? 0 : selectedIndex + 1;
		drawEntry(menus[currMenu][oldIndex],oldIndex);
		drawEntry(menus[currMenu][selectedIndex],selectedIndex);
	}
	var handleEvent = function(eventName){
		//console.log(eventName);
		switch(eventName){
			case "down":
				downSelect();
				break;
			case "up":
				upSelect();
				break;
			case "left":
				if((typeof menus[currMenu][selectedIndex].value === "number") && (menus[currMenu][selectedIndex].editable !== false)){
					menus[currMenu][selectedIndex].value-=menus[currMenu][selectedIndex].increment;
					drawEntry(menus[currMenu][selectedIndex],selectedIndex);
					if(menus[currMenu][selectedIndex].autoAction){
						select();
					}
				};
				break;
			case "right":
				if((typeof menus[currMenu][selectedIndex].value === "number") && (menus[currMenu][selectedIndex].editable !== false)){
					menus[currMenu][selectedIndex].value+=menus[currMenu][selectedIndex].increment;
					drawEntry(menus[currMenu][selectedIndex],selectedIndex);
					if(menus[currMenu][selectedIndex].autoAction){
						select();
					}
				};
				break;
			case "escape":
				if(menuHistory.length === 0){
					if(gameStarted){
						communicator.toggleGame();
					}else{
						gameStarted = true;
						communicator.startGame();
					}
				}else{
					console.log(menuHistory.length);
					upMenu();
				}
				break;
			case "submit":
				select();
				break;
			default:
				break;
		}
		//console.log(selectedIndex);
	}
	publicValues.handleEvent = handleEvent;
	return publicValues;
}

var TetrisControls = function(options,context,communicator){
	var publicValues = {};
	var communicator = communicator;
	var options = options;
	var context = context;
	var focusMode = 0;
	/*
	focusMode 1 means playing game
	focusMode 0 means paused so menu gets attention
	focusMode 2 means that a key is being rebound
	focusMode 3 means that a setting is being changed
	*/
	var changeFocus = function(newFocus){
		focusMode = newFocus;
	}
	publicValues.changeFocus = changeFocus;
	var keybinds = options.keybinds;
	var eventOwners = {
		rightRotate: "matrix",
		right: "matrix",
		softDown: "matrix",
		left: "matrix",
		leftRotate: "matrix",
		softUp: "matrix",
		hardDown: "matrix",
		hold: "matrix",
		pause: "game"
	}
	var lastAct = {
		rightRotate: 0,
		right: 0,
		softDown: 0,
		left: 0,
		leftRotate: 0,
		softUp: 0,
		hardDown: 0,
		hold: 0
	}
	var repeatPress = {
		rightRotate: 0,
		right: 0,
		softDown: 0,
		left: 0,
		leftRotate: 0,
		softUp: 0,
		hardDown: 0,
		hold: 0
	};
	// repeatPress value of 0 means the key has yet to be held, value of 1 means it is held but has not passed the ARR threshold, and value of 2 means it is being held and has passed the threshold.
	var delays = options.gameSettings.delays;
	var repeats = {
		rightRotate: false,
		right: 25,
		softDown: 25,
		left: 25,
		leftRotate: false,
		softUp: 50,
		hardDown: false,
		hold: false
	};
	var downedKeys = {
		rightRotate: false,
		right: false,
		softDown: false,
		left: false,
		leftRotate: false,
		softUp: false,
		hardDown: false,
		hold: false
	};
	var rebindEvent = null;
	var rebindKeyCode = null;
	var startRebind = function(currentKeyCode,eventName){
		changeFocus(2);
		rebindEvent = eventName;
		rebindKeyCode = currentKeyCode;
		//options.gameSettings.keybinds[1][currentKeyCode]
	}
	publicValues.startRebind = startRebind;
	var endRebind = function(newKeyCode){
		//console.log(newKeyCode);
		if(newKeyCode===rebindKeyCode || newKeyCode===27){
			newKeyCode = rebindKeyCode;
		}else{
			delete keybinds[1][rebindKeyCode][keybinds[1][rebindKeyCode].indexOf(rebindEvent)]
			if(keybinds[1][newKeyCode] === undefined){
				keybinds[1][newKeyCode] = [rebindEvent];
			}else{
				keybinds[1][newKeyCode].push(rebindEvent);
			}
		}
		rebindEvent = null;
		rebindKeyCode = null;
		changeFocus(0);
		communicator.endRebind(newKeyCode);
	}
	var checkRepeat = function(eventName){
		//checkRepeat checks whether any key is warranting an upgrade in repeat level or can trigger an action
		var currTime = communicator.frameTimestamp;
		/*if(repeatPress[eventName] === 0){
			repeatPress[eventName] = delays[eventName] === false ? -1 : 1;
			lastAct[eventName] = currTime;
			return true;
		}else */
		for(key in lastAct){
			var eventName = key;
			if(repeatPress[eventName] !== 0 && downedKeys[eventName]){
				if(repeats[eventName] !== false && (currTime-lastAct[eventName])>delays[eventName]){
					repeatPress[eventName] = 2;
					lastAct[eventName] = currTime;
					communicator.sendEvent("matrix","keydown",eventName);
				}else if(repeatPress[eventName] === 2 && (currTime-lastAct[eventName])>repeats[eventName]){
					lastAct[eventName] = currTime;
					communicator.sendEvent("matrix","keydown",eventName);
				}
			}
		}
	}
	publicValues.checkRepeat = checkRepeat;
	var keydownHandler = function(event){
		//console.log(event);
		//console.log(event.code);
		var currTime = communicator.frameTimestamp;
		if(keybinds[focusMode] && keybinds[focusMode][event.which]){
			event.preventDefault();
			var eventTotal = keybinds[focusMode][event.which].length;
			for(var ii=0;ii<eventTotal;ii++){
				var eventName = keybinds[focusMode][event.which][ii];
				//console.log(eventName);
				var eventOwner = eventOwners[eventName];
				if(eventOwner === "matrix" && focusMode === 1){
					if(repeatPress[eventName] === 0){
						//console.log("keydown triggered!",eventName,eventOwner);
						communicator.sendEvent(eventOwner,event.type,eventName);
						lastAct[eventName] = currTime;
					}
					if(repeats[eventName] !== false && repeatPress[eventName] === 0){
						repeatPress[eventName] = 1;
						if(!downedKeys[eventName]){
							downedKeys[eventName] = true;
						}
					}
				}else if(eventName === "pause" && focusMode === 1){
					communicator.toggleGame();
				}else if(focusMode === 0){
					communicator.sendEvent("menu","keydown",eventName);
				}
			}
		}else if(focusMode === 2){
			event.preventDefault();
			//console.log(event.which);
			endRebind(event.which);
		}else if(focusMode === 3){
			event.preventDefault();
		}
	};
	var keyupHandler = function(event){
		//console.log(event);
		var currTime = communicator.frameTimestamp;
		if(keybinds[focusMode] && keybinds[focusMode][event.which]){
			event.preventDefault();
			var eventTotal = keybinds[focusMode][event.which].length;
			for(var ii=0;ii<eventTotal;ii++){
				var eventName = keybinds[focusMode][event.which][ii];
				var eventOwner = eventOwners[eventName];
				if(eventOwner === "matrix"){
					//console.log("keyup triggered!",eventName,eventOwner);
					if(repeats[eventName] !== false){
						repeatPress[eventName] = 0;
					}
					downedKeys[eventName] = false;
				}
			}
		}
	}
	//$(document).on("keydown",function(event){console.log(event.key + ", " + event.which)});
	$(document).on("keydown",keydownHandler);
	$(document).on("keyup",keyupHandler);
	return publicValues;
}

TetrisQueue = function(options,context,communicator) {
	var publicValues = {};
	var communicator = communicator;
	var options = options;
	var context = context;
	var queue = [];
	var hold = -1;
	var hasHeld = false;
	var queueOffset = [303,41];
	var holdOffset = [21,41];
	var pieceTotals = [];
	var drawOutline = function(){
		context.font = "20px monospace";
		context.textAlign = "center";
		context.textBaseline = "bottom";
		context.fillStyle = "#ffffff";
		context.fillText("Hold",60,35);
		context.fillText("Queue",343,35);
		context.strokeStyle = "#ffffff";
		context.strokeRect(20.5,40.5,81,81);
		context.strokeRect(302.5,40.5,81,381);
	}
	publicValues.drawOutline = drawOutline;
	var initQueue = function(){
		//drawOutline();
		hold = -1;
		queue = [];
		refillQueue();
		refillQueue();
		//drawQueue();
		//drawHold();
		return withdrawPiece();
	}
	publicValues.initQueue = initQueue;
	var withdrawHold = function(currentPieceNum){
		if(hold == -1 && !hasHeld){
			hasHeld = true;
			hold = currentPieceNum;
			drawHold();
			return withdrawPiece();
		}else if(!hasHeld){
			hasHeld = true;
			oldHold = hold;
			hold = currentPieceNum;
			drawHold();
			return oldHold;
		}else{
			return -1;
		}
	}
	publicValues.withdrawHold = withdrawHold;
	var withdrawPiece = function(){
		//console.log(queue);
		hasHeld = false;
		var pieceNum = queue.shift();
		if(queue.length <= 7){
			refillQueue();
		}
		//drawQueue();
		return pieceNum;
	}
	publicValues.withdrawPiece = withdrawPiece;
	var refillQueue = function(overrideValue){
		var remainingItems = [0,1,2,3,4,5,6];
		for(ii=6;ii>=0;ii--){
			var randomIndex = Math.floor(Math.random()*ii);
			//console.log(randomIndex);
			queue.push(remainingItems.splice(randomIndex,1)[0]);
		}
	}
	var drawQueue = function(){
		//console.log(hgfdj);
		context.fillStyle = "#000000";
		context.fillRect(queueOffset[0],queueOffset[1],80,360);
		for(var ii=0;ii<6;ii++){
			drawPiece(queue[ii],1,[options.pieces[queue[ii]].queueOffset[0],options.pieces[queue[ii]].queueOffset[1]+1],[queueOffset[0],queueOffset[1]+(ii*60)])
		}
	}
	publicValues.drawQueue = drawQueue;
	var drawHold = function(){
		context.fillStyle = "#000000";
		context.fillRect(holdOffset[0],holdOffset[1],80,80);
		if(hold>=0){
			drawPiece(hold,1,[options.pieces[hold].queueOffset[0],options.pieces[hold] .queueOffset[1]+1],holdOffset);
		}else{
			
		}
	}
	publicValues.drawHold = drawHold;
	var drawPiece = function(pieceNum,scale,pieceOffset,offset){
		var rowTotal = options.pieces[pieceNum].rotation[0].length;
		var ii = rowTotal;
		while(ii){
			ii--;
			var rowMask = options.pieces[pieceNum].rotation[0][ii];
			var jj = 0;
			while(rowMask){
				if(rowMask%2){
					context.fillStyle = options.pieces[pieceNum].color;
					context.fillRect(offset[0]+(pieceOffset[0]+jj)*20*scale,offset[1]+(pieceOffset[1]+ii)*20*scale,20,20);
				}
				rowMask = rowMask >> 1;
				jj++;
			}
		}
	}
	return publicValues;
}

TetrisMatrix = function(options,context,communicator) {
	var publicValues = {};
	var options = options;
	var communicator = communicator;
	var fieldOffset = [102,41];
	var context = context;
	var width = options.matrixSettings.width;
	var height = options.matrixSettings.visibleHeight;
	var invisibleHeight = options.matrixSettings.invisibleHeight;
	var alternateRotations = {
		1: [[-1,0],[-1,1],[0,-2],[-1,-2]],
		4: [[1,0],[1,-1],[0,2],[1,2]],
		2: [[1,0],[1,-1],[0,2],[1,2]],
		5: [[-1,0],[-1,1],[0,-2],[-1,-2]],
		3: [[1,0],[1,1],[0,-2],[1,-2]],
		6: [[-1,0],[-1,-1],[0,2],[-1,2]],
		0: [[-1,0],[-1,-1],[0,2],[-1,2]],
		7: [[1,0],[1,1],[0,-2],[1,-2]]
	}
	var alternateIRotations = {
		1: [[-2,0],[1,0],[-2,-1],[1,2]],
		4: [[2,0],[-1,0],[2,1],[-1,-2]],
		2: [[-1,0],[2,0],[-1,2],[2,-1]],
		5: [[1,0],[-2,0],[1,-2],[-2,1]],
		3: [[2,0],[-1,0],[2,1],[-1,-2]],
		6: [[-2,0],[1,0],[-2,-1],[1,2]],
		0: [[-1,0],[-2,0],[1,-2],[-2,1]],
		7: [[1,0],[2,0],[-1,2],[2,-1]]
	}
	var useArika = false;
	var alternateArikaIRotations = {
		1: [[-2,0],[1,0],[1,2],[-2,-1]],
		4: [[2,0],[-1,0],[-1,2],[2,-1]],
		2: [[-2,0],[1,0],[-2,1],[1,-1]],
		5: [[2,0],[-1,0],[2,1],[-1,-1]],
		3: [[2,0],[-1,0],[2,1],[-1,-2]],
		6: [[-2,0],[1,0],[-2,1],[1,-2]],
		0: [[-1,0],[2,0],[-1,2],[2,-1]],
		7: [[1,0],[-2,0],[1,2],[-2,-1]]
	}
	var setBackground = function(x,y){
		context.fillStyle = (x+y)%2 ? "#111111" : "#000000";
		if(x>=0 && y>=0){
			context.fillRect(fieldOffset[0]+x*20,fieldOffset[1]+y*20,20,20);
		}
	};
	var collisionMap = [];
	publicValues.collisionMap = collisionMap;
	var colorMap = [];
	publicValues.colorMap = colorMap;
	var repaintBackground = function(){
		var ii = height;
		while(ii){
			ii--;
			var jj = width;
			while(jj){
				jj--;
				setBackground(jj,ii);
			}
		}
		repaint();
	}
	publicValues.repaintBackground = repaintBackground;
	var drawTile = function(x,y,color){
		context.fillStyle = color ? color : "#888888";
		if(x>=0 && y>=0){
			context.fillRect(fieldOffset[0]+x*20,fieldOffset[1]+y*20,20,20);
		}
	};
	var mainPiece = {};
	mainPiece.pieceNum = 0;
	mainPiece.pieceRot = 0;
	mainPiece.piecePos = 0;
	mainPiece.shadowHeight = 0;
	mainPiece.solidColor = options.pieces[mainPiece.pieceNum].color;
	/*ghostPiece = {};
	ghostPiece.pieceNum = mainPiece.pieceNum;
	ghostPiece.pieceRot = mainPiece.pieceRot;
	ghostPiece.piecePos = [0,0];*/
	var setPiece = function(pieceNum){
		mainPiece.pieceNum = pieceNum;
		mainPiece.pieceRot = 0;
		mainPiece.piecePos = Object.create(options.pieces[pieceNum].start);
		mainPiece.solidColor = options.pieces[mainPiece.pieceNum].color;
	}
	publicValues.setPiece = setPiece;
	var lastGrav = communicator.frameTimestamp;
	var pieceWithdrawn = false;
	var groundContactTimestamp = -1;
	var autoTriggers = function(){
		var currTime = communicator.frameTimestamp;
		if(mainPiece.shadowHeight === mainPiece.piecePos[1] && groundContactTimestamp >= 0){
			//console.log("hey");
			if(currTime >= groundContactTimestamp+options.matrixSettings.lockDelay){
				addToInputQueue("hardDown");
				groundContactTimestamp = -1;
			}else{
				
			}
		}else{
			if(currTime>lastGrav+options.matrixSettings.gravity && pieceWithdrawn === false){
				lastGrav = currTime;
				addToInputQueue("softDown");
			}else if(currTime>lastGrav+options.matrixSettings.gravityDelay && pieceWithdrawn === true){
				//console.log(currTime-lastGrav)
				lastGrav = currTime;
				pieceWithdrawn = false;
				addToInputQueue("softDown");
			}
		}
	}
	publicValues.autoTriggers = autoTriggers;
	var drawPiece = function(clearPiece,pieceRef,shadow,overrideColor,overridePosition,overrideRotation){
		//console.log("drawing piece: "+mainPiece.pieceNum+" position: "+mainPiece.piecePos+" rotation: "+mainPiece.pieceRot);
		var piece = pieceRef ? pieceRef : mainPiece;
		var pieceColor = overrideColor ? overrideColor : (shadow ? options.pieces[piece.pieceNum].shadowColor : piece.solidColor);
		var position = overridePosition ? overridePosition : (shadow ? [piece.piecePos[0],piece.shadowHeight] : piece.piecePos);
		var rotation = overrideRotation ? overrideRotation : piece.pieceRot;
		clearPiece = clearPiece ? clearPiece : false;
		var rowTotal = options.pieces[piece.pieceNum].rotation[rotation].length;
		var ii = rowTotal;
		while(ii){
			ii--;
			var rowMask = options.pieces[piece.pieceNum].rotation[rotation][ii];
			var jj = 0;
			while(rowMask){
				if(rowMask%2){
					if(clearPiece){
						setBackground(position[0]+jj,position[1]+ii);
						colorMap[position[1]+ii][position[0]+jj] = null;
					}else{
						drawTile(position[0]+jj,position[1]+ii,pieceColor);
						colorMap[position[1]+ii][position[0]+jj] = pieceColor;
					}
				}
				rowMask = rowMask >> 1;
				jj++;
			}
		}
	};
	var repaint = function(){
		for(var ii=-5;ii<height;ii++){
			for(var jj=0;jj<10;jj++){
				/*if((colorMap[ii][jj]%8) === 7){
					setBackground(jj,ii);
				}else{
					//console.log(options,colorMap,colorMap[ii],colorMap[jj],ii,jj,options.pieces[colorMap[ii][jj]].color);
					var isShadow = (colorMap[ii][jj] >= 8) ? "shadowColor" : "color";
					var pieceNum = colorMap[ii][jj] % 8;
					drawTile(jj,ii,options.pieces[pieceNum][isShadow]);
				}*/
				if(colorMap[ii][jj]===null){
					setBackground(jj,ii);
				}else{
					drawTile(jj,ii,colorMap[ii][jj]);
				}
			}
		}
	}
	var clearFullLines = function(){
		var linesCleared = 0;
		for (var ii=-invisibleHeight;ii<height;ii++) {
			if(collisionMap[ii] == 1023){
				linesCleared++;
				collisionMap[ii] = null;
				colorMap[ii] = null;
				topIndex = 0-invisibleHeight;
				for(var jj=ii;jj>-invisibleHeight;jj--){
					collisionMap[jj] = collisionMap[jj-1];
					colorMap[jj] = colorMap[jj-1];
				}
				collisionMap[topIndex] = 0;
				var newRow = [];
				for(var jj=0;jj<width;jj++){
					newRow[jj] = null;
				}
				colorMap[topIndex] = newRow;
			}
		}
		if(linesCleared > 0){
			communicator.clearLines(linesCleared);
			repaint();
		}
	}
	var collisionDetect = function(){
		var rowTotal = options.pieces[mainPiece.pieceNum].rotation[mainPiece.pieceRot].length;
		if((rowTotal+mainPiece.piecePos[1])>height){
			return 1;
		}
		var ii = rowTotal;
		while(ii){
			ii--;
			var rowMask = options.pieces[mainPiece.pieceNum].rotation[mainPiece.pieceRot][ii];
			var jj = 0;
			var row = collisionMap[mainPiece.piecePos[1]+ii];
			var relativeRowMask = mainPiece.piecePos[0] < 0 ? rowMask >> Math.abs(mainPiece.piecePos[0]) : rowMask << mainPiece.piecePos[0];
			//console.log(relativeRowMask);
			if(relativeRowMask & row){
				return 2;
			}
			pieceWidth = 0;
			var rowMaskCopy = rowMask;
			while(rowMaskCopy>0){
				pieceWidth++;
				rowMaskCopy = rowMaskCopy >> 1;
			}
			pieceStart = 0;
			var rowMaskCopy = rowMask;
			while(rowMaskCopy%2 == 0 && rowMaskCopy>0){
				pieceStart++;
				rowMaskCopy = rowMaskCopy >> 1;
			}
			//console.log(pieceStart, options.pieces[mainPiece.pieceNum].rotation[mainPiece.pieceRot]);
			if((pieceWidth+mainPiece.piecePos[0])>10 || (mainPiece.piecePos[0]+pieceStart)<0){
				return 3;
			}
		}
		return false;
	};
	var addToCollisionMap = function(){
		var rowTotal = options.pieces[mainPiece.pieceNum].rotation[mainPiece.pieceRot].length;
		communicator.placePiece();
		var ii = rowTotal;
		while(ii){
			ii--;
			var rowMask = options.pieces[mainPiece.pieceNum].rotation[mainPiece.pieceRot][ii];
			//console.log(collisionMap[mainPiece.piecePos[1]+ii]);
			//console.log(rowMask << mainPiece.piecePos[0]);
			collisionMap[mainPiece.piecePos[1]+ii] = collisionMap[mainPiece.piecePos[1]+ii] | (mainPiece.piecePos[0] < 0 ? rowMask >> Math.abs(mainPiece.piecePos[0]) : rowMask << mainPiece.piecePos[0]);
			/*if(collisionMap[mainPiece.piecePos[1]+ii] == 1023){
				//console.log("full line, clearing!");
				//clearedLines.push(mainPiece.piecePos[1]+ii);
			}*/
		}
	}
	var alternateCheck = function(leftRotate){
		leftRotate = leftRotate ? 1 : 0;
		var alternates;
		if(mainPiece.pieceNum === 0){
			return false;
		}else if(mainPiece.pieceNum === 1){
			alternates = useArika ? alternateArikaIRotations[leftRotate*4+mainPiece.pieceRot] : alternateIRotations[leftRotate*4+mainPiece.pieceRot];
			//console.log(alternates);
		}else{
			alternates = alternateRotations[leftRotate*4+mainPiece.pieceRot]
		}
		for(ii=0;ii<4;ii++){
			//console.log(mainPiece.piecePos);
			mainPiece.piecePos = [mainPiece.piecePos[0]+alternates[ii][0],mainPiece.piecePos[1]-alternates[ii][1]];
			//console.log(mainPiece.piecePos);
			var collision = collisionDetect();
			if(collision === false){
				return alternates[ii];
			}
			mainPiece.piecePos = [mainPiece.piecePos[0]-alternates[ii][0],mainPiece.piecePos[1]+alternates[ii][1]];
		}
		return false;
	}
	var rightRotatePiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.pieceRot = (mainPiece.pieceRot + 1) % 4;
		var collision = collisionDetect();
		if(collision !== false){
			//console.log("collision from rotation!");
			var alternate = alternateCheck(false);
			if(alternate === false){
				mainPiece.pieceRot = (mainPiece.pieceRot + 3) % 4;
			}else{
				if(alternate[1]<0){
					lastGrav = communicator.frameTimestamp
				}
			}
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};
	var leftRotatePiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.pieceRot = (mainPiece.pieceRot + 3) % 4;
		var collision = collisionDetect();
		if(collision !== false){
			//console.log("collision from rotation!");
			var alternate = alternateCheck(true);
			if(alternate === false){
				mainPiece.pieceRot = (mainPiece.pieceRot + 3) % 4;
			}else{
				if(alternate[1]<0){
					lastGrav = communicator.frameTimestamp;
					groundContactTimestamp = -1;
				}
			}
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};
	/*var upPiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.piecePos[1]--;
		var collision = collisionDetect();
		if(collision){
			//console.log("collision from movement!");
			mainPiece.piecePos[1]++;
			addToCollisionMap();
			drawPiece();
			clearFullLines();
			communicator["getNewPiece"]();
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};*/
	var downPiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.piecePos[1]++;
		lastGrav = communicator.frameTimestamp;
		var collision = collisionDetect();
		if(collision){
			//console.log("collision from movement!");
			mainPiece.piecePos[1]--;
			//addToCollisionMap();
			//drawPiece();
			//clearFullLines();
			//communicator["getNewPiece"]();
		}
		if(mainPiece.piecePos[1] === mainPiece.shadowHeight){
			groundContactTimestamp = communicator.frameTimestamp;
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};
	var leftPiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.piecePos[0]--;
		var collision = collisionDetect();
		if(collision){
			//console.log("collision from movement horizontally!");
			mainPiece.piecePos[0]++;
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};
	var rightPiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		mainPiece.piecePos[0]++;
		var collision = collisionDetect();
		if(collision){
			//console.log("collision from movement horizontally!");
			mainPiece.piecePos[0]--;
		}
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
		return collision;
	};
	var hardDownPiece = function(shadowCalc){
		var originalHeight = mainPiece.piecePos[1];
		if(!shadowCalc){
			hardDownPiece(true);
			drawPiece(true,false,true);
			drawPiece(true);
		}
		mainPiece.piecePos[1]++;
		var collision = collisionDetect();
		while(collision == 0){
			mainPiece.piecePos[1]++;
			collision = collisionDetect();
		}
		if(shadowCalc){
			mainPiece.piecePos[1]--;
			mainPiece.shadowHeight = mainPiece.piecePos[1];
			//console.log(originalHeight);
			mainPiece.piecePos[1] = originalHeight;
		}else{
			mainPiece.piecePos[1]--;
			lastGrav = communicator.frameTimestamp;
			pieceWithdrawn = true;
			addToCollisionMap();
			drawPiece();
			clearFullLines();
			communicator["getNewPiece"]();
		}
		if(!shadowCalc){
			hardDownPiece(true);
			drawPiece(false,false,true);
			drawPiece();
		}
	}
	var holdPiece = function(){
		hardDownPiece(true);
		drawPiece(true,false,true);
		drawPiece(true);
		communicator["getHold"](mainPiece.pieceNum);
		hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();
	}
	var inputQueue = [];
	var addToInputQueue = function(eventName){
		inputQueue.unshift(eventName);
	}
	publicValues.addToInputQueue = addToInputQueue;
	var processInput = function(){
		var inputQueueLength = inputQueue.length;
		while(inputQueueLength > 0){
			var actionName = inputQueue.pop();
			switch(actionName){
				case "rightRotate":
					rightRotatePiece();
					break;
				case "right":
					rightPiece();
					break;
				case "left":
					leftPiece();
					break;
				case "softDown":
					downPiece();
					break;
				case "leftRotate":
					leftRotatePiece();
					break;
				case "softUp":
					upPiece();
					break;
				case "hardDown":
					hardDownPiece();
					break;
				case "hold":
					holdPiece();
					break;
				default:
					break;
			}
			inputQueueLength--;
		}
	}
	publicValues.processInput = processInput;
	var initMatrix = function(pieceNum){
		mainPiece.pieceNum = pieceNum;
		mainPiece.pieceRot = 0;
		mainPiece.piecePos = [options.pieces[mainPiece.pieceNum].start[0],options.pieces[mainPiece.pieceNum].start[1]];
		mainPiece.solidColor = options.pieces[mainPiece.pieceNum].color;
		console.log("Resetting game...");
		pieceWithdrawn = true;
		lastGrav = communicator.frameTimestamp;
		groundContactTimestamp = -1;
		inputQueue = [];
		drawOutline();
		//repaintBackground();
		/*hardDownPiece(true);
		drawPiece(false,false,true);
		drawPiece();*/
		hardDownPiece(true);
		for(var ii=-invisibleHeight;ii<height;ii++){
			colorMap[ii] = [];
			for(var jj=0;jj<width;jj++){
				colorMap[ii][jj] = null;
			}
			collisionMap[ii] = 0;
		}
		repaintBackground();
	}
	publicValues.initMatrix = initMatrix;
	var drawOutline = function(){
		context.strokeStyle = "#ffffff";
		context.strokeRect(101.5,40.5,201,401);
	}
	publicValues.drawOutline = drawOutline;
	return publicValues;
}
