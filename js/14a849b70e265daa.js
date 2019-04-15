
    function set_cookie(e,t,n,o){var i,r,c=new Date;c.setTime(c.getTime()+24*(t||30)*60*60*1e3),i="; expires="+c.toGMTString();for(r in e)document.cookie=r+"="+e[r]+i+"; domain="+(n||"douban.com")+"; path="+(o||"/")}function get_cookie(e){var t,n,o=e+"=",i=document.cookie.split(";");for(t=0;t<i.length;t++){for(n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(o))return n.substring(o.length,n.length).replace(/\"/g,"")}return null}

  ;
    Do("widget/tabs",function(){$.fn.splat=function(){return this.map(function(n,t){return $(t)})};var n=$(".nav-vendor li"),t=$(".list-ranking"),a=new Tabs(n.splat(),t.splat());a.initState(0)});
    ;Do(function(){
        var imageHoverChange = function(header_id, on_icon, idle_icon) {
            var $hd_img = $(header_id).find("img")
            $(header_id).hover(function(e){
                $hd_img.attr('src', on_icon)
            }, function(){
                if (!$(header_id).hasClass('on')) {
                    $hd_img.attr('src', idle_icon)
                }
            });
            $(".book-chart-hd").click(function(e){
                var target_id = $(e.target).parent().attr('id')
                if(target_id && target_id.indexOf(header_id.replace("#", '')) >= 0) {
                    $hd_img.attr('src', on_icon)
                } else {
                    $hd_img.attr('src', idle_icon)
                }
            })
        }
        var jd_on_icon = "https://img3.doubanio.com/f/book/7fd9bf017a2b6c0349981f25700e2b71c12df7d0/pics/book/partner/jd_chart_hover.png";
        var jd_idle_icon = "https://img3.doubanio.com/f/book/1a000e2b266b7d0e7c6c729591cab99692c04153/pics/book/partner/jd_chart.png";
        var amazon_on_icon = "https://img3.doubanio.com/f/book/d6c95e1ad2d0963f912a64fcb51cfa85137462c6/pics/book/partner/amazon_chart_hover.png";
        var amazon_idle_icon = "https://img3.doubanio.com/f/book/a89c8398b6cf28ef20edfe1b069ee72917e2dd54/pics/book/partner/amazon_chart.png";
        var dangdang_on_icon = "https://img3.doubanio.com/f/book/7d8c0787ecede53ce754df32380011a66b610496/pics/book/partner/dangdang_chart_hover.png";
        var dangdang_idle_icon = "https://img3.doubanio.com/f/book/31b437b71ced2d15e1e110d6be26b070da8c0d4a/pics/book/partner/dangdang_chart.png";
        imageHoverChange("#jd-book-chart-hd", jd_on_icon, jd_idle_icon)
        imageHoverChange("#amazon-book-chart-hd", amazon_on_icon, amazon_idle_icon)
        imageHoverChange("#dangdang-book-chart-hd", dangdang_on_icon, dangdang_idle_icon)
    });

