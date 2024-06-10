

class ml_interpreter {
	constructor() {
		this.ml_interpreter_container

		this.ml_interpreter_player
		
		this.ml_interpreter_video_source
		
		this.ml_interpreter_control_hide
		
		this.ml_interpreter_control_zoomin

		this.ml_interpreter_control_zoomout
		
		this.ml_interpreter_control_show

		this.ml_section_videos = {
			ml_demo_video_1: 'https://mavericklanguage.com/wp-content/uploads/2024/05/file_example_MP4_480_1_5MG.mp4',
			ml_demo_video_2: 'https://mavericklanguage.com/wp-content/uploads/2024/05/SampleVideo_1280x720_1mb.mp4'
		}
	}

	static hide() {
		if (this.ml_interpreter_player) {
			this.ml_interpreter_container.fadeOut(250);
			this.ml_interpreter_control_hide.fadeOut(250)
			this.ml_interpreter_control_show.fadeIn(250)
			this.ml_interpreter_player.currentTime = 0;
		}
	}
	
	static show() {
		this.ml_interpreter_container.fadeIn(250);	
		this.ml_interpreter_control_hide.fadeIn(250);
		this.ml_interpreter_control_show.fadeOut();
		// setTimeout(1000, playVid());
	}
	
	static play_section(ml_section_video) {
		let newVideo;
		if (this.ml_section_videos[ml_section_video] != null) {
			newVideo = this.ml_section_videos[ml_section_video];

			this.ml_interpreter_player.pause();
	
			this.ml_interpreter_player.setAttribute('src', newVideo);
			this.ml_interpreter_player.setAttribute('type', 'video/mp4');
			
			this.ml_interpreter_player.load();
			this.ml_interpreter_player.play();
			console.log({
				src: this.ml_interpreter_player.getAttribute('src'),
				type: this.ml_interpreter_player.getAttribute('type'),
			});
		
			ml_show();
		} else {
			console.log("ML Interpreter: Section video not found")
		}	
	}
	
	static initialize() {
		jQuery.get("https://cornerstonedev.co.uk/wp-content/plugins/maverick-translation/public/html/maverick-translation-public.html", function (data) {
			jQuery(document.body).append(data);
		}).success(() => {		this.ml_interpreter_container = jQuery("#ml_interpreter");

		this.ml_interpreter_player = jQuery("#ml_interpreter_video").get(0);
		
		this.ml_interpreter_video_source = jQuery("#ml_interpreter_video_source");
		
		this.ml_interpreter_control_hide = jQuery("#ml_interpreter_close");
		
		this.ml_interpreter_control_zoomin = jQuery("#ml_interpreter_zoomin");

		this.ml_interpreter_control_zoomout = jQuery("#ml_interpreter_zoomout");
		
		this.ml_interpreter_control_show = jQuery("#ml_interpreter_signthispage");
		
		this.ml_interpreter_control_hide.click(() => {
			this.hide();
		})
		
		this.ml_interpreter_control_show.click(() => {
			this.show();
		})
		
		this.ml_interpreter_control_zoomin.click(() => {
			this.ml_interpreter_container.width(this.ml_interpreter_container.width() + 50);
			console.log("Added 50px")
		})
		
		this.ml_interpreter_control_zoomout.click(() => {
			this.ml_interpreter_container.width(this.ml_interpreter_container.width() - 50);
			console.log("Removed 50px")
		})
		
		jQuery(() => {
			jQuery('#ml_interpreter_title').click(() => {
			// mlInterpreter.play()
		})
		
		jQuery('[ml_interpreter]').click((e) => {
			let ml_section_video = e.currentTarget.getAttribute("ml_interpreter")
			console.log(ml_section_video)
			
			this.play_section(ml_section_video)
		});
		})
		
		dragElement(document.getElementById("ml_interpreter"));
		
		function dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById(elmnt.id + "header")) {
			// if present, the header is where you move the DIV from:
			document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		} else {
			// otherwise, move the DIV from anywhere inside the DIV:
			elmnt.onmousedown = dragMouseDown;
		}
		
		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}
		
		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
		
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
		
		function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
		}
		});


		
		// $(window).scroll(function(){
		// // This is then function used to detect if the element is scrolled into view
		// function elementScrolled(elem)
		// {
		// 	var docViewTop = $(window).scrollTop();
		// 	var docViewBottom = docViewTop + $(window).height();
		// 	var elemTop = $(elem).offset().top;
		// 	return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
		// }
		
		// // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
		// if(elementScrolled('. box2')) {
		
		
		// // Your function here
		
		// }
		// });
	}

}

// function ml_hide() {
// 	if (ml_interpreter_player) {
// 		ml_interpreter_container.fadeOut(250);
// 		ml_interpreter_control_hide.fadeOut(250)
// 		ml_interpreter_control_show.fadeIn(250)
// 		ml_interpreter_player.currentTime = 0;
// 	}
// }

// function ml_show() {
// 	ml_interpreter_container.fadeIn(250);
// 	ml_interpreter_control_hide.fadeIn(250);
// 	ml_interpreter_control_show.fadeOut();
// 	// setTimeout(1000, playVid());
// }

// function ml_play_section(ml_section_video) {
// 	let newVideo = ml_section_videos[ml_section_video];
	
// 	ml_interpreter_player.pause();

// 	ml_interpreter_player.setAttribute('src', newVideo);
// 	ml_interpreter_player.setAttribute('type', 'video/mp4');
	
// 	ml_interpreter_player.load();
// 	ml_interpreter_player.play();
// 	console.log({
// 		src: ml_interpreter_player.getAttribute('src'),
// 		type: ml_interpreter_player.getAttribute('type'),
// 	});

// 	ml_show();

// }

// ml_interpreter_control_hide.click(() => {
// 	ml_hide();
// })

// ml_interpreter_control_show.click(() => {
// 	ml_show();
// })

// ml_interpreter_control_zoomin.click(() => {
// 	ml_interpreter_container.width(ml_interpreter_container.width() + 50);
// 	console.log("Added 50px")
// })

// ml_interpreter_control_zoomout.click(() => {
// 	ml_interpreter_container.width(ml_interpreter_container.width() - 50);
// 	console.log("Removed 50px")
// })

// jQuery(() => {
// 	jQuery('#ml_interpreter_title').click(() => {
// 	// mlInterpreter.play()
// })

// jQuery('[ml_interpreter]').click((e) => {
// 	let ml_section_video = e.currentTarget.getAttribute("ml_interpreter")
// 	console.log(ml_section_video)
	
// 	ml_play_section(ml_section_video)
// });
// })

// dragElement(document.getElementById("ml_interpreter"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
// 	// if present, the header is where you move the DIV from:
// 	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
// 	// otherwise, move the DIV from anywhere inside the DIV:
// 	elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
// 	e = e || window.event;
// 	e.preventDefault();
// 	// get the mouse cursor position at startup:
// 	pos3 = e.clientX;
// 	pos4 = e.clientY;
// 	document.onmouseup = closeDragElement;
// 	// call a function whenever the cursor moves:
// 	document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
// 	e = e || window.event;
// 	e.preventDefault();
// 	// calculate the new cursor position:
// 	pos1 = pos3 - e.clientX;
// 	pos2 = pos4 - e.clientY;
// 	pos3 = e.clientX;
// 	pos4 = e.clientY;
// 	// set the element's new position:

// 	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
// 	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
// 	// stop moving when mouse button is released:
// 	document.onmouseup = null;
// 	document.onmousemove = null;
//   }
// }

// $(window).scroll(function(){
//   // This is then function used to detect if the element is scrolled into view
//   function elementScrolled(elem)
//   {
// 	var docViewTop = $(window).scrollTop();
// 	var docViewBottom = docViewTop + $(window).height();
// 	var elemTop = $(elem).offset().top;
// 	return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
//   }

//   // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
//   if(elementScrolled('. box2')) {


//   // Your function here

//   }
// });
