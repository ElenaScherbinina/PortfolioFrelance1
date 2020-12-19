new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass:"projects-bullet",
    bulletActiveClass:"projects-bullet-active",
    clickable:true
},
});
function  valid(form){
  var fail=false;
  var name=form.name.value;
  var telephone=form.telephone.value;
  if(name=="" || name==" ")
    fail="Вы не ввели свое имя";
  else if (telephone=="" || telephone==" ")
    fail="Вы не ввели свой телефон";
  
  if(fail)
    alert(fail);
  else
    window.location="http://google.com";
   
}