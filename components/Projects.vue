<template>
	<div id="showcase" class="section-showcase">
		<div class="container">
			<div class="text-center">
				<h1 class="text-3xl my-5">Projekte</h1>
			</div>
		</div>
		<div v-for="(project, i) in projects">
			<div class="border-b-purple-500 pb-2 border-b-2 mb-5 md:flex flex-row">
				<img :src="`/images/${project.id}.webp`" class="md:w-1/2 md:aspect-video" />
				<div class="md:w-1/2 text-center move" :class="{ 'order-first': i % 2 == 0 }">
					<p class="text-gray-400 text-sm">{{ project.tech }}</p>
					<p class="text-5xl">{{ project.title }}</p>
					<p class="text-2xl text-orange-300">{{ project.subtitle }}</p>
					<p class="text-xl">{{ project.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const projects = ref([]);

	onMounted(async () => {
		await useFetch("/projects.json").then((response) => {
			projects.value = response.data.value;

			nextTick(() => {
				const observer = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("fade");
						}
					});
				});
				const hiddenElements = document.querySelectorAll(".move");
				hiddenElements.forEach((el) => {
					observer.observe(el);
				});
			})
		});
	});
</script>

