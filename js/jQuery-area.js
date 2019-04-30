;
(function ($) {
    var opt = {
        tablist: [
            ['A','B','C','D','E'],
            ['F','G','H','J'],
            ['K','L','M','N','P'],
            ['Q','R','S','T','W'],
            ['X','Y','Z']
        ]
    }
    var hotCity = function () {
        var $hot = $('<div class="hotcitys"></div>')
        var $hotTitle = $('<h3>热门城市</h3>')

        var $hotcity = $('<div class="hotcity"></div>')
            $.each(area.hot, function (index,city) {
            // console.log(city.name)
            var $hotcityAll = $('<span code="' + city.code + '">' + city.name + '</span>');
            $hotcity.append($hotcityAll);
            })

        $hot.append($hotTitle).append($hotcity)
        return $hot
    }
    var tab = function () {
        var $tab = $('<div class="tablist"></div>')
        $.each(opt.tablist, function (index, tablist) {
            // console.log(tablist.join(''))
            var $tabTitle=$('<span>'+tablist.join('')+'</span>')
            $tab.append($tabTitle)
        })
        return $tab
    }

    var allcity = function () {
        var $allcitycontainer = $('<div class="allcitycntainer"></div>');
        $.each(opt.tablist, function (index,abc) {
            var $allcityitem = $('<div class="allcityitem"></div>');
            $allcitycontainer.append($allcityitem);
            $.each(abc, function (index, zimu) {
                var $allcityitemList=$('<div class="allcityitem-list"></div >')
                var $allcityzimu = $('<div class="allcityzimu">' + zimu + '</div >')
                var $allcities=$('<div class="allcities"></div>')
                $allcityitem.append($allcityitemList);
                $allcityitemList.append($allcityzimu);
                $allcityitemList.append($allcities);
                $.each(area.cities[zimu], function (index, allcity) {
                    // console.log(allcity)
                    var $allcity = $('<span code="' + allcity.code + '">' + allcity.name + '</span>');
                    $allcities.append($allcity)
                })
            })
        })
        
        return $allcitycontainer
    }
   
    $.fn.area = function () {
        $(this).after(allcity()).after(tab()).after(hotCity())
        // console.log(hotCity())
        $('.tablist span:first').addClass('active');
        $('.allcityitem:first').css({ display: 'block' });
        $('.allcities span').click(function () {
            $('.address').html($(this).html()).nextAll().css({ display: 'none' });
        })
        $('.hotcity span').click(function () {
            $('.address').html($(this).html()).nextAll().css({ display: 'none' });
        })
        $('.tablist span').mouseenter(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.allcityitem').eq($(this).index()).css({ display: 'block' }).siblings().css({ display: 'none' });

        })
    }


}(jQuery))