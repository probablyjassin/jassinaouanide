<template>
	<div id="pointer" class="">
		<ClientOnly>
			<faIcon class="w-4 h-4 relative left-[20%] top-[15%]" icon="arrow-up-long"></faIcon>
		</ClientOnly>
	</div>
</template>

<script setup>
	onMounted(() => {
		const pointer = document.getElementById("pointer");

		function animatePointer(e, interacting) {
			const x = e.clientX - pointer.offsetWidth / 2;
			const y = e.clientY - pointer.offsetHeight / 2;

			const keyframes = {
				transform: `translate(${x}px, ${y}px)`,
			};
			pointer.animate(keyframes, {
				duration: 800,
				fill: "forwards",
			});
		}

		window.onmousemove = (e) => {
			const interactable = e.target.closest(".interact"),
				interacting = interactable !== null;
			animatePointer(e, interacting);
		};
	});
</script>

<style lang="postcss">
	body:hover #pointer {
		opacity: 1;
	}
	#pointer {
		left: 0;
		top: 0;
		width: 25px;
		height: 25px;

		z-index: 9999;
		position: fixed;
		pointer-events: none;

		opacity: 0;
		transition: opacity 500ms ease;

		border-radius: 30px;
		background-color: white;
	}
</style>
