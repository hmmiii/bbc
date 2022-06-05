(function($) {
    $.fn.rollingNumbers = function(){
        var length = 0;
        var numbers = '';
        var number = 0;
        var count = null;
        var target = this;
        length = this.text().length;
        numbers = this.text();
        this.text('');
    
        this.addClass('rollingNumber');
    
        
        for(let i=0; i<length; i++){
            number = parseInt(numbers.substr(i,1));
            if(!isNaN(number)){
                this.append('<div class="count"><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span></div>');
            }else {
                number = numbers.substr(i,1);
                this.append('<div class="nan">'+number+'</div>');
            }
        }
        setTimeout(function(){
            for(let i=0; i<length; i++){
                count = $(target).children('div').eq(i);
                number = parseInt(numbers.substr(i,1));
                if(!isNaN(number)){
                    count.attr('class','count'+number);
                }
            }
        },0);
    };
}(jQuery));
