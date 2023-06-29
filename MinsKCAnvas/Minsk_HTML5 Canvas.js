(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Minsk_HTML5 Canvas_atlas_1", frames: [[0,0,1037,683]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.КартаМинска = function() {
	this.initialize(ss["Minsk_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.КнопкаПушкинская = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Пушк");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AP8AAQAAExkrDXQkqDXmnAAQmmAAkrjXQkqjXAAkxQAAkwEqjXQErjXGmAAQGnAAEqDXQErDXAAEwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("ArRIHQkqjWAAkxQAAkwEqjXQErjXGmAAQGmAAErDXQErDXAAEwQAAExkrDWQkrDYmmAAQmmAAkrjYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-74.5,206,149);


(lib.КнопкаПлощадьЛенина = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ПлощадьЛенина");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AP8AAQAAExkrDXQkqDXmnAAQmmAAkrjXQkqjXAAkxQAAkwEqjXQErjXGmAAQGnAAEqDXQErDXAAEwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("ArRIHQkqjWAAkxQAAkwEqjXQErjXGmAAQGmAAErDXQErDXAAEwQAAExkrDWQkrDYmmAAQmmAAkrjYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-74.5,206,149);


(lib.КнопкаМинск_Пассаж = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("МинсПассажирский");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AP8AAQAAExkrDXQkqDXmnAAQmmAAkrjXQkqjXAAkxQAAkvEqjYQErjXGmAAQGnAAEqDXQErDYAAEvg");
	this.shape.setTransform(0,-0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("ArRIHQkqjWAAkxQAAkwEqjXQErjXGmAAQGmAAErDXQErDXAAEwQAAExkrDWQkrDYmmAAQmmAAkrjYg");
	this.shape_1.setTransform(0,-0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-74.9,206,149);


(lib.КнопкаВоенноекладбище = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Военноекладбище");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AP8AAQAAExkrDXQkqDXmnAAQmmAAkrjXQkqjXAAkxQAAkwEqjXQErjXGmAAQGnAAEqDXQErDXAAEwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("ArRIHQkqjWAAkxQAAkwEqjXQErjXGmAAQGmAAErDXQErDXAAEwQAAExkrDWQkrDYmmAAQmmAAkrjYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-74.5,206,149);


(lib.КнопкаБотаническийсад = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Ботаническийсад");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AP8AAQAAExkrDXQkqDXmnAAQmmAAkrjXQkqjXAAkxQAAkwEqjXQErjXGmAAQGnAAEqDXQErDXAAEwg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("ArRIHQkqjWAAkxQAAkwEqjXQErjXGmAAQGmAAErDXQErDXAAEwQAAExkrDWQkrDYmmAAQmmAAkrjYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-74.5,206,149);


// stage content:
(lib.Minsk_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Карта_Минска_jpg
	this.instance = new lib.КнопкаПлощадьЛенина();
	this.instance.setTransform(493.5,485.55,0.4456,0.1558,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.КнопкаПлощадьЛенина(), 3);

	this.instance_1 = new lib.КнопкаВоенноекладбище();
	this.instance_1.setTransform(776.65,320.2,0.1966,0.2966);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.КнопкаВоенноекладбище(), 3);

	this.instance_2 = new lib.КнопкаБотаническийсад();
	this.instance_2.setTransform(963.2,268.55,0.6041,0.5875);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.КнопкаБотаническийсад(), 3);

	this.instance_3 = new lib.КнопкаПушкинская();
	this.instance_3.setTransform(152.55,318.95,0.5549,0.5882);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.КнопкаПушкинская(), 3);

	this.instance_4 = new lib.КнопкаМинск_Пассаж();
	this.instance_4.setTransform(537.3,505.75,0.4286,0.1184);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.КнопкаМинск_Пассаж(), 3);

	this.instance_5 = new lib.КартаМинска();
	this.instance_5.setTransform(0,0,1.23,1.0494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,635.5,356.70000000000005);
// library properties:
lib.properties = {
	id: 'B7F87FFC897DAA4497635D1B922FFCE1',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Minsk_HTML5 Canvas_atlas_1.png?1678112293447", id:"Minsk_HTML5 Canvas_atlas_1"},
		{src:"sounds/Ботаническийсад_.mp3?1678112293585", id:"Ботаническийсад"},
		{src:"sounds/Военноекладбище_.mp3?1678112293585", id:"Военноекладбище"},
		{src:"sounds/МинсПассажирский_.mp3?1678112293585", id:"МинсПассажирский"},
		{src:"sounds/ПлощадьЛенина_.mp3?1678112293585", id:"ПлощадьЛенина"},
		{src:"sounds/Пушк_.mp3?1678112293585", id:"Пушк"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7F87FFC897DAA4497635D1B922FFCE1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;