<template>
    <div id="showcase" class="section-showcase">
			<div class="container">
				<div class="col-md-12 text-center">
					<h1 class="text-3xl">Projekte</h1>
				</div>
			</div>
			<div v-if="projects[0]" v-for="(project, i) in projects" class="flex">
				<img :src="`/images/${project.id}.webp`" class="w-1/2 aspect-video">
				<div class="w-1/2 text-center" :class="{ 'order-first': i % 2 == 0 }">
					<p class="text-gray-400 text-sm">{{ project.tech }}</p>
					<p class="text-3xl">{{ project.title }}</p>
					<p class="text-orange-300">{{ project.subtitle }}</p>
				</div>
			</div>
	</div>
</template>

<script setup>
	const projects = ref([])

	onMounted(async () => {
		await useFetch('/projects.json')
		.then(response => {
			projects.value = response.data.value
        })
	})
</script>