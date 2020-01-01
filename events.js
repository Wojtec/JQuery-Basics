$(document).ready(function(){

//CLICK
$('.clickBox').click(function(){
    alert("You click green box");
})
//HOVER
$('.hoverBox').hover(function(){
    $(this).css("background-color","yellow");
    $(this).text("Hover on");
},function(){
    $(this).css("background-color","darkcyan");
    $(this).text("Hover off");

})

// KEYPRESS
$('#text').keypress(function(e){
    $('.key').text(e.key);

})

// Clear button
$('#clear').click(function(){
    $('#text').val('');
    $('.key').text('');
});

//Mouse position
$('.mousePosition').mouseenter(function(){
    $('.mousePosition').mousemove(function(e){
        $('.tooltip').show();

        $('.tooltip').css({
            "left" : e.pageX + 15,
            "top" : e.pageY + 15
        });
        $('.tooltip').text("pageX: " + e.pageX + "pageY: "+ e.pageY);
    })
})
$('.mousePosition').mouseleave(function(){

    $('.tooltip').text('');
    $('.tooltip').hide();

})
//Event + 

$('.btn-1, .btn-2').on('click', function(e){
if(e.currentTarget.className == "btn-1"){
    alert("you click btn-1");
}
if(e.currentTarget.className == "btn-2"){
    alert("you click btn-2");
}
})





})