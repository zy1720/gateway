define("ui/bubble",["jquery"],function(t){function e(e){e=t.extend({},h,e),this.opt=e;var i=this;this._config={},this._opened=!1,this._node=t(e.html),this._content=this._node.find(e.contentClass),this._close=this._node.find(e.closeClass),this.set(e),this._node.hide(),this._node.appendTo(n),this._node.on("click",e.closeClass,function(){i.hide()})}function i(t){return new i.Bubble(t)}var s=document,n=s.body,o='<div class="book-bubble"><b class="bubble-close">&times;</b><div class="bubble-content"></div></div>',h={html:o,contentClass:".bubble-content",closeClass:".bubble-close"};return e.prototype={constructor:e,set:function(e){return this.opt=t.extend(this.opt,e),e.target&&(this._config.target=e.target),e.offset&&(this._config.offset=e.offset),e.width&&this.setWidth(e.width),this.setContent(e.content||""),this},setWidth:function(t){return this._node.css("width",t),this},setContent:function(t){return this._content.html(t),this},setPosition:function(e,i){e=e||this._config.target,i=i||this._config.offset;var n=t(e),o=this._node.outerHeight(),h=n.offset().top-t(s).scrollTop()-(o-n.height())/2;return this._node.css({top:h+i.top,left:n.offset().left+i.left}),this},update:function(){return this.setPosition(this._config.target),this},isVisible:function(){return this._node.is(":visible")},show:function(){return this._opened?void this.setPosition():(this._opened=!0,this._node.show(),this.setPosition(),this)},hide:function(t){if(this._opened)return this._opened=!1,this._node.hide(),t&&this._content.empty(),this},toggle:function(t){var e=this._config.target,i=this._config.prevTarget;return e!==i?(this._config.prevTarget=e,this.show(),this):(this._opened?this.hide(t):this.show(),this)},destroy:function(){if(this._opened)return this._opened=!1,this._node.remove(),this}},i.Bubble=e,i});