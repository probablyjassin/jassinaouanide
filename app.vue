<template>
	<title>Jässin Aouani - Home</title>
	<link href="https://fonts.cdnfonts.com/css/youtube-sans" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
	<link href="https://fonts.cdnfonts.com/css/youtube-sans" rel="stylesheet" />

	<Navbar />
	<Heading />
	<About />
	<Projects />
	<Contact />
	<Foot />
</template>

<script setup>
	onMounted(() => {
		const observery = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade");
				} else {
					entry.target.classList.remove("fade");
				}
			});
		});
		const hiddenElements = document.querySelectorAll(".move");
		hiddenElements.forEach((el) => observery.observe(el));
		
		const scrollDownBtn = document.getElementById("scroll-down-btn");
		const scrollUpBtn = document.getElementById("scroll-up-btn");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					scrollUpBtn.classList.add("upstate");
				} else {
					scrollUpBtn.classList.remove("upstate");
				}
			});
		});
		observer.observe(scrollDownBtn);

		document.addEventListener("DOMContentLoaded", () => {
			let scrolled = false;
			const targetElement = document.getElementById("name");
			const scroll = () => {
				if (!scrolled) targetElement.scrollIntoView({ behavior: "smooth" });
			};
			window.addEventListener("scroll", () => {
				scrolled = true;
			});
			setTimeout(scroll, 3000);
		});
	});
</script>

<style>
	@import "~/assets/main.css";
</style>
