$(function ($){

  var titles = [{title: "I'm a dreamer guy", subtitle: "with his feet firmly on the ground"},
                {title: "I'm a creative mind ", subtitle: "always open to new changes"},
                {title: "I'm a full stack", subtitle: "developer"}];

  var count = 0;

  setInterval(function () {

    title = titles[count] ;

    $('.c-welcome__title').fadeOut("slow", function(){
      $(this).html(title.title);
    }).fadeIn('slow');

    $('.c-welcome__subtitle').fadeOut("slow", function(){
      $(this).html(title.subtitle)
    }).fadeIn('slow');;

    if (count == (titles.length - 1)) {
      count = 0;
    } else {
      count++;
    }


  }, 7000);


});
