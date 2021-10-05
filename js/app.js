window.onload = () => {
				const transition = document.querySelector(".cover");
				const anchors = document.querySelectorAll('.link');
				
				
				for (let i = 0; i < anchors.length; i++){
				const anchor = anchors[i];
		
				anchor.addEventListener('click', e => {
					e.preventDefault();
					transition.classList.remove("slide-out");
					transition.classList.add("slide-in");
					setTimeout(()=> {
						transition.classList.remove("slide-in");
						window.location = anchor.href;
						transition.classList.add("slide-out");
						}, 500);
					});
				};
	
	
}