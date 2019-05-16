/*! Verify-v0.1.0 MIT License by 大熊*/


;(function($, window, document,undefined) {
    
    //定义Code的构造函数
    // var Code = function(ele, opt) {
    //     this.$element = ele,
    //     this.defaults = {
    //      type : 1,
    //      figure : 100,   //位数，仅在type=2时生效
    //      arith : 0,  //算法，支持加减乘，0为随机，仅在type=2时生效
    //      width : '200px',
          //   height : '60px',
          //   fontSize : '30px',
    //      codeLength : 6,
    //      btnId : 'check-btn',
    //      ready : function(){},
    //      success : function(){},
    //         error : function(){}
    //     },
    //     this.options = $.extend({}, this.defaults, opt)
    // };
    
    var _code_chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var _code_color1 = ['#fffff0', '#f0ffff', '#f0fff0', '#fff0f0'];
    var _code_color2 = ['#FF0033', '#006699', '#993366', '#FF9900', '#66CC66', '#FF33CC'];
    
 
    
    
    //定义Slide的构造函数
    var Slide = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
            
            type : 1,
            vOffset: 5,
            vSpace : 5,
            imgName : ['1.jpg', '2.jpg'],
            imgSize : {
                width: '400px',
                height: '200px',
            },
            blockSize : {
                width: '50px',
                height: '50px',
            },
            barSize : {
                width : '400px',
                height : '40px',
            },
            ready : function(){},
            success : function(){},
            error : function(){}
            
        },
        this.options = $.extend({}, this.defaults, opt)
    };
    
    
    //定义Slide的方法
    Slide.prototype = {
        
        //init: function() {
            //var _this = this;
            
            //加载页面
            // this.loadDom();
            // this.options.ready();
            
   //       this.$element[0].onselectstart = document.body.ondrag = function(){ 
            //  return false; 
            // };
            
            //按下
            // this.htmlDoms.move_block.on('touchstart', function(e) {
            //  _this.start(e);
            // });
            
            // this.htmlDoms.move_block.on('mousedown', function(e) {
            //  _this.start(e);
            // });
            
            // //拖动
         //    window.addEventListener("touchmove", function(e) {
         //     _this.move(e);
         //    });
         //    window.addEventListener("mousemove", function(e) {
         //     _this.move(e);
         //    });
            
            //鼠标松开
            // window.addEventListener("touchend", function() {
            //  _this.end();
            // });
            // window.addEventListener("mouseup", function() {
            //  _this.end();
            // });
            
            //刷新
            // _this.$element.find('.verify-refresh').on('click', function() {
            //  _this.refresh();
            // });
       // },
        
     
        
      
      
        //鼠标松开
       // end: function() {
            
            //var _this = this;
            
            //判断是否重合
            //if(this.status) {
                
                //if(this.options.type != 1) {      //图片滑动
                    
                    //var vOffset = parseInt(this.options.vOffset);
               //      if(parseInt(this.htmlDoms.gap.css('left')) >= (parseInt(this.htmlDoms.move_block.css('left')) - vOffset) && parseInt(this.htmlDoms.gap.css('left')) <= (parseInt(this.htmlDoms.move_block.css('left')) + vOffset)) {
               //       this.htmlDoms.move_block.css('background-color', '#5cb85c');
               //       this.htmlDoms.left_bar.css({'border-color': '#5cb85c', 'background-color': '#fff'});
               //       this.htmlDoms.icon.css('color', '#fff');
               //       this.htmlDoms.icon.removeClass('icon-right');
               //       this.htmlDoms.icon.addClass('icon-check');
               //       this.htmlDoms.refresh.hide();
               //       this.htmlDoms.move_block.unbind('mousedown touchstart');
               //       this.options.success();
               //      }else{
               //       this.htmlDoms.move_block.css('background-color', '#d9534f');
               //       this.htmlDoms.left_bar.css('border-color', '#d9534f');
               //       this.htmlDoms.icon.css('color', '#fff');
               //       this.htmlDoms.icon.removeClass('icon-right');
               //       this.htmlDoms.icon.addClass('icon-close');
                        
               //       setTimeout(function () { 
                        //  _this.htmlDoms.move_block.animate({'left':'0px'}, 'fast');
                        //  _this.htmlDoms.left_bar.animate({'width': '40px'}, 'fast');
                        //  _this.htmlDoms.left_bar.css({'border-color': '#ddd'});
                            
                        //  _this.htmlDoms.move_block.css('background-color', '#fff');
                        //  _this.htmlDoms.icon.css('color', '#000');
                        //  _this.htmlDoms.icon.removeClass('icon-close');
               //           _this.htmlDoms.icon.addClass('icon-right');
               //           _this.$element.find('.verify-msg:eq(0)').text('向右滑动完成验证');
                            
                        // }, 400);
                        
               //       this.options.error();
               //      }
                    
                //}else {       //普通滑动
                    
            //      if(parseInt(this.htmlDoms.move_block.css('left')) >= (parseInt(this.setSize.bar_width) - parseInt(this.options.barSize.height) - parseInt(this.options.vOffset))) {
            //          this.htmlDoms.move_block.css('background-color', '#5cb85c');
            //          this.htmlDoms.left_bar.css({'color': '#4cae4c', 'border-color': '#5cb85c', 'background-color': '#fff' });
            //          this.htmlDoms.icon.css('color', '#fff');
               //       this.htmlDoms.icon.removeClass('icon-right');
               //       this.htmlDoms.icon.addClass('icon-check');
               //       this.htmlDoms.refresh.hide();
               //       this.htmlDoms.move_block.unbind('mousedown');
               //       this.htmlDoms.move_block.unbind('touchstart');
            //          this.$element.find('.verify-msg:eq(1)').text('验证成功');
            //          this.options.success();
            //      }else {
                        
            //          this.htmlDoms.move_block.css('background-color', '#d9534f');
               //       this.htmlDoms.left_bar.css('border-color', '#d9534f');
               //       this.htmlDoms.icon.css('color', '#fff');
               //       this.htmlDoms.icon.removeClass('icon-right');
               //       this.htmlDoms.icon.addClass('icon-close');
                        
               //       setTimeout(function () { 
                        //  _this.htmlDoms.move_block.animate({'left':'0px'}, 'fast');
                        //  _this.htmlDoms.left_bar.animate({'width': '40px'}, 'fast');
                        //  _this.htmlDoms.left_bar.css({'border-color': '#ddd'});
                            
                        //  _this.htmlDoms.move_block.css('background-color', '#fff');
                        //  _this.htmlDoms.icon.css('color', '#000');
                        //  _this.htmlDoms.icon.removeClass('icon-close');
               //           _this.htmlDoms.icon.addClass('icon-right');
               //           _this.$element.find('.verify-msg:eq(0)').text('向右滑动解锁');
                            
                        // }, 400);
                        
               //       this.options.error();
            //      }
                //}
                
                //this.status = false;
            //}
        //},
        
        
        resetSize : function(obj) {
            var img_width,img_height,bar_width,bar_height;  //图片的宽度、高度，移动条的宽度、高度
            var parentWidth = obj.$element.parent().width() || $(window).width();
            var parentHeight = obj.$element.parent().height() || $(window).height();
            
            if(obj.options.imgSize.width.indexOf('%')!= -1){
                img_width = parseInt(obj.options.imgSize.width)/100 * parentWidth + 'px';
        　　}else {
                img_width = obj.options.imgSize.width;
            }
        
            if(obj.options.imgSize.height.indexOf('%')!= -1){
                img_height = parseInt(obj.options.imgSize.height)/100 * parentHeight + 'px';
        　　}else {
                img_height = obj.options.imgSize.height;
            }
        
            if(obj.options.barSize.width.indexOf('%')!= -1){
                bar_width = parseInt(obj.options.barSize.width)/100 * parentWidth + 'px';
        　　}else {
                bar_width = obj.options.barSize.width;
            }
        
            if(obj.options.barSize.height.indexOf('%')!= -1){
                bar_height = parseInt(obj.options.barSize.height)/100 * parentHeight + 'px';
        　　}else {
                bar_height = obj.options.barSize.height;
            }
        
            return {img_width : img_width, img_height : img_height, bar_width : bar_width, bar_height : bar_height};
        },
        
        //随机出生点位
        // randSet: function() {
        //  var rand1 = Math.floor(Math.random()*9+1);
        //  var rand2 = Math.floor(Math.random()*9+1);
        //  var top = rand1 * parseInt(this.setSize.img_height)/15 + parseInt(this.setSize.img_height) * 0.1;
        //  var left = rand2 * parseInt(this.setSize.img_width)/15 + parseInt(this.setSize.img_width) * 0.1;
            
        //  this.$element.find('.verify-img-panel').css('margin-bottom', this.options.vSpace + 'px');
        //  this.$element.find('.verify-gap').css({'top': top, 'left': left});
        //      this.$element.find('.verify-sub-block').css({'top':'-'+(parseInt(this.setSize.img_height)- top + this.options.vSpace + 2)+'px', 'background-image': 'url(verifys/'+this.options.imgName[this.img_rand]+')', 'background-size': this.setSize.img_width + ' '+ this.setSize.img_height,'background-position-y': '-'+top+ 'px', 'background-position-x': '-'+left+'px'});
        // },
        
        //刷新
        // refresh: function() {
        //  this.randSet();
        //  this.img_rand = Math.floor(Math.random() * this.options.imgName.length);            //随机的背景图片
        //     this.$element.find('.verify-img-panel').css({'background': 'url(verifys/'+this.options.imgName[this.img_rand]+')', 'background-size': this.setSize.img_width + ' '+ this.setSize.img_height});
        //     this.$element.find('.verify-sub-block').css({'background-image': 'url(verifys/'+this.options.imgName[this.img_rand]+')', 'background-size': this.setSize.img_width + ' '+ this.setSize.img_height});
        // },
        
        //获取left值
        //getLeft: function(node) {
            //var left = $(node).offset().left; 
//          var nowPos = node.offsetParent;     
//          
//          while(nowPos != null) {　　
//              left += $(nowPos).offset().left;　
//              nowPos = nowPos.offsetParent;　　
//          }
            //return left;
        //}
    };
    
    
    //定义Points的构造函数
    var Points = function(ele, opt) {
        this.$element = ele,
        this.defaults = {
            defaultNum : 4, //默认的文字数量
            checkNum : 3,   //校对的文字数量
            vSpace : 5, //间隔
            imgName : ['1.jpg', '2.jpg'],
            imgSize : {
                width: '400px',
                height: '200px',
            },
            barSize : {
                width : '400px',
                height : '40px',
            },
            ready : function(){},
            success : function(){},
            error : function(){}
        },
        this.options = $.extend({}, this.defaults, opt)
    };
    
    //定义Points的方法
    Points.prototype = {
        init : function() {
             
            var _this = this;
            
            //加载页面
            _this.loadDom();
             
            _this.refresh();
            _this.options.ready();
            
            this.$element[0].onselectstart = document.body.ondrag = function(){ 
                return false; 
            };
            
            //点击事件比对
            _this.$element.find('.verify-img-panel canvas').on('click', function(e) {
                
                _this.checkPosArr.push(_this.getMousePos(this, e));
                
                if(_this.num == _this.options.checkNum) {
                    
                    _this.num = _this.createPoint(_this.getMousePos(this, e));
                    setTimeout(function () { 
                        var flag = _this.comparePos(_this.fontPos, _this.checkPosArr);
                        
                        if(flag == false) { //验证失败
                            
                            _this.options.error();
                            _this.$element.find('.verify-bar-area').css({'color': '#d9534f', 'border-color': '#d9534f'});
                            _this.$element.find('.verify-msg').text('验证失败');
                            
                            setTimeout(function () { 
                                _this.$element.find('.verify-bar-area').css({'color': '#000','border-color': '#ddd'});
                                _this.refresh();
                            }, 400);
                            
                        }else { //验证成功
                            _this.$element.find('.verify-bar-area').css({'color': '#4cae4c', 'border-color': '#5cb85c'});
                            _this.$element.find('.verify-msg').text('验证成功');
                            _this.$element.find('.verify-refresh').hide();
                            _this.$element.find('.verify-img-panel').unbind('click');
                            _this.options.success();
                        }
                    }, 400);
                    
                }
                
                if(_this.num < _this.options.checkNum) {
                    _this.num = _this.createPoint(_this.getMousePos(this, e));
                }

            });
            
             //刷新
            _this.$element.find('.verify-refresh').on('click', function() {
                _this.refresh();
            });
            
        },
        
        
        
        //加载页面
        loadDom : function() {
              
            this.fontPos = [];  //选中的坐标信息
            this.checkPosArr = [];  //用户点击的坐标
            this.num = 1;   //点击的记数
            this.img_rand = Math.floor(Math.random() * this.options.imgName.length);            //随机的背景图片
        
            var panelHtml = '';
            var tmpHtml = '';
            
            this.setSize = Slide.prototype.resetSize(this); //重新设置宽度高度
            
            panelHtml += '<div class="verify-img-panel"><div  class="verify-refresh" style="z-index:9999"><i class="iconfont icon-refresh"></i></div><canvas width="'+this.setSize.img_width+'" height="'+this.setSize.img_height+'"></canvas></div><div class="verify-bar-area"><span  class="verify-msg"></span></div>';
            
            this.$element.append(panelHtml);
            
            
            this.htmlDoms = {
                img_panel : this.$element.find('.verify-img-panel'),
                bar_area : this.$element.find('.verify-bar-area'),
                msg : this.$element.find('.verify-msg'),
            };
           console.log(this.$element.find('.verify-img-panel'))
            this.htmlDoms.img_panel.css({'width': this.setSize.img_width, 'height': this.setSize.img_height, 'background-size' : this.setSize.img_width + ' '+ this.setSize.img_height, 'margin-bottom': this.options.vSpace + 'px'});
            this.htmlDoms.bar_area.css({'width': this.options.barSize.width, 'height': this.options.barSize.height, 'line-height':this.options.barSize.height});
            
        },
        
        //绘制合成的图片
        drawImg : function(obj, img) {
            //准备canvas环境 
            var canvas = this.$element.find('canvas')[0];
            //var canvas=document.getElementById("myCanvas");
            var ctx=canvas.getContext("2d");
            
            // 绘制图片
            ctx.drawImage(img,0,0, parseInt(this.setSize.img_width), parseInt(this.setSize.img_height));
            
            // 绘制水印
            var fontSizeArr = ['italic small-caps bold 20px microsoft yahei', 'small-caps normal 25px arial', '34px microsoft yahei'];
            var fontStr = '天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩体率宾归王';    //不重复的汉字
            
            
            var fontChars = [];
            
            var avg = Math.floor(parseInt(this.setSize.img_width)/(parseInt(this.options.defaultNum)+1));
            var tmp_index = '';
            var color2Num = Math.floor(Math.random() * 5);
            
            for(var i = 1; i <= this.options.defaultNum; i++) {
                
                fontChars[i-1] = this.getChars(fontStr, fontChars);
                
                tmp_index = Math.floor(Math.random()*3);
                ctx.font = fontSizeArr[tmp_index];
                ctx.fillStyle = _code_color2[color2Num];
                
                if(Math.floor(Math.random() * 2) == 1) {
                    var tmp_y = Math.floor(parseInt(this.setSize.img_height)/2) + tmp_index*20 + 20;
                }else {
                    var tmp_y = Math.floor(parseInt(this.setSize.img_height)/2) - tmp_index*20;
                }
                
                ctx.fillText(fontChars[i-1],avg * i, tmp_y);
                this.fontPos[i-1] = {'char': fontChars[i-1], 'x': avg * i, 'y': tmp_y};
                
            }
            
            for(var i = 0; i < (this.options.defaultNum-this.options.checkNum); i++) {
                this.shuffle(this.fontPos).pop();
            }
            
            var msgStr = '';
            for(var i = 0; i < this.fontPos.length; i++) {
                msgStr += this.fontPos[i].char + ',';
            }
            
            this.htmlDoms.msg.text('请顺序点击【' + msgStr.substring(0,msgStr.length-1) + '】');
            
            return this.fontPos;
        },
        
        //获取坐标
        getMousePos :function(obj, event) {
            var e = event || window.event;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.clientX - ($(obj).offset().left - $(window).scrollLeft());
            var y = e.clientY - ($(obj).offset().top - $(window).scrollTop());
            
            return {'x': x, 'y': y};
        },
        
        //递归去重
        getChars : function(fontStr, fontChars) {
            
            var tmp_rand = parseInt(Math.floor(Math.random() * fontStr.length));
            if(tmp_rand > 0) {
                tmp_rand = tmp_rand - 1;
            }
            
            tmp_char = fontStr.charAt(tmp_rand);
            if($.inArray(tmp_char, fontChars) == -1) {
                return tmp_char;
            }else {
                return Points.prototype.getChars(fontStr, fontChars);
            }
        },
        
        //洗牌数组
        shuffle : function(arr) {
            var m = arr.length, i;
            while (m) {
                i = (Math.random() * m--) >>> 0;
                [arr[m], arr[i]] = [arr[i], arr[m]]
            }
            return arr;
        },
        
        //创建坐标点
        createPoint : function (pos) {
            this.htmlDoms.img_panel.append('<div class="point-area" style="background-color:#1abd6c;color:#fff;z-index:9999;width:30px;height:30px;text-align:center;line-height:30px;border-radius: 50%;position:absolute;top:'+parseInt(pos.y-10)+'px;left:'+parseInt(pos.x-10)+'px;">'+this.num+'</div>');
            return ++this.num;
        },
        
        //比对坐标点
        comparePos : function (fontPos, checkPosArr) {
            
            var flag = true;
            for(var i = 0; i < fontPos.length; i++) {
                if(!(parseInt(checkPosArr[i].x) + 40 > fontPos[i].x && parseInt(checkPosArr[i].x) - 40 < fontPos[i].x && parseInt(checkPosArr[i].y) + 40 > fontPos[i].y && parseInt(checkPosArr[i].y) - 40 < fontPos[i].y)) {
                    flag = false;
                    break;
                }
            }
            
            return flag;
        },
        
        //刷新
        refresh: function() {
            var _this = this;
            this.$element.find('.point-area').remove();
            this.fontPos = [];
            this.checkPosArr = [];
            this.num = 1;
            
            this.img_rand = Math.floor(Math.random() * this.options.imgName.length);            //随机的背景图片
            var img = new Image();
            img.src = '/verifys/'+this.options.imgName[this.img_rand];
            console.log(img.src);
            
            // 加载完成开始绘制
            $(img).on('load', function(e) {
                this.fontPos = _this.drawImg(_this, this);
            });

        },
        
    };
    
    //在插件中使用codeVerify对象
    // $.fn.codeVerify = function(options, callbacks) {
    //     var code = new Code(this, options);
    //     code.init();
    // };
    
    //在插件中使用slideVerify对象
    // $.fn.slideVerify = function(options, callbacks) {
    //     var slide = new Slide(this, options);
    //     slide.init();
    // };
    
    //在插件中使用clickVerify对象
    $.fn.pointsVerify = function(options, callbacks) {

        var points = new Points(this, options);
         console.log('points')
        console.log(points)
        points.init();
    };
   
})(jQuery, window, document);
