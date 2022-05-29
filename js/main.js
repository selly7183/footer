$(window).load(function(){
	gsap.registerPlugin(ScrollTrigger);

	var svg1 = $(".svg_01 svg");
	var animation1 = gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				//start: "top center",
				toggleActions: "restart resume",
			}
		})
		animation1.to(svg1, {
			y: 100,
			x:-300,
			opacity: 1,
			duration: 0.3,
			ease: Power4.easeOut

		})
		.to(svg1, {
			y: 430,
			x:-300,
			rotation: 0,
			duration: 1,
			ease: Power0.easeNone
		})
		.to(svg1, {
			y:510,
			x:-280,
			rotation: -45,
			duration: 1,
			ease: Power0.easeNone
		})
		.to(svg1, {
			y:530,
			x:-250,
			rotation: -60,
			duration: 0.3,
			ease: Power0.easeNone
		})
		.to(svg1, {
			y:540,
			x:-200,
			rotation: -45,
			duration: 0.3,
			ease: Power0.easeNone
		})
		.to(svg1, {
			y: 580,
			x:0,
			rotation: -25,
			ease: Power0.easeNone,
			duration: 1
		})
		.to(svg1, {
			y: 700,
			x:0,
			rotation: -10,
			ease: Power0.easeNone,
			duration: 0.5
		})
		.to(svg1, {
			y: 700,
			x:0,
			rotation: 0,
			ease: Power0.easeNone,
			duration: 0.5
		});

	var svg2 = $(".svg_02 svg");
	var animation2= gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				//start: "top center",
				toggleActions: "restart resume ",
			}
		})
		animation2.to(svg2, {
			y:400,
			opacity: 1,
			duration: 0.3,
			ease: Power0.easeNone
		})
		.to(svg2, {
			y: 600,
			rotation: -45,
			duration: 1,
			ease: Power0.easeNone
		})
		.to(svg2, {
			y: 700,
			rotation: -90,
			duration: 1,
			ease: Power0.easeNone
		});
	
	var svg3 = $(".svg_03 svg");
	var animation3= gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				//start: "top center",
				toggleActions: "restart resume ",
			}
		})
		animation3.to(svg3, {
			y: 700,
			opacity: 1,
			duration: 1,
			ease: Power4.easeOut
		})
	
	var svg4 = $(".svg_04 svg");
	var animation4= gsap.timeline({
			scrollTrigger: {
				trigger: "footer",
				//start: "top center",
				toggleActions: "restart resume ",
			}
		})
		animation4.to(svg4, {
			x:-100,
			y: 100,
			opacity: 1,
			duration: 1,
			ease: Power0.easeNone
		})
		.to(svg4, {
			y: 700,
			duration:0.8,
			ease: Power0.easeNone
		})
		.to(svg4, {
			y: 700,
			x:-30,
			rotation: 15,
			duration: 0.5,
			ease: Power0.easeNone
		})
		.to(svg4, {
			y: 700,
			x:0,
			rotation: 90,
			duration: 0.5,
			ease: Power0.easeNone
		})
})