;(function($){

    var opts={
        tabs:[
            ['A','B','C','D','E'],
            ['F','G','H','J'],
            ['K','L','M','N','P'],
            ['Q','R','S','T','W'],
            ['X','Y','Z'] 
        ]
    }
 
    var hotCity=function(hotCity){
        //hotCity要遍历的热门城市对象
        //生成热门城市的容器
        var $hotWrapper=$('<div class="wrapper hc"></div>');
        //生成热门城市标题
        var $hotTitle=$('<span class="head">热门城市:</span>');
        //生成一个热门城市信息
        var $hotCities=$('<div class="hot-cities"></div>');
        //遍历数组,获取热门城市信息
        $.each(hotCity.hot,function(index,city){
            var $city=$('<span class="hotCities" code="'+city.code+'">'+city.name+'</span>');
            $hotCities.append($city);
        });
        //把所有的信息连在一起
        $hotWrapper.append($hotTitle).append($hotCities);
        return $hotWrapper;
    }

    //生成地址首字母区间
    var letter=function(opts){
        var $letter=$('<div class="letters"></div>');
        $.each(opts.tabs,function(index,letter){
            //letter.join('')那数组转换为字符串
            var $letterTitle=$('<span class="tab">'+letter.join('')+'</span>');
            if(index===0){
                $letterTitle.addClass('active');
            }
            addEvent($letterTitle);
            $letter.append($letterTitle);
        })

        return $letter;
    }

    //获取全部城市首字母和对应城市
    var allCities=function(opts,area){
        var $cityContent=$('<div class="cityContent"></div>');
        //生成全部城市结构
        $.each(opts.tabs,function(index,letter){
            //获取城市首字母信息
          var $lettercont=tabContent(letter);

            if(index===0){
                $lettercont.addClass('activePanel');
            }
            $cityContent.append($lettercont);
        })
        return $cityContent;
    }

    //获取城市首字母信息
    var tabContent=function(letter){
        var $letterBox=$('<div class="tabPanel"></div>');
         //每一个模块对应的字母区间全部地址,city是对应的首字母
        $.each(letter,function(index,city){
            var $wrapper=$('<div class="wrapper"></div>');

             var $cityTitle=$('<span class="city-title">'+city+'</span>');

             //根据首字母,生成对应字母的城市
             var $aCity=letterCity(area.cities[city]);

             $wrapper.append($cityTitle).append($aCity);
             $letterBox.append($wrapper);
         })
         return $letterBox; 
    }
    //生成每一个字母对应的城市;
    var letterCity=function(lcity){
        var $allCity=$('<div class="all-cities"></div>');
        $.each(lcity,function(index,allcity){
            var $allspan=$('<span class="all-city" code="'+allcity.code+'">'+allcity.name+'</span>');
            $allCity.append($allspan);
        });
        return $allCity;
    }
    //绑定事件tab
    var addEvent=function(ele){
        ele.on('mouseenter',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().next().children('.tabPanel').eq($(this).index()).addClass('activePanel').siblings().removeClass('activePanel');
        })
    }
    
    
    
    $.fn.area=function(){
        //this指向$('.area')
        //把所有的信息都连接起来,添加到页面
        this.append(hotCity(area)).append(letter(opts)).append(allCities(opts,area));
    }

}(jQuery))