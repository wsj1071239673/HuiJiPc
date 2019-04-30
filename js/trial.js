$(function(){
    ;(function(){
        var flag = true;
        var i = 1;
        var str = '';
        var len = 0;
        $(window).scroll(function(){
            console.log(len,i);
            if(flag){
                var scrol = $(window).scrollTop();
                var wH = $(window).height();
                var offt = $('.li_item').eq(i).offset().top;
                if(offt - (wH + scrol) < 30){
                    flag = false;
                    $.ajax({
                        type:'post',
                        url:'api/trial.php',
                        data:'',
                        dataType:'json',
                        success:function(data){
                            len = data.length;
                            if( i%2 == 0 ){
                                str =`
                                    <dl class="li_item li_item2 clearfix">
                                        <dt class="item_img">
                                            <a href="#">
                                                <img src="${data[i+1].src}">
                                            </a>
                                        </dt>
                                        <dd class="item_info">
                                            <h3>
                                                <a href="#">${data[i+1].name} </a>
                                            </h3>
                                            <p>${data[i+1].title}</p>
                                            <dl>
                                                <dt>试用量：</dt>
                                                <dd>${data[i+1].try_num}份</dd>
                                            </dl>
                                            <dl>
                                                <dt>报告截止：</dt>
                                                <dd class="timer">
                                                    <b>${data[i+1].end_time}</b>天
                                                    <b>21</b>时
                                                    <b>5</b>分
                                                    <b>28</b>秒</dd>
                                            </dl>
                                            <dl>
                                                <dt>试用用户：</dt>
                                                <dd class="whotest">
                                                    <a class="testuser">${data[i+1].tel}</a>
                                                </dd>
                                            </dl>
                                            <div class="try_btn">
                                                <a href="#">查看报告</a>
                                                <span>已有
                                                    <em>${data[i+1].report_num}</em>人提交了试用报告</span>
                                            </div>
                                        </dd>
                                    </dl>
                                `;
                            }else{
                                str =`
                                    <dl class="li_item clearfix">
                                        <dt class="item_img">
                                            <a href="#">
                                                <img src="${data[i+1].src}">
                                            </a>
                                        </dt>
                                        <dd class="item_info">
                                            <h3>
                                                <a href="#">${data[i+1].name} </a>
                                            </h3>
                                            <p>${data[i+1].title}</p>
                                            <dl>
                                                <dt>试用量：</dt>
                                                <dd>${data[i+1].try_num}份</dd>
                                            </dl>
                                            <dl>
                                                <dt>报告截止：</dt>
                                                <dd class="timer">
                                                    <b>${data[i+1].end_time}</b>天
                                                    <b>21</b>时
                                                    <b>5</b>分
                                                    <b>28</b>秒</dd>
                                            </dl>
                                            <dl>
                                                <dt>试用用户：</dt>
                                                <dd class="whotest">
                                                    <a class="testuser">${data[i+1].tel}</a>
                                                </dd>
                                            </dl>
                                            <div class="try_btn">
                                                <a href="#">查看报告</a>
                                                <span>已有
                                                    <em>${data[i+1].report_num}</em>人提交了试用报告</span>
                                            </div>
                                        </dd>
                                    </dl>
                                `;
                            }
                            $('.past').append(str);
                            i ++;
                            if(i <= len - 2){
                               flag = true; 
                            }
                        }
                    })  
                } 
            }    
        }) 
    })();
   
    
})