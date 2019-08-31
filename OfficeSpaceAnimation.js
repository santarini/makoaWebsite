(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"OfficeSpaceAnimation_atlas_", frames: [[0,0,699,711],[701,0,698,603],[0,713,1024,236]]},
		{name:"OfficeSpaceAnimation_atlas_2", frames: [[1858,313,51,21],[902,427,51,21],[975,0,329,705],[0,0,973,239],[0,495,560,120],[1306,0,189,497],[1752,313,51,25],[1497,347,205,311],[1752,0,157,311],[1704,347,202,311],[1497,0,253,345],[700,241,200,368],[1805,313,51,25],[1306,660,583,40],[0,617,585,51],[562,495,136,46],[902,241,22,184],[0,241,698,252]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BlackEyes = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BlinkEyes = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.brick = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.clouds = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NormalMouth = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.officechair1 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.officechair2 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.officechair3 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.officechair4 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.officechair5 = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Smile = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tableedge = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tableface = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tablefoot = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.tableleg = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.viewcropped = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.viewsky = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.windowoutline = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wood = function() {
	this.spriteSheet = ss["OfficeSpaceAnimation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.viewsky();
	this.instance.parent = this;
	this.instance.setTransform(437,485,1.885,1.792);

	this.instance_1 = new lib.clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, rect = new cjs.Rectangle(0,0,1834.4,936.5), [rect]);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(917.2,468.3,1,1,180,0,0,917.2,468.2);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2603.6,811.8,1,1,0,0,0,917.2,468.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, rect = new cjs.Rectangle(0,0,3520.8,1280.1), [rect]);


// stage content:
(lib.RECOVER_OfficeSpaceAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chair2
	this.instance = new lib.officechair5();
	this.instance.parent = this;
	this.instance.setTransform(1020,491,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(500));

	// idk
	this.instance_1 = new lib.officechair5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1020,491,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

	// chair4
	this.instance_2 = new lib.officechair4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1448,533,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(500));

	// tableedge
	this.instance_3 = new lib.tableedge();
	this.instance_3.parent = this;
	this.instance_3.setTransform(826,655,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(500));

	// tabletop
	this.instance_4 = new lib.tableface();
	this.instance_4.parent = this;
	this.instance_4.setTransform(822,614,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(500));

	// tableleg
	this.instance_5 = new lib.tableleg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1296,671,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(500));

	// tablebase
	this.instance_6 = new lib.tablefoot();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1196,955,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500));

	// chair3
	this.instance_7 = new lib.officechair3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1196,399,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(500));

	// chair5
	this.instance_8 = new lib.officechair2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1629,421,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(500));

	// chair1
	this.instance_9 = new lib.officechair1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(668,421,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(500));

	// windowframe
	this.instance_10 = new lib.windowoutline();
	this.instance_10.parent = this;
	this.instance_10.setTransform(610,-225,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(500));

	// openeyes
	this.instance_11 = new lib.BlackEyes();
	this.instance_11.parent = this;
	this.instance_11.setTransform(319,252,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:true},1).wait(5).to({_off:false,x:320},0).wait(97).to({x:319},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},3).wait(5).to({_off:false},0).wait(115).to({_off:true},1).wait(6).to({_off:false},0).wait(109).to({_off:true},1).wait(4).to({_off:false},0).wait(107));

	// closedeyes
	this.instance_12 = new lib.BlinkEyes();
	this.instance_12.parent = this;
	this.instance_12.setTransform(319,252,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(500));

	// openmouth
	this.instance_13 = new lib.Smile();
	this.instance_13.parent = this;
	this.instance_13.setTransform(314,322,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(209).to({_off:true},1).wait(7).to({_off:false},0).wait(283));

	// closedmouth
	this.instance_14 = new lib.NormalMouth();
	this.instance_14.parent = this;
	this.instance_14.setTransform(314,322,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(500));

	// body
	this.instance_15 = new lib.Layer4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(153,147,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(500));

	// brick
	this.instance_16 = new lib.brick();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-5,-225,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(500));

	// city
	this.instance_17 = new lib.viewcropped();
	this.instance_17.parent = this;
	this.instance_17.setTransform(608,-225,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(500));

	// ceiling
	this.instance_18 = new lib.Layer3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(232,-225,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(500));

	// clouds3
	this.instance_19 = new lib.Symbol3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-1412.3,133,1,1,0,0,0,1760.4,640);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:-1402.3,y:132.3},0).wait(1).to({x:-1392.2,y:131.6},0).wait(1).to({x:-1382.2,y:130.9},0).wait(1).to({x:-1372.1,y:130.2},0).wait(1).to({x:-1362.1,y:129.5},0).wait(1).to({x:-1352,y:128.8},0).wait(1).to({x:-1342,y:128.1},0).wait(1).to({x:-1332,y:127.5},0).wait(1).to({x:-1321.9,y:126.8},0).wait(1).to({x:-1311.9,y:126.1},0).wait(1).to({x:-1301.8,y:125.4},0).wait(1).to({x:-1291.8,y:124.7},0).wait(1).to({x:-1281.7,y:124},0).wait(1).to({x:-1271.7,y:123.3},0).wait(1).to({x:-1261.7,y:122.6},0).wait(1).to({x:-1251.6,y:121.9},0).wait(1).to({x:-1241.6,y:121.2},0).wait(1).to({x:-1231.5,y:120.5},0).wait(1).to({x:-1221.5,y:119.8},0).wait(1).to({x:-1211.4,y:119.1},0).wait(1).to({x:-1201.4,y:118.4},0).wait(1).to({x:-1191.4,y:117.7},0).wait(1).to({x:-1181.3,y:117.1},0).wait(1).to({x:-1171.3,y:116.4},0).wait(1).to({x:-1161.2,y:115.7},0).wait(1).to({x:-1151.2,y:115},0).wait(1).to({x:-1141.2,y:114.3},0).wait(1).to({x:-1131.1,y:113.6},0).wait(1).to({x:-1121.1,y:112.9},0).wait(1).to({x:-1111,y:112.2},0).wait(1).to({x:-1101,y:111.5},0).wait(1).to({x:-1090.9,y:110.8},0).wait(1).to({x:-1080.9,y:110.1},0).wait(1).to({x:-1070.9,y:109.4},0).wait(1).to({x:-1060.8,y:108.7},0).wait(1).to({x:-1050.8,y:108},0).wait(1).to({x:-1040.7,y:107.3},0).wait(1).to({x:-1030.7,y:106.6},0).wait(1).to({x:-1020.6,y:106},0).wait(1).to({x:-1010.6,y:105.3},0).wait(1).to({x:-1000.6,y:104.6},0).wait(1).to({x:-990.5,y:103.9},0).wait(1).to({x:-980.5,y:103.2},0).wait(1).to({x:-970.4,y:102.5},0).wait(1).to({x:-960.4,y:101.8},0).wait(1).to({x:-950.3,y:101.1},0).wait(1).to({x:-940.3,y:100.4},0).wait(1).to({x:-930.3,y:99.7},0).wait(1).to({x:-920.2,y:99},0).wait(1).to({x:-910.2,y:98.3},0).wait(1).to({x:-900.1,y:97.6},0).wait(1).to({x:-890.1,y:96.9},0).wait(1).to({x:-880,y:96.2},0).wait(1).to({x:-870,y:95.6},0).wait(1).to({x:-860,y:94.9},0).wait(1).to({x:-849.9,y:94.2},0).wait(1).to({x:-839.9,y:93.5},0).wait(1).to({x:-829.8,y:92.8},0).wait(1).to({x:-819.8,y:92.1},0).wait(1).to({x:-809.7,y:91.4},0).wait(1).to({x:-799.7,y:90.7},0).wait(1).to({x:-789.7,y:90},0).wait(1).to({x:-779.6,y:89.3},0).wait(1).to({x:-769.6,y:88.6},0).wait(1).to({x:-759.5,y:87.9},0).wait(1).to({x:-749.5,y:87.2},0).wait(1).to({x:-739.4,y:86.5},0).wait(1).to({x:-729.4,y:85.8},0).wait(1).to({x:-719.4,y:85.2},0).wait(1).to({x:-709.3,y:84.5},0).wait(1).to({x:-699.3,y:83.8},0).wait(1).to({x:-689.2,y:83.1},0).wait(1).to({x:-679.2,y:82.4},0).wait(1).to({x:-669.1,y:81.7},0).wait(1).to({x:-659.1,y:81},0).wait(1).to({x:-649.1,y:80.3},0).wait(1).to({x:-639,y:79.6},0).wait(1).to({x:-629,y:78.9},0).wait(1).to({x:-618.9,y:78.2},0).wait(1).to({x:-608.9,y:77.5},0).wait(1).to({x:-598.9,y:76.8},0).wait(1).to({x:-588.8,y:76.1},0).wait(1).to({x:-578.8,y:75.4},0).wait(1).to({x:-568.7,y:74.7},0).wait(1).to({x:-558.7,y:74.1},0).wait(1).to({x:-548.6,y:73.4},0).wait(1).to({x:-538.6,y:72.7},0).wait(1).to({x:-528.6,y:72},0).wait(1).to({x:-518.5,y:71.3},0).wait(1).to({x:-508.5,y:70.6},0).wait(1).to({x:-498.4,y:69.9},0).wait(1).to({x:-488.4,y:69.2},0).wait(1).to({x:-478.3,y:68.5},0).wait(1).to({x:-468.3,y:67.8},0).wait(1).to({x:-458.3,y:67.1},0).wait(1).to({x:-448.2,y:66.4},0).wait(1).to({x:-438.2,y:65.7},0).wait(1).to({x:-428.1,y:65},0).wait(1).to({x:-418.1,y:64.3},0).wait(1).to({x:-408,y:63.7},0).wait(1).to({x:-398,y:63},0).wait(1).to({x:-388,y:62.3},0).wait(1).to({x:-377.9,y:61.6},0).wait(1).to({x:-367.9,y:60.9},0).wait(1).to({x:-357.8,y:60.2},0).wait(1).to({x:-347.8,y:59.5},0).wait(1).to({x:-337.7,y:58.8},0).wait(1).to({x:-327.7,y:58.1},0).wait(1).to({x:-317.7,y:57.4},0).wait(1).to({x:-307.6,y:56.7},0).wait(1).to({x:-297.6,y:56},0).wait(1).to({x:-287.5,y:55.3},0).wait(1).to({x:-277.5,y:54.6},0).wait(1).to({x:-267.4,y:53.9},0).wait(1).to({x:-257.4,y:53.3},0).wait(1).to({x:-247.4,y:52.6},0).wait(1).to({x:-237.3,y:51.9},0).wait(1).to({x:-227.3,y:51.2},0).wait(1).to({x:-217.2,y:50.5},0).wait(1).to({x:-207.2,y:49.8},0).wait(1).to({x:-197.1,y:49.1},0).wait(1).to({x:-187.1,y:48.4},0).wait(1).to({x:-177.1,y:47.7},0).wait(1).to({x:-167,y:47},0).wait(1).to({x:-157,y:46.3},0).wait(1).to({x:-146.9,y:45.6},0).wait(1).to({x:-136.9,y:44.9},0).wait(1).to({x:-126.8,y:44.2},0).wait(1).to({x:-116.8,y:43.5},0).wait(1).to({x:-106.8,y:42.9},0).wait(1).to({x:-96.7,y:42.2},0).wait(1).to({x:-86.7,y:41.5},0).wait(1).to({x:-76.6,y:40.8},0).wait(1).to({x:-66.6,y:40.1},0).wait(1).to({x:-56.6,y:39.4},0).wait(1).to({x:-46.5,y:38.7},0).wait(1).to({x:-36.5,y:38},0).wait(1).to({x:-26.4,y:37.3},0).wait(1).to({x:-16.4,y:36.6},0).wait(1).to({x:-6.3,y:35.9},0).wait(1).to({x:3.7,y:35.2},0).wait(1).to({x:13.7,y:34.5},0).wait(1).to({x:23.8,y:33.8},0).wait(1).to({x:33.8,y:33.1},0).wait(1).to({x:43.9,y:32.4},0).wait(1).to({x:53.9,y:31.8},0).wait(1).to({x:64,y:31.1},0).wait(1).to({x:74,y:30.4},0).wait(1).to({x:84,y:29.7},0).wait(1).to({x:94.1,y:29},0).wait(1).to({x:104.1,y:28.3},0).wait(1).to({x:114.2,y:27.6},0).wait(1).to({x:124.2,y:26.9},0).wait(1).to({x:134.3,y:26.2},0).wait(1).to({x:144.3,y:25.5},0).wait(1).to({x:154.3,y:24.8},0).wait(1).to({x:164.4,y:24.1},0).wait(1).to({x:174.4,y:23.4},0).wait(1).to({x:184.5,y:22.7},0).wait(1).to({x:194.5,y:22},0).wait(1).to({x:204.6,y:21.4},0).wait(1).to({x:214.6,y:20.7},0).wait(1).to({x:224.6,y:20},0).wait(1).to({x:234.7,y:19.3},0).wait(1).to({x:244.7,y:18.6},0).wait(1).to({x:254.8,y:17.9},0).wait(1).to({x:264.8,y:17.2},0).wait(1).to({x:274.9,y:16.5},0).wait(1).to({x:284.9,y:15.8},0).wait(1).to({x:294.9,y:15.1},0).wait(1).to({x:305,y:14.4},0).wait(1).to({x:315,y:13.7},0).wait(1).to({x:325.1,y:13},0).wait(1).to({x:335.1,y:12.3},0).wait(1).to({x:345.2,y:11.6},0).wait(1).to({x:355.2,y:11},0).wait(1).to({x:365.2,y:10.3},0).wait(1).to({x:375.3,y:9.6},0).wait(1).to({x:385.3,y:8.9},0).wait(1).to({x:395.4,y:8.2},0).wait(1).to({x:405.4,y:7.5},0).wait(1).to({x:415.5,y:6.8},0).wait(1).to({x:425.5,y:6.1},0).wait(1).to({x:435.5,y:5.4},0).wait(1).to({x:445.6,y:4.7},0).wait(1).to({x:455.6,y:4},0).wait(1).to({x:465.7,y:3.3},0).wait(1).to({x:475.7,y:2.6},0).wait(1).to({x:485.7,y:1.9},0).wait(1).to({x:495.8,y:1.2},0).wait(1).to({x:505.8,y:0.6},0).wait(1).to({x:515.9,y:-0.1},0).wait(1).to({x:525.9,y:-0.8},0).wait(1).to({x:536,y:-1.5},0).wait(1).to({x:546,y:-2.2},0).wait(1).to({x:556,y:-2.9},0).wait(1).to({x:566.1,y:-3.6},0).wait(1).to({x:576.1,y:-4.3},0).wait(1).to({x:586.2,y:-5},0).wait(1).to({x:596.2,y:-5.7},0).wait(1).to({x:606.3,y:-6.4},0).wait(1).to({x:616.3,y:-7.1},0).wait(1).to({x:626.3,y:-7.8},0).wait(1).to({x:636.4,y:-8.5},0).wait(1).to({x:646.4,y:-9.2},0).wait(1).to({x:656.5,y:-9.9},0).wait(1).to({x:666.5,y:-10.5},0).wait(1).to({x:676.6,y:-11.2},0).wait(1).to({x:686.6,y:-11.9},0).wait(1).to({x:696.6,y:-12.6},0).wait(1).to({x:706.7,y:-13.3},0).wait(1).to({x:716.7,y:-14},0).wait(1).to({x:726.8,y:-14.7},0).wait(1).to({x:736.8,y:-15.4},0).wait(1).to({x:746.9,y:-16.1},0).wait(1).to({x:756.9,y:-16.8},0).wait(1).to({x:766.9,y:-17.5},0).wait(1).to({x:777,y:-18.2},0).wait(1).to({x:787,y:-18.9},0).wait(1).to({x:797.1,y:-19.6},0).wait(1).to({x:807.1,y:-20.3},0).wait(1).to({x:817.2,y:-20.9},0).wait(1).to({x:827.2,y:-21.6},0).wait(1).to({x:837.2,y:-22.3},0).wait(1).to({x:847.3,y:-23},0).wait(1).to({x:857.3,y:-23.7},0).wait(1).to({x:867.4,y:-24.4},0).wait(1).to({x:877.4,y:-25.1},0).wait(1).to({x:887.5,y:-25.8},0).wait(1).to({x:897.5,y:-26.5},0).wait(1).to({x:907.5,y:-27.2},0).wait(1).to({x:917.6,y:-27.9},0).wait(1).to({x:927.6,y:-28.6},0).wait(1).to({x:937.7,y:-29.3},0).wait(1).to({x:947.7,y:-30},0).wait(1).to({x:957.8,y:-30.7},0).wait(1).to({x:967.8,y:-31.3},0).wait(1).to({x:977.8,y:-32},0).wait(1).to({x:987.9,y:-32.7},0).wait(1).to({x:997.9,y:-33.4},0).wait(1).to({x:1008,y:-34.1},0).wait(1).to({x:1018,y:-34.8},0).wait(1).to({x:1028,y:-35.5},0).wait(1).to({x:1038.1,y:-36.2},0).wait(1).to({x:1048.1,y:-36.9},0).wait(1).to({x:1058.2,y:-37.6},0).wait(1).to({x:1068.2,y:-38.3},0).wait(1).to({x:1078.3,y:-39},0).wait(1).to({x:1088.3,y:-39.7},0).wait(1).to({x:1098.3,y:-40.4},0).wait(1).to({x:1108.4,y:-41.1},0).wait(1).to({x:1118.4,y:-41.8},0).wait(1).to({x:1128.5,y:-42.4},0).wait(1).to({x:1138.5,y:-43.1},0).wait(1).to({x:1148.6,y:-43.8},0).wait(1).to({x:1158.6,y:-44.5},0).wait(1).to({x:1168.6,y:-45.2},0).wait(1).to({x:1178.7,y:-45.9},0).wait(1).to({x:1188.7,y:-46.6},0).wait(1).to({x:1198.8,y:-47.3},0).wait(1).to({x:1208.8,y:-48},0).wait(1).to({x:1218.9,y:-48.7},0).wait(1).to({x:1228.9,y:-49.4},0).wait(1).to({x:1238.9,y:-50.1},0).wait(1).to({x:1249,y:-50.8},0).wait(1).to({x:1259,y:-51.5},0).wait(1).to({x:1269.1,y:-52.2},0).wait(1).to({x:1279.1,y:-52.8},0).wait(1).to({x:1289.2,y:-53.5},0).wait(1).to({x:1299.2,y:-54.2},0).wait(1).to({x:1309.2,y:-54.9},0).wait(1).to({x:1319.3,y:-55.6},0).wait(1).to({x:1329.3,y:-56.3},0).wait(1).to({x:1339.4,y:-57},0).wait(1).to({x:1349.4,y:-57.7},0).wait(1).to({x:1359.5,y:-58.4},0).wait(1).to({x:1369.5,y:-59.1},0).wait(1).to({x:1379.5,y:-59.8},0).wait(1).to({x:1389.6,y:-60.5},0).wait(1).to({x:1399.6,y:-61.2},0).wait(1).to({x:1409.7,y:-61.9},0).wait(1).to({x:1419.7,y:-62.6},0).wait(1).to({x:1429.8,y:-63.2},0).wait(1).to({x:1439.8,y:-63.9},0).wait(1).to({x:1449.8,y:-64.6},0).wait(1).to({x:1459.9,y:-65.3},0).wait(1).to({x:1469.9,y:-66},0).wait(1).to({x:1480,y:-66.7},0).wait(1).to({x:1490,y:-67.4},0).wait(1).to({x:1500,y:-68.1},0).wait(1).to({x:1510.1,y:-68.8},0).wait(1).to({x:1520.1,y:-69.5},0).wait(1).to({x:1530.2,y:-70.2},0).wait(1).to({x:1540.2,y:-70.9},0).wait(1).to({x:1550.3,y:-71.6},0).wait(1).to({x:1560.3,y:-72.3},0).wait(1).to({x:1570.3,y:-73},0).wait(1).to({x:1580.4,y:-73.6},0).wait(1).to({x:1590.4,y:-74.3},0).wait(1).to({x:1600.5,y:-75},0).wait(1).to({x:1610.5,y:-75.7},0).wait(1).to({x:1620.6,y:-76.4},0).wait(1).to({x:1630.6,y:-77.1},0).wait(1).to({x:1640.6,y:-77.8},0).wait(1).to({x:1650.7,y:-78.5},0).wait(1).to({x:1660.7,y:-79.2},0).wait(1).to({x:1670.8,y:-79.9},0).wait(1).to({x:1680.8,y:-80.6},0).wait(1).to({x:1690.9,y:-81.3},0).wait(1).to({x:1700.9,y:-82},0).wait(1).to({x:1710.9,y:-82.7},0).wait(1).to({x:1721,y:-83.4},0).wait(1).to({x:1731,y:-84.1},0).wait(1).to({x:1741.1,y:-84.7},0).wait(1).to({x:1751.1,y:-85.4},0).wait(1).to({x:1761.1,y:-86.1},0).wait(1).to({x:1771.1,y:-86.8},0).wait(1).to({x:1781.2,y:-87.5},0).wait(1).to({x:1791.2,y:-88.2},0).wait(1).to({x:1801.3,y:-88.9},0).wait(1).to({x:1811.3,y:-89.6},0).wait(1).to({x:1821.4,y:-90.3},0).wait(1).to({x:1831.4,y:-91},0).wait(1).to({x:1841.4,y:-91.7},0).wait(1).to({x:1851.5,y:-92.4},0).wait(1).to({x:1861.5,y:-93.1},0).wait(1).to({x:1871.6,y:-93.8},0).wait(1).to({x:1881.6,y:-94.5},0).wait(1).to({x:1891.7,y:-95.1},0).wait(1).to({x:1901.7,y:-95.8},0).wait(1).to({x:1911.7,y:-96.5},0).wait(1).to({x:1921.8,y:-97.2},0).wait(1).to({x:1931.8,y:-97.9},0).wait(1).to({x:1941.9,y:-98.6},0).wait(1).to({x:1951.9,y:-99.3},0).wait(1).to({x:1962,y:-100},0).wait(1).to({x:1972,y:-100.7},0).wait(1).to({x:1982,y:-101.4},0).wait(1).to({x:1992.1,y:-102.1},0).wait(1).to({x:2002.1,y:-102.8},0).wait(1).to({x:2012.2,y:-103.5},0).wait(1).to({x:2022.2,y:-104.2},0).wait(1).to({x:2032.3,y:-104.9},0).wait(1).to({x:2042.3,y:-105.5},0).wait(1).to({x:2052.3,y:-106.2},0).wait(1).to({x:2062.4,y:-106.9},0).wait(1).to({x:2072.4,y:-107.6},0).wait(1).to({x:2082.5,y:-108.3},0).wait(1).to({x:2092.5,y:-109},0).wait(1).to({x:2102.6,y:-109.7},0).wait(1).to({x:2112.6,y:-110.4},0).wait(1).to({x:2122.6,y:-111.1},0).wait(1).to({x:2132.7,y:-111.8},0).wait(1).to({x:2142.7,y:-112.5},0).wait(1).to({x:2152.8,y:-113.2},0).wait(1).to({x:2162.8,y:-113.9},0).wait(1).to({x:2172.9,y:-114.6},0).wait(1).to({x:2182.9,y:-115.3},0).wait(1).to({x:2192.9,y:-116},0).wait(1).to({x:2203,y:-116.6},0).wait(1).to({x:2213,y:-117.3},0).wait(1).to({x:2223.1,y:-118},0).wait(1).to({x:2233.1,y:-118.7},0).wait(1).to({x:2243.2,y:-119.4},0).wait(1).to({x:2253.2,y:-120.1},0).wait(1).to({x:2263.2,y:-120.8},0).wait(1).to({x:2273.3,y:-121.5},0).wait(1).to({x:2283.3,y:-122.2},0).wait(1).to({x:2293.4,y:-122.9},0).wait(1).to({x:2303.4,y:-123.6},0).wait(1).to({x:2313.4,y:-124.3},0).wait(1).to({x:2323.5,y:-125},0).wait(1).to({x:2333.5,y:-125.7},0).wait(1).to({x:2343.6,y:-126.4},0).wait(1).to({x:2353.6,y:-127},0).wait(1).to({x:2363.7,y:-127.7},0).wait(1).to({x:2373.7,y:-128.4},0).wait(1).to({x:2383.7,y:-129.1},0).wait(1).to({x:2393.8,y:-129.8},0).wait(1).to({x:2403.8,y:-130.5},0).wait(1).to({x:2413.9,y:-131.2},0).wait(1).to({x:2423.9,y:-131.9},0).wait(1).to({x:2434,y:-132.6},0).wait(1).to({x:2444,y:-133.3},0).wait(1).to({x:2454,y:-134},0).wait(1).to({x:2464.1,y:-134.7},0).wait(1).to({x:2474.1,y:-135.4},0).wait(1).to({x:2484.2,y:-136.1},0).wait(1).to({x:2494.2,y:-136.8},0).wait(1).to({x:2504.3,y:-137.4},0).wait(1).to({x:2514.3,y:-138.1},0).wait(1).to({x:2524.3,y:-138.8},0).wait(1).to({x:2534.4,y:-139.5},0).wait(1).to({x:2544.4,y:-140.2},0).wait(1).to({x:2554.5,y:-140.9},0).wait(1).to({x:2564.5,y:-141.6},0).wait(1).to({x:2574.6,y:-142.3},0).wait(1).to({x:2584.6,y:-143},0).wait(1).to({x:2594.6,y:-143.7},0).wait(1).to({x:2604.7,y:-144.4},0).wait(1).to({x:2614.7,y:-145.1},0).wait(1).to({x:2624.8,y:-145.8},0).wait(1).to({x:2634.8,y:-146.5},0).wait(1).to({x:2644.9,y:-147.2},0).wait(1).to({x:2654.9,y:-147.8},0).wait(1).to({x:2664.9,y:-148.5},0).wait(1).to({x:2675,y:-149.2},0).wait(1).to({x:2685,y:-149.9},0).wait(1).to({x:2695.1,y:-150.6},0).wait(1).to({x:2705.1,y:-151.3},0).wait(1).to({x:2715.2,y:-152},0).wait(1).to({x:2725.2,y:-152.7},0).wait(1).to({x:2735.2,y:-153.4},0).wait(1).to({x:2745.3,y:-154.1},0).wait(1).to({x:2755.3,y:-154.8},0).wait(1).to({x:2765.4,y:-155.5},0).wait(1).to({x:2775.4,y:-156.2},0).wait(1).to({x:2785.5,y:-156.9},0).wait(1).to({x:2795.5,y:-157.6},0).wait(1).to({x:2805.5,y:-158.3},0).wait(1).to({x:2815.6,y:-158.9},0).wait(1).to({x:2825.6,y:-159.6},0).wait(1).to({x:2835.7,y:-160.3},0).wait(1).to({x:2845.7,y:-161},0).wait(1).to({x:2855.7,y:-161.7},0).wait(1).to({x:2865.8,y:-162.4},0).wait(1).to({x:2875.8,y:-163.1},0).wait(1).to({x:2885.9,y:-163.8},0).wait(1).to({x:2895.9,y:-164.5},0).wait(1).to({x:2906,y:-165.2},0).wait(1).to({x:2916,y:-165.9},0).wait(1).to({x:2926,y:-166.6},0).wait(1).to({x:2936.1,y:-167.3},0).wait(1).to({x:2946.1,y:-168},0).wait(1).to({x:2956.2,y:-168.7},0).wait(1).to({x:2966.2,y:-169.3},0).wait(1).to({x:2976.3,y:-170},0).wait(1).to({x:2986.3,y:-170.7},0).wait(1).to({x:2996.3,y:-171.4},0).wait(1).to({x:3006.4,y:-172.1},0).wait(1).to({x:3016.4,y:-172.8},0).wait(1).to({x:3026.5,y:-173.5},0).wait(1).to({x:3036.5,y:-174.2},0).wait(1).to({x:3046.6,y:-174.9},0).wait(1).to({x:3056.6,y:-175.6},0).wait(1).to({x:3066.6,y:-176.3},0).wait(1).to({x:3076.7,y:-177},0).wait(1).to({x:3086.7,y:-177.7},0).wait(1).to({x:3096.8,y:-178.4},0).wait(1).to({x:3106.8,y:-179.1},0).wait(1).to({x:3116.9,y:-179.7},0).wait(1).to({x:3126.9,y:-180.4},0).wait(1).to({x:3136.9,y:-181.1},0).wait(1).to({x:3147,y:-181.8},0).wait(1).to({x:3157,y:-182.5},0).wait(1).to({x:3167.1,y:-183.2},0).wait(1).to({x:3177.1,y:-183.9},0).wait(1).to({x:3187.2,y:-184.6},0).wait(1).to({x:3197.2,y:-185.3},0).wait(1).to({x:3207.2,y:-186},0).wait(1).to({x:3217.3,y:-186.7},0).wait(1).to({x:3227.3,y:-187.4},0).wait(1).to({x:3237.4,y:-188.1},0).wait(1).to({x:3247.4,y:-188.8},0).wait(1).to({x:3257.5,y:-189.5},0).wait(1).to({x:3267.5,y:-190.1},0).wait(1).to({x:3277.5,y:-190.8},0).wait(1).to({x:3287.6,y:-191.5},0).wait(1).to({x:3297.6,y:-192.2},0).wait(1).to({x:3307.7,y:-192.9},0).wait(1).to({x:3317.7,y:-193.6},0).wait(1).to({x:3327.8,y:-194.3},0).wait(1).to({x:3337.8,y:-195},0).wait(1).to({x:3347.8,y:-195.7},0).wait(1).to({x:3357.9,y:-196.4},0).wait(1).to({x:3367.9,y:-197.1},0).wait(1).to({x:3378,y:-197.8},0).wait(1).to({x:3388,y:-198.5},0).wait(1).to({x:3398,y:-199.2},0).wait(1).to({x:3408.1,y:-199.9},0).wait(1).to({x:3418.1,y:-200.6},0).wait(1).to({x:3428.2,y:-201.2},0).wait(1).to({x:3438.2,y:-201.9},0).wait(1).to({x:3448.3,y:-202.6},0).wait(1).to({x:3458.3,y:-203.3},0).wait(1).to({x:3468.3,y:-204},0).wait(1).to({x:3478.4,y:-204.7},0).wait(1).to({x:3488.4,y:-205.4},0).wait(1).to({x:3498.5,y:-206.1},0).wait(1).to({x:3508.5,y:-206.8},0).wait(1).to({x:3518.6,y:-207.5},0).wait(1).to({x:3528.6,y:-208.2},0).wait(1).to({x:3538.6,y:-208.9},0).wait(1).to({x:3548.7,y:-209.6},0).wait(1).to({x:3558.7,y:-210.3},0).wait(1).to({x:3568.8,y:-211},0).wait(1).to({x:3578.8,y:-211.6},0).wait(1).to({x:3588.9,y:-212.3},0).wait(1).to({x:3598.9,y:-213},0).wait(1));

	// bluesky
	this.instance_20 = new lib.viewsky();
	this.instance_20.parent = this;
	this.instance_20.setTransform(610,-225,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(500));

	// floor
	this.instance_21 = new lib.wood();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-5,729,1.885,1.792);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2212.7,32.9,5098.7,1658.9);
p.frameBounds = [rect, new cjs.Rectangle(-2202.7,32.3,5088.7,1659.5), new cjs.Rectangle(-2192.7,31.6,5078.7,1660.2), new cjs.Rectangle(-2182.6,30.9,5068.6,1660.9), new cjs.Rectangle(-2172.6,30.2,5058.6,1661.6), new cjs.Rectangle(-2162.5,29.5,5048.5,1662.3), new cjs.Rectangle(-2152.5,28.8,5038.5,1663), new cjs.Rectangle(-2142.5,28.1,5028.5,1663.7), new cjs.Rectangle(-2132.4,27.5,5018.4,1664.4), new cjs.Rectangle(-2122.4,26.8,5008.4,1665.1), new cjs.Rectangle(-2112.3,26,4998.3,1665.8), new cjs.Rectangle(-2102.3,25.4,4988.3,1666.5), new cjs.Rectangle(-2092.2,24.6,4978.2,1667.2), new cjs.Rectangle(-2082.2,24,4968.2,1667.9), new cjs.Rectangle(-2072.2,23.3,4958.2,1668.6), new cjs.Rectangle(-2062.1,22.5,4948.1,1669.3), new cjs.Rectangle(-2052.1,21.9,4938.1,1669.9), new cjs.Rectangle(-2042,21.2,4928,1670.6), new cjs.Rectangle(-2032,20.5,4918,1671.3), new cjs.Rectangle(-2021.9,19.8,4907.9,1672), new cjs.Rectangle(-2011.9,19.1,4897.9,1672.7), new cjs.Rectangle(-2001.9,18.4,4887.9,1673.4), new cjs.Rectangle(-1991.8,17.7,4877.8,1674.1), new cjs.Rectangle(-1981.8,17,4867.8,1674.8), new cjs.Rectangle(-1971.7,16.4,4857.7,1675.5), new cjs.Rectangle(-1961.7,15.6,4847.7,1676.2), new cjs.Rectangle(-1951.6,15,4837.6,1676.9), new cjs.Rectangle(-1941.6,14.3,4827.6,1677.6), new cjs.Rectangle(-1931.6,13.5,4817.6,1678.3), new cjs.Rectangle(-1921.5,12.9,4807.5,1679), new cjs.Rectangle(-1911.5,12.1,4797.5,1679.7), new cjs.Rectangle(-1901.4,11.5,4787.4,1680.3), new cjs.Rectangle(-1891.4,10.8,4777.4,1681), new cjs.Rectangle(-1881.3,10.1,4767.3,1681.7), new cjs.Rectangle(-1871.3,9.4,4757.3,1682.4), new cjs.Rectangle(-1861.3,8.7,4747.3,1683.1), new cjs.Rectangle(-1851.2,8,4737.2,1683.8), new cjs.Rectangle(-1841.2,7.3,4727.2,1684.5), new cjs.Rectangle(-1831.1,6.6,4717.1,1685.2), new cjs.Rectangle(-1821.1,6,4707.1,1685.9), new cjs.Rectangle(-1811,5.3,4697,1686.6), new cjs.Rectangle(-1801,4.5,4687,1687.3), new cjs.Rectangle(-1791,3.9,4677,1688), new cjs.Rectangle(-1780.9,3.1,4666.9,1688.7), new cjs.Rectangle(-1770.9,2.5,4656.9,1689.4), new cjs.Rectangle(-1760.8,1.8,4646.8,1690.1), new cjs.Rectangle(-1750.8,1.1,4636.8,1690.7), new cjs.Rectangle(-1740.7,0.4,4626.7,1691.4), new cjs.Rectangle(-1730.7,-0.3,4616.7,1692.1), new cjs.Rectangle(-1720.7,-1,4606.7,1692.8), new cjs.Rectangle(-1710.6,-1.7,4596.6,1693.5), new cjs.Rectangle(-1700.6,-2.4,4586.6,1694.2), new cjs.Rectangle(-1690.5,-3.1,4576.5,1694.9), new cjs.Rectangle(-1680.5,-3.8,4566.5,1695.6), new cjs.Rectangle(-1670.5,-4.5,4556.5,1696.3), new cjs.Rectangle(-1660.4,-5.1,4546.4,1697), new cjs.Rectangle(-1650.4,-5.9,4536.4,1697.7), new cjs.Rectangle(-1640.3,-6.5,4526.3,1698.4), new cjs.Rectangle(-1630.3,-7.2,4516.3,1699.1), new cjs.Rectangle(-1620.2,-8,4506.2,1699.8), new cjs.Rectangle(-1610.2,-8.6,4496.2,1700.5), new cjs.Rectangle(-1600.2,-9.4,4486.2,1701.2), new cjs.Rectangle(-1590.1,-10,4476.1,1701.8), new cjs.Rectangle(-1580.1,-10.7,4466.1,1702.5), new cjs.Rectangle(-1570.1,-11.4,4456,1703.2), new cjs.Rectangle(-1560,-12.1,4446,1703.9), new cjs.Rectangle(-1549.9,-12.8,4435.9,1704.6), new cjs.Rectangle(-1539.9,-13.5,4425.9,1705.3), new cjs.Rectangle(-1529.9,-14.2,4415.9,1706), new cjs.Rectangle(-1519.8,-14.9,4405.8,1706.7), new cjs.Rectangle(-1509.8,-15.5,4395.8,1707.4), new cjs.Rectangle(-1499.7,-16.2,4385.7,1708.1), new cjs.Rectangle(-1489.7,-17,4375.7,1708.8), new cjs.Rectangle(-1479.6,-17.6,4365.6,1709.5), new cjs.Rectangle(-1469.6,-18.4,4355.6,1710.2), new cjs.Rectangle(-1459.6,-19,4345.6,1710.9), new cjs.Rectangle(-1449.6,-19.7,4335.5,1711.6), new cjs.Rectangle(-1439.5,-20.4,4325.5,1712.2), new cjs.Rectangle(-1429.4,-21.1,4315.4,1712.9), new cjs.Rectangle(-1419.4,-21.8,4305.4,1713.6), new cjs.Rectangle(-1409.3,-22.5,4295.3,1714.3), new cjs.Rectangle(-1399.3,-23.2,4285.3,1715), new cjs.Rectangle(-1389.3,-23.9,4275.3,1715.7), new cjs.Rectangle(-1379.2,-24.6,4265.2,1716.4), new cjs.Rectangle(-1369.2,-25.3,4255.2,1717.1), new cjs.Rectangle(-1359.1,-26,4245.1,1717.8), new cjs.Rectangle(-1349.1,-26.6,4235.1,1718.5), new cjs.Rectangle(-1339.1,-27.4,4225,1719.2), new cjs.Rectangle(-1329.1,-28,4215,1719.9), new cjs.Rectangle(-1319,-28.7,4205,1720.6), new cjs.Rectangle(-1308.9,-29.5,4194.9,1721.3), new cjs.Rectangle(-1298.9,-30.1,4184.9,1722), new cjs.Rectangle(-1288.8,-30.8,4174.8,1722.6), new cjs.Rectangle(-1278.8,-31.5,4164.8,1723.3), new cjs.Rectangle(-1268.7,-32.2,4154.7,1724), new cjs.Rectangle(-1258.7,-32.9,4144.7,1724.7), new cjs.Rectangle(-1248.7,-33.6,4134.7,1725.4), new cjs.Rectangle(-1238.6,-34.3,4124.6,1726.1), new cjs.Rectangle(-1228.6,-35,4114.6,1726.8), new cjs.Rectangle(-1218.6,-35.7,4104.5,1727.5), new cjs.Rectangle(-1208.5,-36.4,4094.5,1728.2), new cjs.Rectangle(-1198.4,-37,4084.4,1728.9), new cjs.Rectangle(-1188.4,-37.7,4074.4,1729.6), new cjs.Rectangle(-1178.4,-38.5,4064.4,1730.3), new cjs.Rectangle(-1168.3,-39.1,4054.3,1731), new cjs.Rectangle(-1158.3,-39.9,4044.3,1731.7), new cjs.Rectangle(-1148.2,-40.5,4034.2,1732.4), new cjs.Rectangle(-1138.2,-41.2,4024.2,1733), new cjs.Rectangle(-1128.2,-41.9,4014.2,1733.7), new cjs.Rectangle(-1118.1,-42.6,4004.1,1734.4), new cjs.Rectangle(-1108.1,-43.3,3994.1,1735.1), new cjs.Rectangle(-1098.1,-44,3984,1735.8), new cjs.Rectangle(-1088,-44.7,3974,1736.5), new cjs.Rectangle(-1077.9,-45.4,3963.9,1737.2), new cjs.Rectangle(-1067.9,-46.1,3953.9,1737.9), new cjs.Rectangle(-1057.9,-46.7,3943.9,1738.6), new cjs.Rectangle(-1047.8,-47.5,3933.8,1739.3), new cjs.Rectangle(-1037.8,-48.1,3923.8,1740), new cjs.Rectangle(-1027.7,-48.9,3913.7,1740.7), new cjs.Rectangle(-1017.7,-49.5,3903.7,1741.4), new cjs.Rectangle(-1007.6,-50.2,3893.6,1742.1), new cjs.Rectangle(-997.6,-51,3883.6,1742.8), new cjs.Rectangle(-987.6,-51.6,3873.6,1743.5), new cjs.Rectangle(-977.5,-52.3,3863.5,1744.1), new cjs.Rectangle(-967.5,-53,3853.5,1744.8), new cjs.Rectangle(-957.4,-53.7,3843.4,1745.5), new cjs.Rectangle(-947.4,-54.4,3833.4,1746.2), new cjs.Rectangle(-937.3,-55.1,3823.3,1746.9), new cjs.Rectangle(-927.3,-55.8,3813.3,1747.6), new cjs.Rectangle(-917.3,-56.5,3803.3,1748.3), new cjs.Rectangle(-907.2,-57.1,3793.2,1749), new cjs.Rectangle(-897.2,-57.9,3783.2,1749.7), new cjs.Rectangle(-887.1,-58.5,3773.1,1750.4), new cjs.Rectangle(-877.1,-59.2,3763.1,1751.1), new cjs.Rectangle(-867,-60,3753,1751.8), new cjs.Rectangle(-857,-60.6,3743,1752.5), new cjs.Rectangle(-847,-61.4,3733,1753.2), new cjs.Rectangle(-836.9,-62,3722.9,1753.9), new cjs.Rectangle(-826.9,-62.7,3712.9,1754.5), new cjs.Rectangle(-816.8,-63.4,3702.8,1755.2), new cjs.Rectangle(-806.8,-64.1,3692.8,1755.9), new cjs.Rectangle(-796.7,-64.8,3682.7,1756.6), new cjs.Rectangle(-786.7,-65.5,3672.7,1757.3), new cjs.Rectangle(-776.7,-66.2,3662.7,1758), new cjs.Rectangle(-766.7,-66.9,3652.6,1758.7), new cjs.Rectangle(-756.6,-67.6,3642.6,1759.4), new cjs.Rectangle(-746.5,-68.2,3632.5,1760.1), new cjs.Rectangle(-736.5,-69,3622.5,1760.8), new cjs.Rectangle(-726.4,-69.6,3612.4,1761.5), new cjs.Rectangle(-716.4,-70.4,3602.4,1762.2), new cjs.Rectangle(-706.4,-71,3592.4,1762.9), new cjs.Rectangle(-696.3,-71.7,3582.3,1763.6), new cjs.Rectangle(-686.3,-72.5,3572.3,1764.3), new cjs.Rectangle(-676.2,-73.1,3562.2,1764.9), new cjs.Rectangle(-666.2,-73.8,3552.2,1765.6), new cjs.Rectangle(-656.2,-74.5,3542.1,1766.3), new cjs.Rectangle(-646.2,-75.2,3532.1,1767), new cjs.Rectangle(-636.1,-75.9,3522.1,1767.7), new cjs.Rectangle(-626,-76.6,3520.8,1768.4), new cjs.Rectangle(-616,-77.3,3520.8,1769.1), new cjs.Rectangle(-605.9,-78,3520.8,1769.8), new cjs.Rectangle(-595.9,-78.6,3520.8,1770.5), new cjs.Rectangle(-585.9,-79.4,3520.8,1771.2), new cjs.Rectangle(-575.8,-80,3520.8,1771.9), new cjs.Rectangle(-565.8,-80.7,3520.8,1772.6), new cjs.Rectangle(-555.7,-81.5,3520.8,1773.3), new cjs.Rectangle(-545.7,-82.1,3520.8,1774), new cjs.Rectangle(-535.7,-82.9,3520.8,1774.7), new cjs.Rectangle(-525.6,-83.5,3520.8,1775.4), new cjs.Rectangle(-515.6,-84.2,3520.8,1776), new cjs.Rectangle(-505.5,-84.9,3520.8,1776.7), new cjs.Rectangle(-495.5,-85.6,3520.8,1777.4), new cjs.Rectangle(-485.4,-86.3,3520.8,1778.1), new cjs.Rectangle(-475.4,-87,3520.8,1778.8), new cjs.Rectangle(-465.3,-87.7,3520.8,1779.5), new cjs.Rectangle(-455.3,-88.4,3520.8,1780.2), new cjs.Rectangle(-445.3,-89,3520.8,1780.9), new cjs.Rectangle(-435.2,-89.7,3520.8,1781.6), new cjs.Rectangle(-425.2,-90.5,3520.8,1782.3), new cjs.Rectangle(-415.2,-91.1,3520.8,1783), new cjs.Rectangle(-405.1,-91.9,3520.8,1783.7), new cjs.Rectangle(-395,-92.5,3520.8,1784.4), new cjs.Rectangle(-385,-93.2,3520.8,1785.1), new cjs.Rectangle(-375,-94,3520.8,1785.8), new cjs.Rectangle(-365,-94.6,3520.8,1786.4), new cjs.Rectangle(-354.9,-95.3,3520.8,1787.1), new cjs.Rectangle(-344.8,-96,3520.8,1787.8), new cjs.Rectangle(-334.8,-96.7,3520.8,1788.5), new cjs.Rectangle(-324.7,-97.4,3520.8,1789.2), new cjs.Rectangle(-314.7,-98.1,3520.8,1789.9), new cjs.Rectangle(-304.7,-98.8,3520.8,1790.6), new cjs.Rectangle(-294.7,-99.5,3520.8,1791.3), new cjs.Rectangle(-284.6,-100.1,3520.8,1792), new cjs.Rectangle(-274.5,-100.9,3520.8,1792.7), new cjs.Rectangle(-264.5,-101.5,3520.8,1793.4), new cjs.Rectangle(-254.5,-102.2,3520.8,1794.1), new cjs.Rectangle(-244.5,-103,3520.8,1794.8), new cjs.Rectangle(-234.4,-103.6,3520.8,1795.5), new cjs.Rectangle(-224.3,-104.4,3520.8,1796.2), new cjs.Rectangle(-214.3,-105,3520.8,1796.8), new cjs.Rectangle(-204.2,-105.7,3520.8,1797.5), new cjs.Rectangle(-194.2,-106.4,3520.8,1798.2), new cjs.Rectangle(-184.2,-107.1,3520.8,1798.9), new cjs.Rectangle(-174.2,-107.8,3520.8,1799.6), new cjs.Rectangle(-164.1,-108.5,3520.8,1800.3), new cjs.Rectangle(-154,-109.2,3520.8,1801), new cjs.Rectangle(-144,-109.9,3520.8,1801.7), new cjs.Rectangle(-134,-110.5,3520.8,1802.4), new cjs.Rectangle(-123.9,-111.2,3520.8,1803.1), new cjs.Rectangle(-113.8,-112,3520.8,1803.8), new cjs.Rectangle(-103.8,-112.6,3520.8,1804.5), new cjs.Rectangle(-93.8,-113.4,3520.8,1805.2), new cjs.Rectangle(-83.7,-114,3520.8,1805.9), new cjs.Rectangle(-73.7,-114.7,3520.8,1806.6), new cjs.Rectangle(-63.6,-115.4,3520.8,1807.2), new cjs.Rectangle(-53.6,-116.1,3520.8,1807.9), new cjs.Rectangle(-43.6,-116.8,3520.8,1808.6), new cjs.Rectangle(-33.5,-117.5,3520.8,1809.3), new cjs.Rectangle(-23.5,-118.2,3520.8,1810), new cjs.Rectangle(-13.5,-118.9,3520.8,1810.7), new cjs.Rectangle(-3.4,-119.6,3520.8,1811.4), new cjs.Rectangle(6.6,-120.3,3520.8,1812.1), new cjs.Rectangle(16.7,-121,3520.8,1812.8), new cjs.Rectangle(26.7,-121.6,3520.8,1813.5), new cjs.Rectangle(36.8,-122.4,3520.8,1814.2), new cjs.Rectangle(46.8,-123,3520.8,1814.9), new cjs.Rectangle(56.9,-123.7,3520.8,1815.6), new cjs.Rectangle(66.9,-124.5,3520.8,1816.3), new cjs.Rectangle(77,-125.1,3520.8,1817), new cjs.Rectangle(87,-125.9,3520.8,1817.7), new cjs.Rectangle(97,-126.5,3520.8,1818.3), new cjs.Rectangle(107,-127.2,3520.8,1819), new cjs.Rectangle(117.1,-127.9,3520.8,1819.7), new cjs.Rectangle(127.1,-128.6,3520.8,1820.4), new cjs.Rectangle(137.2,-129.3,3520.8,1821.1), new cjs.Rectangle(147.3,-130,3520.8,1821.8), new cjs.Rectangle(157.3,-130.7,3520.8,1822.5), new cjs.Rectangle(167.3,-131.4,3520.8,1823.2), new cjs.Rectangle(177.4,-132,3520.8,1823.9), new cjs.Rectangle(187.4,-132.7,3520.8,1824.6), new cjs.Rectangle(197.5,-133.5,3520.8,1825.3), new cjs.Rectangle(207.5,-134.1,3520.8,1826), new cjs.Rectangle(217.5,-134.9,3520.8,1826.7), new cjs.Rectangle(227.5,-135.5,3520.8,1827.4), new cjs.Rectangle(237.6,-136.2,3520.8,1828.1), new cjs.Rectangle(247.7,-136.9,3520.8,1828.7), new cjs.Rectangle(257.7,-137.6,3520.8,1829.4), new cjs.Rectangle(267.8,-138.3,3520.8,1830.1), new cjs.Rectangle(277.8,-139,3520.8,1830.8), new cjs.Rectangle(287.9,-139.7,3520.8,1831.5), new cjs.Rectangle(297.9,-140.4,3520.8,1832.2), new cjs.Rectangle(307.9,-141.1,3520.8,1832.9), new cjs.Rectangle(318,-141.8,3520.8,1833.6), new cjs.Rectangle(328,-142.5,3520.8,1834.3), new cjs.Rectangle(338,-143.1,3520.8,1835), new cjs.Rectangle(348.1,-143.9,3520.8,1835.7), new cjs.Rectangle(358.2,-144.5,3520.8,1836.4), new cjs.Rectangle(368.2,-145.2,3520.8,1837.1), new cjs.Rectangle(378.2,-146,3520.8,1837.8), new cjs.Rectangle(388.3,-146.6,3520.8,1838.5), new cjs.Rectangle(398.3,-147.3,3520.8,1839.1), new cjs.Rectangle(408.4,-148,3520.8,1839.8), new cjs.Rectangle(418.4,-148.7,3520.8,1840.5), new cjs.Rectangle(428.4,-149.4,3520.8,1841.2), new cjs.Rectangle(438.5,-150.1,3520.8,1841.9), new cjs.Rectangle(448.5,-150.8,3520.8,1842.6), new cjs.Rectangle(458.6,-151.5,3520.8,1843.3), new cjs.Rectangle(468.6,-152.2,3520.8,1844), new cjs.Rectangle(478.7,-152.9,3520.8,1844.7), new cjs.Rectangle(488.7,-153.5,3520.8,1845.4), new cjs.Rectangle(498.7,-154.2,3520.8,1846.1), new cjs.Rectangle(508.8,-155,3520.8,1846.8), new cjs.Rectangle(518.8,-155.6,3520.8,1847.5), new cjs.Rectangle(528.9,-156.4,3520.8,1848.2), new cjs.Rectangle(538.9,-157,3520.8,1848.9), new cjs.Rectangle(549,-157.7,3520.8,1849.6), new cjs.Rectangle(559,-158.4,3520.8,1850.2), new cjs.Rectangle(569,-159.1,3520.8,1850.9), new cjs.Rectangle(579.1,-159.8,3520.8,1851.6), new cjs.Rectangle(589.1,-160.5,3520.8,1852.3), new cjs.Rectangle(599.2,-161.2,3520.8,1853), new cjs.Rectangle(609.2,-161.9,3520.8,1853.7), new cjs.Rectangle(619.3,-162.6,3520.8,1854.4), new cjs.Rectangle(629.3,-163.2,3520.8,1855.1), new cjs.Rectangle(639.3,-164,3520.8,1855.8), new cjs.Rectangle(649.4,-164.6,3520.8,1856.5), new cjs.Rectangle(659.4,-165.4,3520.8,1857.2), new cjs.Rectangle(669.5,-166,3520.8,1857.9), new cjs.Rectangle(679.5,-166.7,3520.8,1858.6), new cjs.Rectangle(689.6,-167.5,3520.8,1859.3), new cjs.Rectangle(699.6,-168.1,3520.8,1860), new cjs.Rectangle(709.6,-168.8,3520.8,1860.6), new cjs.Rectangle(719.7,-169.5,3520.8,1861.3), new cjs.Rectangle(729.7,-170.2,3520.8,1862), new cjs.Rectangle(739.8,-170.9,3520.8,1862.7), new cjs.Rectangle(749.8,-171.6,3520.8,1863.4), new cjs.Rectangle(759.9,-172.3,3520.8,1864.1), new cjs.Rectangle(769.9,-173,3520.8,1864.8), new cjs.Rectangle(779.9,-173.6,3520.8,1865.5), new cjs.Rectangle(790,-174.4,3520.8,1866.2), new cjs.Rectangle(800,-175,3520.8,1866.9), new cjs.Rectangle(810.1,-175.7,3520.8,1867.6), new cjs.Rectangle(820.1,-176.5,3520.8,1868.3), new cjs.Rectangle(830.2,-177.1,3520.8,1869), new cjs.Rectangle(840.2,-177.9,3520.8,1869.7), new cjs.Rectangle(850.2,-178.5,3520.8,1870.4), new cjs.Rectangle(860.3,-179.2,3520.8,1871), new cjs.Rectangle(870.3,-179.9,3520.8,1871.7), new cjs.Rectangle(880.4,-180.6,3520.8,1872.4), new cjs.Rectangle(890.4,-181.3,3520.8,1873.1), new cjs.Rectangle(900.5,-182,3520.8,1873.8), new cjs.Rectangle(910.5,-182.7,3520.8,1874.5), new cjs.Rectangle(920.5,-183.4,3520.8,1875.2), new cjs.Rectangle(930.6,-184.1,3520.8,1875.9), new cjs.Rectangle(940.6,-184.7,3520.8,1876.6), new cjs.Rectangle(950.7,-185.5,3520.8,1877.3), new cjs.Rectangle(955,-186.1,3526.5,1878), new cjs.Rectangle(955,-186.9,3536.5,1878.7), new cjs.Rectangle(955,-187.5,3546.5,1879.4), new cjs.Rectangle(955,-188.2,3556.6,1880.1), new cjs.Rectangle(955,-189,3566.6,1880.8), new cjs.Rectangle(955,-189.6,3576.7,1881.4), new cjs.Rectangle(955,-190.3,3586.7,1882.1), new cjs.Rectangle(955,-191,3596.8,1882.8), new cjs.Rectangle(955,-191.7,3606.8,1883.5), new cjs.Rectangle(955,-192.4,3616.8,1884.2), new cjs.Rectangle(955,-193.1,3626.9,1884.9), new cjs.Rectangle(955,-193.8,3636.9,1885.6), new cjs.Rectangle(955,-194.5,3647,1886.3), new cjs.Rectangle(955,-195.1,3657,1887), new cjs.Rectangle(955,-195.9,3667.1,1887.7), new cjs.Rectangle(955,-196.5,3677.1,1888.4), new cjs.Rectangle(955,-197.2,3687.1,1889.1), new cjs.Rectangle(955,-198,3697.2,1889.8), new cjs.Rectangle(955,-198.6,3707.2,1890.5), new cjs.Rectangle(955,-199.4,3717.3,1891.2), new cjs.Rectangle(955,-200,3727.3,1891.9), new cjs.Rectangle(955,-200.7,3737.4,1892.5), new cjs.Rectangle(955,-201.4,3747.4,1893.2), new cjs.Rectangle(955,-202.1,3757.4,1893.9), new cjs.Rectangle(955,-202.8,3767.5,1894.6), new cjs.Rectangle(955,-203.5,3777.5,1895.3), new cjs.Rectangle(955,-204.2,3787.6,1896), new cjs.Rectangle(955,-204.9,3797.6,1896.7), new cjs.Rectangle(955,-205.5,3807.6,1897.4), new cjs.Rectangle(955,-206.2,3817.7,1898.1), new cjs.Rectangle(955,-207,3827.7,1898.8), new cjs.Rectangle(955,-207.6,3837.8,1899.5), new cjs.Rectangle(955,-208.3,3847.8,1900.2), new cjs.Rectangle(955,-209,3857.9,1900.9), new cjs.Rectangle(955,-209.7,3867.9,1901.6), new cjs.Rectangle(955,-210.5,3877.9,1902.3), new cjs.Rectangle(955,-211.1,3888,1902.9), new cjs.Rectangle(955,-211.8,3898,1903.6), new cjs.Rectangle(955,-212.5,3908.1,1904.3), new cjs.Rectangle(955,-213.2,3918.1,1905), new cjs.Rectangle(955,-213.9,3928.2,1905.7), new cjs.Rectangle(955,-214.6,3938.2,1906.4), new cjs.Rectangle(955,-215.3,3948.2,1907.1), new cjs.Rectangle(955,-216,3958.3,1907.8), new cjs.Rectangle(955,-216.6,3968.3,1908.5), new cjs.Rectangle(955,-217.3,3978.4,1909.2), new cjs.Rectangle(955,-218,3988.4,1909.9), new cjs.Rectangle(955,-218.7,3998.5,1910.6), new cjs.Rectangle(955,-219.5,4008.5,1911.3), new cjs.Rectangle(955,-220.1,4018.5,1912), new cjs.Rectangle(955,-220.8,4028.6,1912.7), new cjs.Rectangle(955,-221.5,4038.6,1913.3), new cjs.Rectangle(955,-222.2,4048.7,1914), new cjs.Rectangle(955,-222.9,4058.7,1914.7), new cjs.Rectangle(955,-223.6,4068.8,1915.4), new cjs.Rectangle(955,-224.3,4078.8,1916.1), new cjs.Rectangle(955,-225,4088.8,1916.8), new cjs.Rectangle(955,-225.7,4098.9,1917.5), new cjs.Rectangle(955,-226.4,4108.9,1918.2), new cjs.Rectangle(955,-227,4119,1918.9), new cjs.Rectangle(955,-227.7,4129,1919.6), new cjs.Rectangle(955,-228.5,4139.1,1920.3), new cjs.Rectangle(955,-229.1,4149.1,1921), new cjs.Rectangle(955,-229.8,4159.1,1921.7), new cjs.Rectangle(955,-230.5,4169.2,1922.4), new cjs.Rectangle(955,-231.2,4179.2,1923.1), new cjs.Rectangle(955,-231.9,4189.3,1923.7), new cjs.Rectangle(955,-232.6,4199.3,1924.4), new cjs.Rectangle(955,-233.3,4209.4,1925.1), new cjs.Rectangle(955,-234,4219.4,1925.8), new cjs.Rectangle(955,-234.7,4229.4,1926.5), new cjs.Rectangle(955,-235.4,4239.5,1927.2), new cjs.Rectangle(955,-236.1,4249.5,1927.9), new cjs.Rectangle(955,-236.8,4259.6,1928.6), new cjs.Rectangle(955,-237.5,4269.6,1929.3), new cjs.Rectangle(955,-238.1,4279.7,1930), new cjs.Rectangle(955,-238.8,4289.7,1930.7), new cjs.Rectangle(955,-239.5,4299.7,1931.4), new cjs.Rectangle(955,-240.2,4309.8,1932.1), new cjs.Rectangle(955,-241,4319.8,1932.8), new cjs.Rectangle(955,-241.6,4329.9,1933.5), new cjs.Rectangle(955,-242.3,4339.9,1934.2), new cjs.Rectangle(955,-243,4349.9,1934.8), new cjs.Rectangle(955,-243.7,4360,1935.5), new cjs.Rectangle(955,-244.4,4370,1936.2), new cjs.Rectangle(955,-245.1,4380.1,1936.9), new cjs.Rectangle(955,-245.8,4390.1,1937.6), new cjs.Rectangle(955,-246.5,4400.2,1938.3), new cjs.Rectangle(955,-247.2,4410.2,1939), new cjs.Rectangle(955,-247.8,4420.2,1939.7), new cjs.Rectangle(955,-248.5,4430.3,1940.4), new cjs.Rectangle(955,-249.2,4440.3,1941.1), new cjs.Rectangle(955,-250,4450.4,1941.8), new cjs.Rectangle(955,-250.6,4460.4,1942.5), new cjs.Rectangle(955,-251.3,4470.5,1943.2), new cjs.Rectangle(955,-252,4480.5,1943.9), new cjs.Rectangle(955,-252.7,4490.5,1944.6), new cjs.Rectangle(955,-253.4,4500.6,1945.2), new cjs.Rectangle(955,-254.1,4510.6,1945.9), new cjs.Rectangle(955,-254.8,4520.7,1946.6), new cjs.Rectangle(955,-255.5,4530.7,1947.3), new cjs.Rectangle(955,-256.2,4540.8,1948), new cjs.Rectangle(955,-256.9,4550.8,1948.7), new cjs.Rectangle(955,-257.6,4560.8,1949.4), new cjs.Rectangle(955,-258.3,4570.9,1950.1), new cjs.Rectangle(955,-259,4580.9,1950.8), new cjs.Rectangle(955,-259.6,4591,1951.5), new cjs.Rectangle(955,-260.3,4601,1952.2), new cjs.Rectangle(955,-261,4611.1,1952.9), new cjs.Rectangle(955,-261.7,4621.1,1953.6), new cjs.Rectangle(955,-262.5,4631.1,1954.3), new cjs.Rectangle(955,-263.1,4641.2,1955), new cjs.Rectangle(955,-263.8,4651.2,1955.6), new cjs.Rectangle(955,-264.5,4661.3,1956.3), new cjs.Rectangle(955,-265.2,4671.3,1957), new cjs.Rectangle(955,-265.9,4681.4,1957.7), new cjs.Rectangle(955,-266.6,4691.4,1958.4), new cjs.Rectangle(955,-267.3,4701.4,1959.1), new cjs.Rectangle(955,-268,4711.5,1959.8), new cjs.Rectangle(955,-268.7,4721.5,1960.5), new cjs.Rectangle(955,-269.3,4731.6,1961.2), new cjs.Rectangle(955,-270,4741.6,1961.9), new cjs.Rectangle(955,-270.7,4751.7,1962.6), new cjs.Rectangle(955,-271.5,4761.7,1963.3), new cjs.Rectangle(955,-272.1,4771.7,1964), new cjs.Rectangle(955,-272.8,4781.8,1964.7), new cjs.Rectangle(955,-273.5,4791.8,1965.4), new cjs.Rectangle(955,-274.2,4801.9,1966.1), new cjs.Rectangle(955,-274.9,4811.9,1966.7), new cjs.Rectangle(955,-275.6,4822,1967.4), new cjs.Rectangle(955,-276.3,4832,1968.1), new cjs.Rectangle(955,-277,4842,1968.8), new cjs.Rectangle(955,-277.7,4852.1,1969.5), new cjs.Rectangle(955,-278.4,4862.1,1970.2), new cjs.Rectangle(955,-279.1,4872.2,1970.9), new cjs.Rectangle(955,-279.7,4882.2,1971.6), new cjs.Rectangle(955,-280.5,4892.2,1972.3), new cjs.Rectangle(955,-281.1,4902.3,1973), new cjs.Rectangle(955,-281.8,4912.3,1973.7), new cjs.Rectangle(955,-282.5,4922.4,1974.4), new cjs.Rectangle(955,-283.2,4932.4,1975.1), new cjs.Rectangle(955,-284,4942.5,1975.8), new cjs.Rectangle(955,-284.6,4952.5,1976.5), new cjs.Rectangle(955,-285.3,4962.5,1977.1), new cjs.Rectangle(955,-286,4972.6,1977.8), new cjs.Rectangle(955,-286.7,4982.6,1978.5), new cjs.Rectangle(955,-287.4,4992.7,1979.2), new cjs.Rectangle(955,-288.1,5002.7,1979.9), new cjs.Rectangle(955,-288.8,5012.8,1980.6), new cjs.Rectangle(955,-289.5,5022.8,1981.3), new cjs.Rectangle(955,-290.1,5032.8,1982), new cjs.Rectangle(955,-290.8,5042.9,1982.7), new cjs.Rectangle(955,-291.5,5052.9,1983.4), new cjs.Rectangle(955,-292.2,5063,1984.1), new cjs.Rectangle(955,-293,5073,1984.8), new cjs.Rectangle(955,-293.6,5083.1,1985.5), new cjs.Rectangle(955,-294.3,5093.1,1986.2), new cjs.Rectangle(955,-295,5103.1,1986.9), new cjs.Rectangle(955,-295.7,5113.2,1987.5), new cjs.Rectangle(955,-296.4,5123.2,1988.2), new cjs.Rectangle(955,-297.1,5133.3,1988.9), new cjs.Rectangle(955,-297.8,5143.3,1989.6), new cjs.Rectangle(955,-298.5,5153.4,1990.3), new cjs.Rectangle(955,-299.2,5163.4,1991), new cjs.Rectangle(955,-299.9,5173.4,1991.7), new cjs.Rectangle(955,-300.6,5183.5,1992.4), new cjs.Rectangle(955,-301.2,5193.5,1993.1), new cjs.Rectangle(955,-302,5203.6,1993.8), new cjs.Rectangle(955,-302.6,5213.6,1994.5), new cjs.Rectangle(955,-303.3,5223.7,1995.2), new cjs.Rectangle(955,-304,5233.7,1995.9), new cjs.Rectangle(955,-304.7,5243.7,1996.6), new cjs.Rectangle(955,-305.5,5253.8,1997.3), new cjs.Rectangle(955,-306.1,5263.8,1997.9), new cjs.Rectangle(955,-306.8,5273.9,1998.6), new cjs.Rectangle(955,-307.5,5283.9,1999.3), new cjs.Rectangle(955,-308.2,5294,2000), new cjs.Rectangle(955,-308.9,5304,2000.7), new cjs.Rectangle(955,-309.6,5314,2001.4), new cjs.Rectangle(955,-310.3,5324.1,2002.1), new cjs.Rectangle(955,-311,5334.1,2002.8), new cjs.Rectangle(955,-311.6,5344.2,2003.5), new cjs.Rectangle(955,-312.3,5354.2,2004.2), new cjs.Rectangle(955,-313,5364.3,2004.9)];
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"aa_images/OfficeSpaceAnimation_atlas_.png", id:"OfficeSpaceAnimation_atlas_"},
		{src:"aa_images/OfficeSpaceAnimation_atlas_2.png", id:"OfficeSpaceAnimation_atlas_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;