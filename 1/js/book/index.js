function trackEvent(o,e,t){_gaq.push(["_trackEvent",o,e,t])}!function(){var o=window.white_site_list||new RegExp(["^https?://([\\w]+\\.douban\\.com","|web[0-9]?\\.qq\\.com","|hao\\.qq\\.com","|(hao\\.)*360\\.cn","|so\\.com","|www\\.soso\\.com","|(www\\.)?growingio\\.com","|youku\\.movie-test\\.alphatown\\.com",")(\\:[\\d]+)?/"].join(""));self!==top&&document.referrer.search(o)===-1&&(top.location=self.location)}();var _gaq=_gaq||[];Do("ui/slide","ui/bubble","mod/ajax",function(){var o=Book.slide,e=Book.Bubble,t=$(".books-express .slide-dots"),n=$(".books-express"),i=n.find(".carousel");new o(i,{nav:t,nextBtn:n.find(".next"),prevBtn:n.find(".prev"),loop:!0}),new o($(".book_information .slide-block"),{nav:$(".book_information .slide-dots"),nextBtn:$(".information-next"),prevBtn:$(".information-prev"),loop:!0});$(".slide-dots").on("click","a",function(o){o.preventDefault()});var a=$("#book_rec");a.on("click",".book_x",function(){confirm("浣犵‘瀹氳"+this.title)&&a.load("/j/book/j_book_rec",{s:this.rel,ck:get_cookie("ck")})}),Douban.init_close_notice=function(o){$(o).click(function(){$("#bh_notice").hide(),$.get("/j/book/j_notice_x")})},$(document).on("click","[data-action]",function(o){var e=$(this),t=e.data("action"),n=Douban[t];$.isFunction(n)&&n.call(this,o,e)}),Book.debounce=function(o,e){var t,n;return function(){var i=this,a=arguments,r=function(){t=null,n=o.apply(i,a)};return clearTimeout(t),t=setTimeout(r,e),n}};var r=e({width:"300px"}),c={mouseover:"show",mouseout:"hide"};$(".ebook-area, .books-express").on("hover",".cover",Book.debounce(function(o){var e=o.currentTarget,t=$(this).parent().find(".more-meta").html(),n=c[o.type];r.set({offset:{top:0,left:118},target:e,content:t})[n]()},150)),$(".indent-paragraph").each(function(){var o,e=$(this),t=e.html().length,n=e.data("row"),i=e.width(),a=parseInt(e.css("font-size"),10),r=e.next(),c=a;r.length>0&&(c+=r.width()),o=parseInt(i/a,10)*(n-1)+parseInt((i-c)/a),t>o&&e.html(e.html().slice(0,o)+"...")})}),Do(function(){function o(){$(".link-hide").on("click",function(o){o.preventDefault();var e=$(this),t=e.data("target"),n=$("."+t),i=n.find(".sub-hd"),a=n.find(".sub-bd"),r=a.is(":visible")?"灞曞紑":"闅愯棌";i.toggleClass("minibar"),a.slideToggle(),e.text(r),Book.ajax.post("/j/book/toggle_interested_ebooks",function(o){o.r||alert("璇锋眰澶辫触锛岃绋嶅悗鍐嶈瘯"),e.show()}).error(function(o){alert("鍑虹幇浜嗗鎬殑閿欒:( 璇风◢鍚庡啀璇�")})})}$.ajax({type:"GET",url:"/j/home/ebooks",data:{user_id:window.user_id},success:function(e){$(".ebook-area").html($(e.result)),o()}}),$.ajax({type:"GET",url:"/j/home/review_recommend",data:{user_id:window.user_id},success:function(o){$("#reviews").html($(o.result))}}),$(".click-track").on("click",function(o){o.preventDefault();var e=$(this).data("name");moreurl(this,{from:e})})});