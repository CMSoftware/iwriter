//>>built
define("dojox/mobile/SpinWheel",["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./_PickerBase","./SpinWheelSlot"],function(b,c,d,e){return b("dojox.mobile.SpinWheel",e,{baseClass:"mblSpinWheel",buildRendering:function(){this.inherited(arguments);d.create("div",{className:"mblSpinWheelBar"},this.domNode)},startup:function(){this._started||(this.centerPos=Math.round(this.domNode.offsetHeight/2),this.inherited(arguments))},resize:function(){this.centerPos=Math.round(this.domNode.offsetHeight/
2);c.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},addChild:function(a,b){this.inherited(arguments);this._started&&a.setInitialValue()}})});
//# sourceMappingURL=SpinWheel.js.map