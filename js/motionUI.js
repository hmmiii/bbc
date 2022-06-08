(function($) {
    $.fn.rollingNumbers = function(options){
        let settings = $.extend({
            comma : true
        },options);

        const el = this;
        const countTemp = '<div class="count"><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span></div>';
        let length = el.text().length;
        let numbers = el.text();
        let number = 0;
        let count = null;
        let nan = '';


        if(settings.comma === true){
            el.text(el.text().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            numbers = el.text();
            length = el.text().length;
        }


        el.text('');
        el.addClass('rollingNumber');
    
        (function(){
            for(let i=0; i<length; i++){
                number = numbers.substr(i,1);
                if(!isNaN(number)){
                    el.append(countTemp);
                }
                else {
                    nan = numbers.substr(i,1);
                    el.append('<div class="nan">'+nan+'</div>');
                }
            }
            (function(){
                setTimeout(function(){
                    for(let i=0; i<length; i++){
                        count = $(el).children('div').eq(i);
                        number = parseInt(numbers.substr(i,1));
                        if(!isNaN(number)){
                            count.attr('class','count'+number);
                        }
                    }
                })
            })();
        })();

    };
}(jQuery));
