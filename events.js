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


//Functions
//function for change color
function randomColor() {
    const deg = Math.random() * 360;
    return `hsl(${deg}, 60%, 50%)`;
}
//function iterate elements div 
$('.iterate-ele').click(function(){
    $('.groupEvents').children('div').each(function(i,obj){
        const color = randomColor();
        $(obj).css("background-color",color);
})
})
//get parent element
$('.get-parent').click(function(){
    const color = randomColor();
    $(this).parent( ".groupElements" ).css( "background",color);
})
//Get the collection of children of a certain element (if that element has children)
$('.groupElements').children().each(function(index,obj){
    $('.infoChild').append('<p>'+obj.className+'</p>');
})
// get all elements by class name
$('.box').css("border",'solid','1px','black');

// get item by id
$('#box').click(function(){
    alert(this);
});
//find hidden elements
$('.hidden-element').click(function(){
    var ele = $("body").find(":hidden");
    $(ele[0]).css("display","inline");
})
//Get those options of a select element that are selected (attribute selected)
$('#selector').change(function(){
    var element = $(this).find('option:selected'); 
    alert(element.val());
})
//Change the href attribute of the first <a> element (Create an <a> element to test this case)
$('#a-ele').attr("href","https://www.w3schools.com");
//Create a new <p> element with text inside the dom of your page
$('.box-select').append("<p>New 'p' element</p>");
//Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
$('#text2').change(function(){
    alert($('#text2').val());
})
//Remove all items from a specific selector
$('.remove-element').click(function(){
    $('.infoChild').children('p').remove();

})
//Animate an item after 2 seconds from the initial page load
setTimeout(function(){
    $('.hello').animate({marginLeft: "+=700"});
},2000);



})