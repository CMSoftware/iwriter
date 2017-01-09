//>>built
define("dojox/grid/enhanced/plugins/CellMerge","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html ../_Plugin ../../EnhancedGrid".split(" "),function(e,l,f,k,q,t){e=e("dojox.grid.enhanced.plugins.CellMerge",q,{name:"cellMerge",constructor:function(a,b){this.grid=a;this._records=[];this._merged={};b&&f.isObject(b)&&this._setupConfig(b.mergedCells);this._initEvents();this._mixinGrid()},mergeCells:function(a,b,d,h){(a=this._createRecord({row:a,start:b,end:d,major:h}))&&this._updateRows(a);
return a},unmergeCells:function(a){var b;a&&0<=(b=l.indexOf(this._records,a))&&(this._records.splice(b,1),this._updateRows(a))},getMergedCells:function(){var a=[],b;for(b in this._merged)a=a.concat(this._merged[b]);return a},getMergedCellsByRow:function(a){return this._merged[a]||[]},_setupConfig:function(a){l.forEach(a,this._createRecord,this)},_initEvents:function(){l.forEach(this.grid.views.views,function(a){this.connect(a,"onAfterRow",f.hitch(this,"_onAfterRow",a.index))},this)},_mixinGrid:function(){var a=
this.grid;a.mergeCells=f.hitch(this,"mergeCells");a.unmergeCells=f.hitch(this,"unmergeCells");a.getMergedCells=f.hitch(this,"getMergedCells");a.getMergedCellsByRow=f.hitch(this,"getMergedCellsByRow")},_getWidth:function(a){a=this.grid.layout.cells[a].getHeaderNode();return k.position(a).w},_onAfterRow:function(a,b,d){try{if(!(0>b)){var h=[],n,c,f=this._records.length,e=this.grid.layout.cells;for(n=0;n<f;++n){var g=this._records[n],r=this.grid._by_idx[b];if(g.view==a&&g.row(b,r&&r.item,this.grid.store)){var m=
{record:g,hiddenCells:[],totalWidth:0,majorNode:e[g.major].getNode(b),majorHeaderNode:e[g.major].getHeaderNode()};for(c=g.start;c<=g.end;++c){var q=this._getWidth(c,b);m.totalWidth+=q;c!=g.major&&m.hiddenCells.push(e[c].getNode(b))}if(1!=d.length||0<m.totalWidth){for(c=h.length-1;0<=c;--c){var p=h[c].record;(p.start>=g.start&&p.start<=g.end||p.end>=g.start&&p.end<=g.end)&&h.splice(c,1)}h.push(m)}}}this._merged[b]=[];l.forEach(h,function(a){l.forEach(a.hiddenCells,function(a){k.style(a,"display","none")});
var d=k.marginBox(a.majorHeaderNode).w-k.contentBox(a.majorHeaderNode).w,c=a.totalWidth;k.isWebKit||(c-=d);k.style(a.majorNode,"width",c+"px");a.majorNode.setAttribute("colspan",a.hiddenCells.length+1);this._merged[b].push({row:b,start:a.record.start,end:a.record.end,major:a.record.major,handle:a.record})},this)}}catch(v){console.warn("CellMerge._onAfterRow() error: ",b,v)}},_createRecord:function(a){if(this._isValid(a)){a={row:a.row,start:a.start,end:a.end,major:a.major};a.view=this.grid.layout.cells[a.start].view.index;
a.major="number"!=typeof a.major||isNaN(a.major)?a.start:a.major;if("number"==typeof a.row){var b=a.row;a.row=function(a){return a===b}}else if("string"==typeof a.row){var d=a.row;a.row=function(a,b,c){try{if(c&&b&&c.getFeatures()["dojo.data.api.Identity"])return c.getIdentity(b)==d}catch(u){console.error(u)}return!1}}if(f.isFunction(a.row))return this._records.push(a),a}return null},_isValid:function(a){var b=this.grid.layout.cells,d=b.length;return f.isObject(a)&&"row"in a&&"start"in a&&"end"in
a&&0<=a.start&&a.start<d&&a.end>a.start&&a.end<d&&b[a.start].view.index==b[a.end].view.index&&b[a.start].subrow==b[a.end].subrow&&!("number"==typeof a.major&&(a.major<a.start||a.major>a.end))},_updateRows:function(a){for(var b=null,d=0,f=this.grid.rowCount;d<f;++d){var e=this.grid._by_idx[d];e&&a.row(d,e&&e.item,this.grid.store)&&(this.grid.views.updateRow(d),null===b&&(b=d))}0<=b&&this.grid.scroller.rowHeightChanged(b)}});t.registerPlugin(e);return e});
//# sourceMappingURL=CellMerge.js.map