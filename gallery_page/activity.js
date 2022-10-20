

  $(document).ready(function() {
	 $('#down').click(function(){
		 $("html, body").animate({
			 scrollTop: $(".main_footer").offset().top
		 }, 1500);
	 });
  });

	$(document).ready(function() {
	 $('#up').click(function(){
		 $("html, body").animate({
			 scrollTop: $(".block1").offset().top
		 }, 1000);
	 });
  });

  let lastScrollTop = 0;
	let navbar = document.querySelector('.hidden_nav_box');

  navbar.style.visibility = "hidden";
	window.addEventListener('scroll', function(){

		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		let fixedYPosition = 100;

		if(scrollTop >= fixedYPosition){

			navbar.style.visibility = "visible";
			navbar.classList.add("sticky");
		}else{

			navbar.style.visibility = "hidden";
			navbar.classList.remove("sticky");
		}



	})

