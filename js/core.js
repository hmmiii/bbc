var modalTabBtn = null;
var modalTabPage = null;
var modalCloseBtn = null;
var modalForgotten1 = null;
var modalForgotten2 = null;
var forgottenBtn = null;
var sendBtn = null;
var searchBtn = null;
var accessBtn = null;
var header = null;
var modalBG = null;
var tabBtn = null;
var tabPage = null;
var convertBtn = null;
var editorsPick = null;
var newsSubTop = null;
var moreAroundBBC = null;
var yourCovidStories = null;
var globalClimateSummit = null;
var climateBasics = null;
var covidPandemic = null;
var europe = null;
var asia = null;
var australia = null;
var newEconomy = null;
var newTechEconomy = null;
var technologyOfBusiness = null;
var climateChange = null;
var space = null;
var inPictureFeatures = null;
var weekInPictures = null;
var yourPictures = null;
var etcSubTop = null;

$(document).ready(function(){
    init();

    tabUI(modalTabBtn,modalTabPage);
    tabUI(forgottenBtn,modalForgotten1);
    tabUI(sendBtn,modalForgotten2);
    tabUI(tabBtn,tabPage);
    modalOpen(searchBtn);
    modalOpen(accessBtn);
    closeModal(modalCloseBtn);
    closeModal(sendBtn);
    closeModal(modalBG);
    addShadow(header);
    checkTheme(convertBtn);
    convertTheme(convertBtn);
    postCarouselA(etcSubTop);
    postCarouselB(editorsPick);
    postCarouselB(yourCovidStories);
    postCarouselB(globalClimateSummit);
    postCarouselA(climateBasics);
    postCarouselB(covidPandemic);
    postCarouselA(asia);
    postCarouselB(europe);
    postCarouselA(australia);
    postCarouselB(newEconomy);
    postCarouselB(newTechEconomy);
    postCarouselB(technologyOfBusiness);
    postCarouselB(climateChange);
    postCarouselB(space);
    postCarouselB(inPictureFeatures);
    postCarouselA(weekInPictures);
    postCarouselB(yourPictures);
    progressSlide();
    fullSlide();
    convertView(newsSubTop);
    convertView(moreAroundBBC);
    hiddenListCancel();
    checkCategory();
    setArticleImg();
    setAltText();
    setHeaderAltText();
    setNavigator();
    setTitle();
    menu();

});

$(window).on('load',function(){
    rollingNumber();
});

function init(){
    modalTabBtn = $('.modalContainer ul li a');
    modalTabPage = $('.modalContainer [id$=Tab]');
    modalCloseBtn = $('.btn_close');
    modalForgotten1 = $('#forgotten1');
    modalForgotten2= $('#forgotten2');
    forgottenBtn = $('#inTab .btn_close');
    sendBtn = $('#forgotten1 input[type=button]');
    accessBtn = $('.headerContainer div input:first-child')
    searchBtn = $('.headerContainer div input:last-child')
    header = $('header');
    modalBG = $('.modal');
    tabBtn = $('.tab li')
    tabPage = $('[id^=tab]');
    convertBtn = $('.btn_convert');
    newsSubTop = $('.newsSubTop');
    views = $('.views')
    moreAroundBBC = $('.mV');
    editorsPick = $('.home > div:nth-of-type(7)')
    yourCovidStories = $('.coronavirus > div:nth-of-type(5)');
    globalClimateSummit = $('.climate > div:nth-of-type(5)');
    climateBasics = $('.climate > div:nth-of-type(6)');
    covidPandemic = $('.world > div:nth-of-type(5)');
    asia = $('.world > div:nth-of-type(6)');
    europe = $('.world > div:nth-of-type(7)');
    australia = $('.world > div:nth-of-type(8)');
    newEconomy = $('.business > div:nth-of-type(5)');
    newTechEconomy = $('.business > div:nth-of-type(6)');
    technologyOfBusiness = $('.business > div:nth-of-type(7)');
    climateChange = $('.science > div:nth-of-type(5)');
    space = $('.science > div:nth-of-type(6)');
    inPictureFeatures = $('.inPictures > div:nth-of-type(5)');
    weekInPictures = $('.inPictures > div:nth-of-type(6)');
    yourPictures = $('.inPictures > div:nth-of-type(7)');
    etcSubTop = $('.etcSubTop');
}

function tabUI(btn,page){
    $(btn).click(function(){
        var activeTab = $(this).attr('data-tabName');
        $(btn).removeClass("active");
        $(this).addClass("active");
        $(page).removeClass("active");
        $("#"+activeTab).addClass("active");
    });
}

function closeModal(btn){
    $(btn).click(function(e){
        if(this == e.target){
            $(this).parents('.modal').removeClass('active');
            $(this).removeClass('active');
        }
    })
}

function modalOpen(btn){
    $(btn).click(function(){
        var activeModal = $(this).attr('data-modal');
        $('#'+activeModal).addClass('active');
    })
}

function addShadow(element){
    $(document).on('scroll',function(){
        if(scrollY > 0){
            $(element).addClass('shadow');
        }else{
            $(element).removeAttr('class');
        }
    })
}

function checkTheme(convertBtn){
    if(localStorage.dark === 'true'){
        $(convertBtn).removeClass('darken');
        $(convertBtn).addClass('lighten');
        $('body').attr('data-dark', 'true');
    }
}

function convertTheme(convertBtn){
    $(convertBtn).click(function(){
        if($(convertBtn).hasClass('darken')){
            $(this).removeClass('darken');
            $(this).addClass('lighten');
            $('body').attr('data-dark', 'true');
            localStorage.dark = true;
            $(this).css('animation-name','bottom');
        }else{
            $(this).removeClass('lighten');
            $(this).addClass('darken');
            $('body').attr('data-dark', 'false');
            localStorage.dark = false;
            $(this).css('animation-name','bottom2');
        }
    })
}

function postCarouselA(box){
    $(box).children('ul').bxSlider({
        pager:false,
        prevSelector : $(box).find('.btn_prev'),
        nextSelector : $(box).find('.btn_next'),
        maxSlides: 2,
        minSlides: 1,
        slideWidth:571,
        slideMargin:22,
        touchEnabled : false
    });
}
function postCarouselB(box){
    $(box).children('ul').bxSlider({
        pager:false,
        prevSelector : $(box).find('.btn_prev'),
        nextSelector : $(box).find('.btn_next'),
        maxSlides: 4,
        minSlides: 1,
        slideWidth:274.5,
        slideMargin:22,
        touchEnabled : false
    });
}
function postCarouselC(slide){
    $(slide).bxSlider({
        pager: false,
        controls: false,
        maxSlides: 2,
        minSlides: 1,
        slideWidth:571,
        slideMargin:22,
        touchEnabled : false,
        auto:true,
        autoHover:true
    })
}

function progressSlide(){
    var progress = $('.pagerContainer div');

    var slider = $('.progressSlide').bxSlider({
        mode:'fade',
        controls:false,
        pagerCustom: '.thumbPagerPS',
        auto:true,
        onSlideBefore: function(el,old,next){
            switch(next){
                case 0:{
                    $(progress).removeClass().addClass('oneFourth');
                    break;
                }
                case 1:{
                    $(progress).removeClass().addClass('twoFourth');
                    break;
                }
                case 2:{
                    $(progress).removeClass().addClass('threeFourth');
                    break;
                }
                case 3:{
                    $(progress).removeClass().addClass('fourFourth');
                    break;
                }
                default:{
                    break;
                }
            }
        },
        touchEnabled : false,
        autoHover: true
    });
    var pager = $('.thumbPagerPS');

    pager.hover(function(){
        slider.stopAuto();
    },function(){
        slider.startAuto();
    })
}

function fullSlide(){
    var slider = $('.fullSlide').bxSlider({
        controls:false,
        pagerCustom: '.thumbPagerFS',
        auto:true,
        touchEnabled : false,
        autoHover: true
    });

    var pager = $('.thumbPagerFS').bxSlider({
        pager:false,
        prevSelector : '.btn_prevFS',
        nextSelector : '.btn_nextFS',
        maxSlides: 3,
        minSlides: 1,
        slideWidth:290,
        slideMargin:22,
        touchEnabled : false
    });

    $(pager).hover(function(){
        slider.stopAuto();
    },function(){
        slider.startAuto();
    })
}

function convertView(box){
    $(box).click(function(e){
        if($(e.target).hasClass('btn_list') && !$(e.target).hasClass('active')){
            $(e.target).siblings().removeClass('active');
            $(e.target).addClass('active');

            $(this).children('ul').removeClass('gridView');
            $(this).children('ul').addClass('listView');
        }else if($(e.target).hasClass('btn_grid') && !$(e.target).hasClass('active')){
            $(e.target).siblings().removeClass('active');
            $(e.target).addClass('active');

            $(this).children('ul').removeClass('listView');
            $(this).children('ul').addClass('gridView');
        }
    })
}

function hiddenListCancel(){
    var moreArticlesBtn = $('.moreArticles');
    var hiddenList = $('.hiddenList')
    $(moreArticlesBtn).click(function(){
        $(hiddenList).removeClass('hiddenList');
        $(this).css('display','none');
    });
}

function checkCategory(){
    var hue = 0;
    var category = $('mark');
    var number = category.length;
    var categoryArr = [];

    for(var i = 0; i<number; i++){
        if(categoryArr.indexOf(category.eq(i).text()) < 0){
            categoryArr.push(category.eq(i).text());
        }
    }
    for(var i = 0; i<category.length; i++){
        hue = Math.floor(Math.random()*360);
        $(`mark:contains(${categoryArr[i]})`).css('background-color',`hsl(${hue},82.4%,40%)`);
    }
}

function setArticleImg(){
    var img = $('.content img');
    var number = img.length;
    var articleName = $('body').attr('class');
    var imgUrl = null;
    for (let i = 0; i < number; i++) {
        imgUrl =`images/${articleName}_${i+1}.jpg`;
        img.eq(i).attr('src',imgUrl);
    }
}


function setAltText(){
    var figure = $('.content figure');
    var number = figure.length;
    var altText = '';
    for (var i = 0; i < number; i++) {
        altText = figure.eq(i).children('figcaption').text();
        figure.eq(i).children('img').attr('alt',altText);
    }
}

function setHeaderAltText(){
    var header = $('.content > div');
    var altText = header.find('h2').text();
    header.children('img').attr('alt',`${altText} Feature Image`);
}

function setNavigator(){
    if($('.content').length){
        var categoryInfo = $('body').attr('class').split('_');
        var category = categoryInfo[1].replaceAll('-',' ');
        var navigator = $('.navigator');
        var depth2 = $('nav ul > li.active > a').text();
        var depth3 = category;
        var depth4 = $('.content h2').text();
        navigator.find('li:nth-child(2)').text(depth2);
        navigator.find('li:nth-child(3)').text(depth3);
        navigator.find('li:last-child').text(depth4);
    }
}

function setTitle(){
    if($('.content').length){
        var categoryInfo = $('body').attr('class').split('_');
        var category = categoryInfo[1].replaceAll('-',' ');
        var title = $('.content h2').text();
        $('title').text(`${title} - BBC ${category.charAt(0).toUpperCase()}${category.slice(1)}`);
    }
}

function menu(){
    $('.mui').click(function(){
        if(!$(this).hasClass('opened')){
            $('nav').css('display','block');
            $(this).addClass('opened');
        }else{
            $('nav').css('display','none');
            $(this).removeClass('opened');
        }
    });
}

function rollingNumber(){
    var length = $('.number').length;
    for(var i = 0; i<length; i++){
        $('.number').eq(i).rollingNumbers();
    }
}