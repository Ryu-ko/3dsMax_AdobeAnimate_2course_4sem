(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlKMJIgMgCIgLgCIgLgFIgKgEIgKgHIgJgHIgIgIIgHgJIgHgJIgFgLIgDgKQgFgTgBgSIAAgnIAAgrIAAgsIgBgrIAAgOQgXgxACg3QACgvAAgwIAAhXIABhVQAAgrgCgqIgFgJIgEgJIgEgJIgCgNIgCgMIgBgNIgCgNIgFgJIgEgJIgEgKIgCgLIgCgNIgCgNIgBgMIgDgGIgFgKQgOguACgyQACgvAAgvIAAhWIAAhcIAAhrIAAgPIAAgEIgGgKIgEgKIgDgLIgCgLIgBgLIABgLIACgKIADgMIAFgKIAHgJIAHgJIAJgHIAIgGIAKgFIAKgDIAKgDIAKgBIALAAIAKABIALADIAJADIAKAFIAJAGIAIAHIAKAKIAJAMIAKAKIAXADIAWAGQAKADAJAFQAKAFAIAGQAJAGAIAHIAIAIIAGAJIAHAJIABABIAEAEIAIAEIAHAEIAJADIAJADIAKAEIAJAEIAJAGIAJAGIAHAGIALAFIAJAFIAKAFIAJAGIALAGIAKAIIAKAJIAJAJIAKAFIALAEIAJAEIAJAGIAIAHIAJAJIAJAJIAIAJIAJAKIAJAJIAKAEIALAEIAKAEIAKAEIAKAHIAJAGIAIAIIAHAIIAHAJIABABIALAIIALAHIAMAHIAMADIANADIALAFIALAEIAKAFIALAFIAKAHIAJAHIAIAHIAHAIIAHAIIAGAIIAGAJIAFAHIAFAHIADACIAKAGIAKAHIAJAHIAJAHIAHAJIAHAKIAGAJIAFAJIAAABIAMADIAKAEIALAFIAKACIANACIAMACIANADIAMADIAMAFIAMAFIAJAGIAIAIIAHAHIAGAJIAGAJIAFAJIAEAKIADALIACAKIABAMIAGAKIAEAMIADALIACAKIABAKIgBALIgBAOIgDAOIgEAMIgFAMIgGALIgFAKIgGALIgGAJIgHAJIgHAIIgIAHIgJAGIgJAGIgJAJIgIAJIgKAJIgLAHIgMAFIgGAHIgGAHIgKAJIgLAIIgMAIIgLAJIgEAKIgEAJIgFAJIgGAIIgHAHIgHAHIgHAGIgIAGIgJAEIgKAEIgKADIgCACQgEAFgDAGIgFANIgHAJIgHAIIgHAJIgIAHIgKAHIgJAIIgJAHIgIAEIgGANIgGAMIgGAKIgHAIIgJAJIgJAGIgKAFIgKAGIgLAEIgKAFIgJADIgJAFIgIAKIgHAJIgHAJIgIAJIgIAJIgIAHIgIAHIgJAHIgCAFIgGAKIgIAKIgHAKIgIAIIgGAIIgKAGIgJAGIgJAGIgMAHIgMAGIgKAJIgJAHIgJAHIgMAGIgDAEIgIALIgGAKIgIALIgIAKIgJAJIgIAHIgJAGIgKAGIgJAEIgKAEIgCAEIgDAJIgCAKIgDAKIgDAKIgFAKIgFAKIgGAJIgHAGIgLAJIgKAIIgMAHIgKAFIgKAEIgKABIgMACIgMABIgLgBgAlMm5IAABGIAABEIAABGIAAAbIAFALIAEALIADANIADALIABAOIACAMIAEAJIAFAKIADAJIADANIADANIABANIABAOQAWAmAAAsIgBBeIAAByIAABhIAABIIABABIACAHIAFAKIAEAKIACANIACAMIACAMIABAMIAHgJIAHgJIAJgLIAJgHIAKgIIALgHIALgHIAIgHIAJgHIAJgGIAKgHIALgFIAKgGIAEgIIAFgJIAHgKIAHgIIAJgIIAJgIIAIgGIAHgGIAHgIIAIgLIAJgLIAKgLIAFgFIAFgHIAHgHIAIgFIAJgGIAJgEIAIgEIAHgDIAIgEIAEgLIAFgLIAHgKIAIgJIAJgIIAKgIIAKgHIALgEIAMgGIAAAAIADgHIADgKIAFgJIAFgIIAIgKIAHgKIAIgJIAIgJIAKgHIAKgGIAIgFIAKgEIADgHIADgHIAHgKIAIgJIAJgHIAJgGIAKgGIAKgGIAKgGIAKgGIAGgIIAGgJIAHgIIAIgHIAJgGIAKgFIAJgDIAHgHIAJgJIgLgDIgLgFIgKgEIgKgDIgKgCIgKgDIgMgFIgLgFIgKgHIgJgIIgKgHIgIgHIgHgIIgGgKIgIgLIgFgLIgEgCIgJgFIgIgGIgIgHIgHgHIgJgKIgIgKIgHgMIgIgLIgWgHQgMgDgLgGQgMgFgLgGIgWgOIgWgPIgTgRIgJgJIgXgJIgVgLIgTgPIgRgQIgQgSIgIgJIgLgDIgKgEIgKgFIgKgHIgIgIIgJgJIgIgIIgJgFIgJgGIgKgEIgOgHIgLgIIgKgHIgMgEIgLgGIgMgEIgLgGIgLgHIgKgGIgKgIIAABIg");
	this.shape.setTransform(52.475,77.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,155.6);


(lib.reverse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AIGJfIgPAAIgOAAIgOgBIgNAAIgMgBIgNgCIgNgBIgMgCIgMgCIgMgCIgLgEIgKgEQgsgCgsAAIhXABIhHAAIhFAAQgmAAglgEQgSgCgTgEIgLgFIgMgEIgMgDIgNgBIgMgCIgNgCIgMgEIgMgGIgJgHIgJgHIgJgHIgIgJIgGgKIgGgLIgEgMIgCgNIgBgMIAAgMIABgLIACgLIACgLIAEgOIAGgNIACgJIACgOIABgOIACgOIgFgMIgDgLIgBgMIABgLIACgMIADgLIAEgLIAGgKIAHgKIAHgIIAJgIIAJgGIADgPIACgMIAJgXIAKgbIAMgbIALgZIAKgVIAHgJIAJgJIAJgIIAKgGIAMgGIANgEIAOgDIAOgBIAMgBIAKgHIAKgHIAJgGIAGgEIADgLIAEgLIAFgLIAGgJIAIgJIAIgJIAJgGIAJgGIAKgFIAKgEIALgEIANgDIAOgBIANgCIAMAAIAMACIAMACIALADIAKACIAJAEIAIAGIAIAGIAHAHIAGAHIAFAJIAFAJIADAJIACAKIACAJIAAAKIgBAJIgDAKIgDAJIgEAKIgEAKIgGAJIgHAHIgIAHIgIAHIgJAGIgHADIgGAEIgDAKIgCAJIgEAJIgEAKIgFAJIgFAJIgHAIIgIAIIgJAHIgIAGIgJAGIgJAEIgKAEIgEANIgHANIANAAIANAAIANgBIANAAIANgBIAHgCIAMgFIALgDIAMgDIAOgDIAOgBIAOgCIAOgEIAOgEIAOgDIAOgDIAQgCIAPgCIAPgBIAFgBIAFgDIAJgHIAJgGIAJgGIAKgFIAKgEIAPgDIAFgLIAHgKIAHgKIAIgJIAGgKIAHgLIAGgKIAHgJIAIgKIAHgJQABgeAAgeIgBg8IAAg7IABgsIgBgrIgBgPIgGgJIgHgKIgJgJIgJgJIgIgCIgLgCIgMgEIgLgDIgLgFIgKgEIgKgFIgKgGIgHgEIgHgDIgKgDIgKgDIgOgGIgNgFIgNgGIgNgGIgNgGIgJgCIgNgCIgNgBIgNgDIgXgJIgUgIIgagLIgagMIgXgNIgWgMIgLgGIgegBIgsABIgoAAIgsgBIgrABIgdABIgmALQgSAFgTACQgUABgTAAIgbgBIgeABIgfAAIgLAEIgHADIgHAEIgGAHIgIAHIgIAHIgJAGIgKAGIgKAFIgKAFIgKAIIgJAIIgKAHIgJAGIgKAFIgJAEIgKAEIgIAFIgIAFIAAALIAAALIAAAOIAAAOIABAOIAFAIIAEAIIADAKIADAKIABALIACALIAHAJIAFALIAEALIADAMIABAMIgBAKIgCAKIgCAJIgEAJIgFAJIgGAIIgGAHIgHAGIgIAGIgJAFIgJAEIgJACIgKACIgKABIgLgBIgLgCIgKgDIgKgEIgKgFIgJgGIgIgHIgHgIIgHgJIgGgJIgHgMIgEgNIgCgNIgCgOIgCgNQgIgNgEgPQgGgVgCgWQgCgaABgbIgBgkQAAgTADgSQAEgSAIgQIAGgLIAPgRIAQgOIASgOIATgMQALgHALgFIALgFIALgEIAJgIIAIgIIAIgHIAJgGIAJgEIAIgEIAIgDIAEgFIAGgIIAIgHQAWgOAXgMQAagMAcgFQATgEATgBQAVgBAVABIAsgBIAeAAQAogPArgCQAxgDAyAAQAsABAtgBQAsgBArALQAsALAoAZIAWANIAHADIAIACIALAFIALAEIAKAFIANACIAMABIANACIANADIAZALIAZALIAZAKIAaAKIAZALIAXAMIANAEIAMACIAMADIAMADIALAEIAKAGIAKAGIALAIIAJAIIATASIARATIAIAJIAHAKIAJAJIAIAJIAHAJIAGALIAEAMQAKAvAAAxIgBBoIAABTQABAogCAqQgCAvgeAlIgQATIgFAIIgGAJIgFAJIgFAIIgEAGIgFAHIgCAMIgCAMIgEAKIgFAKIgGAJIgGAIIgIAIIgIAHIgJAGIgIAFIgKAEIgJADIgKADIgLACIgKABIgKABIgDADIgHAHIgIAGIgJAFIgKAEIgJAEIgJADIgKAEIgKABIgKABIgKABIgMABIgMABIgMAAIgMADIgNADIgMAEIgLADIgMACIgMACIgMABIgMABIgHACIgDACIgCABQgOAFgOADQgcAGgcAAQgaABgbAAIgtAAIgrAAIgqAAIgBAMIALAEQAtAEAuAAIBVgBIBHAAIBKAAQAogBAoAFIAWADIAKAEIAIADIAHADIAPABIAOABIAPAAIAOABIAPAAIAPAAIAKAAIALACIAKAEIAKAEIAJAGIAIAGIAHAIIAHAIIAFAJIAFAJIADAKIACALIABALIgBAKIgCAKIgDAJIgDAJIgFAJIgGAIIgGAHIgIAGIgIAGIgIAFIgJAEIgJACIgKACIgKABIgJAAgAGGCtIgCABIACgBIABgBgAoqnbIgCABIgDABIACAAIADgBIABgBgAnyoBIABAAIACgBIgDABg");
	this.shape.setTransform(68.4761,60.6458);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,121.3);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1F103").ss(15,1,1).p("AicrJIAAWTACdq1IAAVE");
	this.shape.setTransform(15.65,71.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,46.3,157.7);


(lib.лапа = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("Am6joIJWAXIEfG6");
	this.shape.setTransform(-184,-38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D0D00").ss(7,1,1).p("AmOkXII/BgIDeHP");
	this.shape_1.setTransform(-188.4,-33.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A1A00").ss(7,1,1).p("AlilHIIoCrICdHk");
	this.shape_2.setTransform(-192.775,-28.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#262600").ss(7,1,1).p("Ak2l3IIRD2IBcH5");
	this.shape_3.setTransform(-197.175,-24.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333300").ss(7,1,1).p("AkKmmIH6E/IAbIO");
	this.shape_4.setTransform(-201.575,-19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#292900").ss(7,1,1).p("AkvknIHhCjIB/Gs");
	this.shape_5.setTransform(-197.85,-32.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1F1F00").ss(7,1,1).p("AlVipIHIAHIDjFM");
	this.shape_6.setTransform(-194.125,-44.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#141400").ss(7,1,1).p("Al6AgIGviVIFGDr");
	this.shape_7.setTransform(-190.375,-64.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0A0A00").ss(7,1,1).p("AmgCZIGXkxIGqCL");
	this.shape_8.setTransform(-186.65,-77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7,1,1).p("AnFDnIF+nNIINAq");
	this.shape_9.setTransform(-182.925,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.8,-111.5,97.80000000000001,137.8);


(lib.жук = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.2,1,1).p("Aghh/IA7g5AguCLIBcAu");
	this.shape.setTransform(93.9,1.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFECE5").ss(3.2,1,1).p("AAQAAQAAAHgFAFQgEAFgHAAQgGAAgFgFQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAEAFQAFAFAAAGg");
	this.shape_1.setTransform(89.65,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3.2,1,1).p("AAQAAQAAAHgFAFQgEAFgHAAQgGAAgFgFQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAEAFQAFAFAAAGg");
	this.shape_2.setTransform(90.3,9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("Ah9kqQAAAUgMAPQgLAPgQAAQgPAAgMgPQgLgPAAgUQAAgVALgQQAMgOAPAAQAQAAALAOQAMAQAAAVgAjuAHQADgdARgXQAVgbAdAAQAdAAAVAbQAQAXAEAdQAAAGAAAHQAAAmgUAbQgVAbgdAAQgdAAgVgbQgUgbAAgmQAAgHAAgGIlZAAQAAgDAAgEQAAiTCLhoQCMhoDFAAQDFAACLBoQBbBEAfBWQAAgBABAAAlRh4QAAAVgMAPQgLAPgQAAQgQAAgMgPQgLgPAAgVQAAgWALgPQAMgOAQAAQAQAAALAOQAMAPAAAWgAA+ioQAAAagOATQgOASgUAAQgSAAgPgSQgOgTAAgaQAAgaAOgSQAPgSASAAQAUAAAOASQAOASAAAagAFghiQAFgKAIgKQAmgtA1AAQA1AAAmAtQAlAuAABBQAAA/glAuQgKALgJAIQggAbgoAAQg1AAgmguQgGgHgEgHQgCgCgBgDQgEgHgCgGQgCAPgIAMQgLANgOAAQgPAAgKgNQgLgOAAgTQAAgTALgOQAKgOAPAAQANAAAKANQgBgMgBgMQgBgGAAgHQgIAHgLAAQgQAAgMgQQgLgOAAgVQAAgVALgPQAMgPAQAAQAQAAAKAPQAEADABAEQAEgJAEgIAFjBYQgCAEgBAEAFaBGQgIgTgEgVABBCwQAAAbgOARQgOAUgUAAQgTAAgOgUQgNgRAAgbQAAgaANgTQAOgSATAAQAUAAAOASQAOATAAAagAFgBgQggBXhbBFQiLBojFAAQjFAAiMhoQiHhmgEiPAlOCEQAAAUgLAPQgMAPgPAAQgQAAgLgPQgLgPAAgUQAAgVALgPQALgOAQAAQAPAAAMAOQALAPAAAVgAh5EvQAAAUgLAOQgLAOgPAAQgPAAgKgOQgLgOAAgUQAAgTALgPQAKgOAPAAQAPAAALAOQALAPAAATgAFMAGImuABAFLgHQAAgoAMgh");
	this.shape_3.setTransform(36.5,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkLFQQgLgNAAgVQAAgTALgPQAKgNAPAAQAPAAALANQALAPAAATQAAAVgLANQgLAOgPAAQgPAAgKgOgAhkDcQgOgSAAgbQAAgaAOgTQAOgRAUgBQAUABAOARQAOATAAAaQAAAbgOASQgOATgUAAQgUAAgOgTgAnjCmQgLgPAAgUQAAgUALgPQALgOAQAAQAPAAAMAOQALAPAAAUQAAAUgLAPQgMAPgPAAQgQAAgLgPgAEZBmIgLgOIgDgFIgGgOQgIgTgDgUIgDgZIAAgMQAAgpAMggQADgJAFgIIAAgCIAAAAQAGgKAIgJQAlgtA2AAQA1AAAlAtQAmAuAABBQAAA/gmAuQgJALgKAIQgfAagoAAQg2AAglgtgAG1BBQAAAHAFAFQAFAEAHABQAHgBAEgEQAFgFAAgHQAAgHgFgFQgEgEgHAAQgHAAgFAEQgFAFAAAHIAAAAgAGvhVQAAAGAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgHAAQgHAAgFAFQgEAEAAAIIAAAAgAkuBVQgUgcAAglIAAgOQADgcARgXQAVgcAdAAQAdAAAVAcQAQAXAEAcIAAAOQAAAlgUAcQgVAbgdAAQgdAAgVgbgADJBgQgKgNAAgTQAAgUAKgNQAKgOAPAAQAOAAAKANQADAUAIATQgBAQgJALQgKAOgPAAQgPAAgKgOgAG6BNQgFgFAAgHQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHABQgHgBgFgEgAEFBFIAAAAgAHWBBIAAAAgADIgQQgLgPAAgUQAAgWALgOQALgPAQAAQAQAAALAPIAFAHQgMAgAAApQgJAGgLAAQgQAAgLgPgAGzhKQgEgFAAgGQAAgIAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAIQAAAGgFAFQgFAFgHAAQgHAAgFgFgAnohVQgLgOAAgWQAAgVALgPQAMgPAQAAQAQAAALAPQAMAPAAAVQAAAWgMAOQgLAQgQAAQgQAAgMgQgAHQhVIAAAAgAhnh7QgOgTAAgaQAAgaAOgSQAOgTAUABQAUgBANATQAPASAAAaQAAAagPATQgNASgUAAQgUAAgOgSgAkTkHQgLgPAAgVQAAgUALgQQAMgOAPAAQAQAAALAOQAMAQAAAUQAAAVgMAPQgLAPgQAAQgPAAgMgPg");
	this.shape_4.setTransform(44.925,3.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AlJD8QiHhmgEiOIFZgBIAAANQAAAmAUAbQAVAbAdAAQAdAAAVgbQATgbAAgmIAAgNIGugBIADAYQgKgMgOAAQgPgBgKAOQgKAOAAATQAAATAKAOQAKANAPAAQAPAAAKgNQAJgMABgPIAGANIADAFIgDAIIAAABQgfBWhcBFQiLBojFAAQjEAAiMhogAhEENQgLAPAAATQAAAUALANQAKAPAPAAQAPAAALgPQALgNAAgUQAAgTgLgPQgLgOgPAAQgPAAgKAOgABiCDQgOATAAAaQAAAbAOARQAOAUAUAAQAUAAAOgUQAOgRAAgbQAAgagOgTQgOgSgUAAQgUAAgOASgAkcBhQgLAOAAAVQAAAUALAOQALAQAQgBQAPABAMgQQALgOAAgUQAAgVgLgOQgMgPgPAAQgQAAgLAPgAnUAIIAAgIQAAiSCLhpQCMhoDEAAQDFAACLBoQBbBEAgBWQgFAIgDAJIgFgHQgLgOgQAAQgQAAgLAOQgLAPAAAVQAAAVALAOQALAQAQAAQALAAAJgHIAAANImuABQgEgdgPgWQgVgcgdAAQgdAAgVAcQgRAWgDAdIlZABIAAAAgAkhidQgLAQAAAVQAAAWALAOQAMAPAQAAQAQAAALgPQAMgOAAgWQAAgVgMgQQgLgOgQAAQgQAAgMAOgABfjUQgOASAAAaQAAAaAOATQAOASAUAAQAUAAANgSQAPgTAAgaQAAgagPgSQgNgSgUAAQgUAAgOASgAhMlOQgLAPAAAVQAAAVALAPQAMAOAPAAQAQAAALgOQAMgPAAgVQAAgVgMgPQgLgPgQAAQgPAAgMAPgAh7AHIAAAAgAG+AGIAAAAg");
	this.shape_5.setTransform(25.0375,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-34.5,124.1,75.2);


(lib.фрагмент = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.лапа("synched",5);
	this.instance.setTransform(-187.2,2.45,0.3609,0.5565,0,21.6903,-158.3101,-229.2,-62.2);

	this.instance_1 = new lib.лапа("synched",3);
	this.instance_1.setTransform(-170.2,-18.3,0.4193,0.6208,0,54.9865,-125.018,-230.5,-60.6);

	this.instance_2 = new lib.лапа("synched",8);
	this.instance_2.setTransform(-142,-32.55,0.4659,0.5503,0,60.0003,-120.0014,-228.2,-61.8);

	this.instance_3 = new lib.лапа("synched",7);
	this.instance_3.setTransform(-137.2,41.9,0.3609,0.5565,44.9978,0,0,-229.3,-62.1);

	this.instance_4 = new lib.лапа("synched",7);
	this.instance_4.setTransform(-115.4,29.1,0.4193,0.6208,14.996,0,0,-230.6,-60.6);

	this.instance_5 = new lib.лапа("synched",7);
	this.instance_5.setTransform(-104.75,7.9,0.4659,0.5503,0,0,0,-228.2,-61.8);

	this.instance_6 = new lib.жук("synched",0);
	this.instance_6.setTransform(-135.75,-1.05,1,1,-35.2295,0,0,38.1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:7}},{t:this.instance_4,p:{startPosition:7}},{t:this.instance_3,p:{startPosition:7}},{t:this.instance_2,p:{startPosition:8}},{t:this.instance_1,p:{startPosition:3}},{t:this.instance,p:{startPosition:5}}]}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:9}},{t:this.instance_4,p:{startPosition:9}},{t:this.instance_3,p:{startPosition:9}},{t:this.instance_2,p:{startPosition:9}},{t:this.instance_1,p:{startPosition:9}},{t:this.instance,p:{startPosition:9}}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.5,-82.4,167.7,173.3);


// stage content:
(lib.juk_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,31];
	this.streamSoundSymbolsList[31] = [{id:"звукдлямелкого",startFrame:31,endFrame:59,loop:1,offset:0},{id:"звукдлябольшогожука",startFrame:31,endFrame:59,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* stop();
		*/
		/* startButton.addEventListener(MouseEvent.CLICK,f1);
		pauseButton.addEventListener(MouseEvent.CLICK,f2);
		reverseButton.addEventListener(MouseEvent.CLICK,f3);
		
		function f1(event):void{
		  play();
		}
		
		function f2(event):void{
		  stop();
		}
		
		function f3(event):void{
		  gotoAndStop(0);
		}*/
		
		this.stop();
		this.startButton.addEventListener("click",f1.bind(this));
		function f1(args){this.play();} 
		
		this.pauseButton.addEventListener("click",f2.bind(this));
		function f2(args){this.stop();} 
		
		this.reverseButton.addEventListener("click",f3.bind(this));
		function f3(args){this.gotoAndStop(0);}
		playSound("jujjaniepchelvokrugulya28626mp3cutnet");
	}
	this.frame_31 = function() {
		var soundInstance = playSound("звукдлябольшогожука",0);
		this.InsertIntoSoundStreamData(soundInstance,31,59,1);
		var soundInstance = playSound("звукдлямелкого",0);
		this.InsertIntoSoundStreamData(soundInstance,31,59,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(29));

	// KNOPKI
	this.reverseButton = new lib.reverse();
	this.reverseButton.name = "reverseButton";
	this.reverseButton.setTransform(685.3,389.95,1,1,0,0,0,68.5,60.6);
	new cjs.ButtonHelper(this.reverseButton, 0, 1, 1);

	this.pauseButton = new lib.pause();
	this.pauseButton.name = "pauseButton";
	this.pauseButton.setTransform(535.75,370.55,1,1,0,0,0,15.7,71.4);
	new cjs.ButtonHelper(this.pauseButton, 0, 1, 1);

	this.startButton = new lib.start();
	this.startButton.name = "startButton";
	this.startButton.setTransform(429.2,370.45,1,1,0,0,0,52.5,77.8);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startButton},{t:this.pauseButton},{t:this.reverseButton}]}).wait(60));

	// жк5
	this.instance = new lib.фрагмент();
	this.instance.setTransform(1276.95,666.5,0.6804,0.7067,-109.5527,0,0,-149.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-149.1,rotation:55.4487,guide:{path:[1277,666.5,1226.2,662.3,1175.4,658.1,1164.5,659.3,1149.9,655,1143.8,649.5,1136.4,640.4,1136.4,543.5,1136.4,446.5,1111.5,416.7,1086.6,386.8,1086.6,336.9,1086.6,286.9,1090.7,280.3,1094.9,273.7,1094.9,270.5,1094.9,267.3,1100.4,265.3,1106,263.2,1109.4,263.1,1122.2,264.6,1150.5,251.6,1178.8,238.5,1228,258.7,1277.2,278.8], orient:'fixed'}},59).wait(1));

	// жк4
	this.instance_1 = new lib.фрагмент();
	this.instance_1.setTransform(787.9,162.1,0.4393,0.4873,-108.0151,0,0,-149.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-149.1,scaleX:0.4392,rotation:-21.8027,guide:{path:[788,162.1,785.8,162.1,783.7,162.1,772.3,151.1,775.1,136.5,798.6,113.8,837.3,113.1,881.5,134.3,862.7,166.8,856.2,185.5,849.7,204.2,803.5,220.7,760.6,208.1,748.2,204.6,735.8,201,726.5,191.5,717.3,181.9,714.3,176,711.3,170.1,711.3,159.8,711.3,149.4,715.2,138.1,719.2,126.7,727.2,117.8,736.8,116.6,753.8,104.6,770.9,92.6,790.8,92.6,810.8,92.6,815.9,94.1,825.9,94.6,886.9,91,931.7,98.2,983.7,99.7,974.3,61.3,980.8,50.8,984.3,48.5,984.3,41.5,984.3,34.4], orient:'fixed'}},59).wait(1));

	// жк3
	this.instance_2 = new lib.фрагмент();
	this.instance_2.setTransform(539.2,656.35,0.2018,0.1755,-104.9982,0,0,-144.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-132.8,regY:-5.8,rotation:75.0018,guide:{path:[539.2,656.3,532.7,652.4,526.3,648.5,508.7,632.2,523.4,619.9,548.2,599.2,574.6,622.9,581.6,626.8,585,629.3,588.4,631.9,588.2,633,601.3,660.2,588.8,681.2,522.7,717.5,482.7,687.8,465.3,679.7,465.9,673.3,458.4,668.1,456.8,643,455.2,617.9,487.8,595.9,504.2,589.5,520.6,583.1,527.7,583.1,534.8,583.1,576,587.4,617.3,591.6,622.2,596.6,627.2,601.5,635.2,606.2,635.8,610.1,640.7,615.8,645.7,621.5,648.5,621.5,651.4,621.5,664.8,630.9,670.5,635.5,676.3,640.1,674.4,639.8,681.4,647.3,684.9,663.6,678.3,672.4,671.8,681.2,676.4,691.7,681,702.2,692.4,707.7,701.1,706.8,713.1,706.8,725.2,706.8,725.8,707,726.5,707.1], orient:'fixed'}},59).wait(1));

	// жк2
	this.instance_3 = new lib.фрагмент();
	this.instance_3.setTransform(606.9,590.65,0.4168,0.4143,0,60.6812,59.9996,-149.2,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[606.9,590.5,612.1,591.1,617.2,591.6,622.2,596.6,627.2,601.5,635.2,606.2,635.7,610.1,640.7,615.8,645.7,621.5,648.6,621.5,651.4,621.5,664.8,630.9,670.6,635.5,676.3,640.1,674.4,639.8,681.4,647.3,684.9,663.6,678.4,672.4,671.8,681.2,676.4,691.7,681,702.2,692.4,707.7,701,706.8,713.1,706.8,725.2,706.8,729.8,707.9,734.3,709,735.5,711.9,742.1,713.1], orient:'fixed'}},59).wait(1));

	// жк
	this.instance_4 = new lib.фрагмент();
	this.instance_4.setTransform(5.85,367.15,0.4768,0.431,0,0,0,-149,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-149.1,rotation:-63.9792,guide:{path:[6,367.2,23,353.6,40,340,50.6,334.3,61.3,328.6,61.3,320.7,61.3,312.9,62.5,306.8,63.1,303.7,63.7,300.7,63.7,300.7,67.9,262.4,126.7,283.1,142.2,284.7,148.1,276.8,151.4,273.5,154.7,270.2,160.6,264.3,166,256.1,195.4,245.4,224.8,234.7,241.3,247.2,253.2,254.4,278.6,269.5,311.3,248.3,344,227,384,169.4,389.7,160.8,395.4,152.3,401.8,144.4,403.6,138.3,405.4,132.3,402.6,128.1,389.4,114.5,376.2,101,381.3,55.8,406.1,5.7], orient:'fixed'}},59).wait(1));

	// Большойжк
	this.instance_5 = new lib.фрагмент();
	this.instance_5.setTransform(82.85,666.1,1,1,0,0,0,-149.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1146.9,y:98.7},59).wait(1));

	// Слой_13
	this.instance_6 = new lib.фрагмент();
	this.instance_6.setTransform(435.65,28.25,0.4429,0.4883,96.5371,0,0,-149,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:116.9518,guide:{path:[435.6,28.3,468.5,87.3,501.3,146.2,509.5,156.7,517.6,167.2,520.8,167.2,523.9,167.2,526.5,170.3,530.9,173.2,532.4,174.2,533.8,175.1,547.6,187.6,561.3,200,578.8,230.8,596.3,261.6,611.3,299.8,626.3,337.9,636.3,360.2,646.3,382.5,646.3,385.2,646.3,387.8,656.3,403.6,666.3,419.3,666.3,423.9,666.3,428.5,667.3,430.4,668.2,432.2], orient:'fixed'}},31).to({regX:-148.8,regY:8.1,scaleX:0.4428,scaleY:0.4882,rotation:0,skewX:76.4476,skewY:-103.5507,guide:{path:[668.2,432.2,667.3,430.4,666.3,428.5,666.3,423.9,666.3,419.3,656.3,403.6,646.3,387.8,646.3,385.2,646.3,382.5], orient:'fixed'}},5).to({regX:-148.5,regY:7.5,scaleY:0.6511,skewX:100.6403,skewY:-218.111,guide:{path:[646.3,382.6,646.3,382.6,646.3,382.6], orient:'fixed'}},5).to({regX:-149.1,regY:8.5,scaleX:0.4429,scaleY:0.4883,rotation:96.5371,skewX:0,skewY:-360,guide:{path:[646.3,382.6,646.3,385.2,646.3,387.8,656.3,403.6,666.3,419.3,666.3,423.9,666.3,428.5,674.5,445,682.6,461.4,687.4,470.3,692.1,479.2,709.2,497.9,726.3,516.5,735.7,540.8,745.1,565.1,754.5,573,763.9,580.9,787,604.6,810.1,628.2,876.3,658.3,976.6,710.2], orient:'fixed'}},18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(609.3,326.4,728.4000000000001,424.4);
// library properties:
lib.properties = {
	id: '878FA2FEDCE2064DB45E45EDC204A525',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/звукдлябольшогожука_.mp3?1678112592550", id:"звукдлябольшогожука"},
		{src:"sounds/звукдлямелкого_.mp3?1678112592550", id:"звукдлямелкого"},
		{src:"sounds/jujjaniepchelvokrugulya28626mp3cutnet.mp3?1678112592550", id:"jujjaniepchelvokrugulya28626mp3cutnet"}
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
an.compositions['878FA2FEDCE2064DB45E45EDC204A525'] = {
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