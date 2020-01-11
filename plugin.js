(function($){
    $.fn.personalCard = function(config){
    if(config.side === "left"){
       let container = document.createElement('div');
       let cont = document.createElement('div');
       let logo = document.createElement('div');
       $(cont).addClass('cont');
       $(logo).addClass('logo');
       $(container).addClass(config.side).css('justify-content', 'flex-start');
       let img = $(container).append('<div><img class="person-img" src='+config.img+' width="200"></div>');
       let name = $(cont).append('<p class="person-name">'+config.name+' '+config.surname+'</p>');
       let info = $(cont).append('<div class="person-info"><p>'+config.info+'</p></div>');
       let git = $(logo).append('<a href="https://github.com/"><img class="git-logo" src='+config.git+' width="50"></a>');
       let link = $(logo).append('<a href="#"><img class="linked" src='+config.link+' width="50"></a>');
       let twiter = $(logo).append('<a href="#"><img class="twitter" src='+config.twiter+' width="50"></a>');
       $(cont).append(logo);
       $(container).append(cont);
       $('.plugin').append(container);

    }
    else if(config.side === "right"){
        let container = document.createElement('div');
        let con = document.createElement('div');
        let cont = document.createElement('div');
        let logo = document.createElement('div');
        $(cont).addClass('cont');
        $(logo).addClass('logo');
        $(container).addClass(config.side).css('justify-content', 'flex-end');;
        let name = $(cont).append('<p class="person-name">'+config.name+' '+config.surname+'</p>');
        let info = $(cont).append('<div class="person-info"><p>'+config.info+'</p></div>');
        let git = $(logo).append('<a href="https://github.com/"><img class="git-logo" src='+config.git+' width="50"></a>');
        let link = $(logo).append('<a href="#"><img class="linked" src='+config.link+' width="50"></a>');
        let twiter = $(logo).append('<a href="#"><img class="twitter" src='+config.twiter+' width="50"></a>');
        let img = $(con).append('<img class="person-img" src='+config.img+' width="200">');
        $(con).css("float", "right");
        $(cont).append(logo);
        $(container).append(cont);
        $(container).append(con);

        $('.plugin').append(container);
    
     }
       
     else{
        let container = document.createElement('div');
        let cont = document.createElement('div');
        let logo = document.createElement('div');
        $(cont).addClass('cont');
        $(logo).addClass('logo');
        $(container).addClass("default").css('justify-content', 'flex-start');
        let img = $(container).append('<div><img class="person-img" src='+config.img+' width="200"></div>');
        let name = $(cont).append('<p class="person-name">'+config.name+' '+config.surname+'</p>');
        let info = $(cont).append('<div class="person-info"><p>'+config.info+'</p></div>');
        let git = $(logo).append('<a href="https://github.com/"><img class="git-logo" src='+config.git+' width="50"></a>');
        let link = $(logo).append('<a href="#"><img class="linked" src='+config.link+' width="50"></a>');
        let twiter = $(logo).append('<a href="#"><img class="twitter" src='+config.twiter+' width="50"></a>');
        $(cont).append(logo);
        $(container).append(cont);
        $('.plugin').append(container);
     }



   


    }

}(jQuery));



