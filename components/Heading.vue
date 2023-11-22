<template>
	<div class="header">
		<p id="name" class="text-4xl">
			<client-only>
				<div id="text" v-for="line in lines">
					<div class="line flex flex-row justify-between">
						<p v-for="word in line" class="word">
							<span class="letter" v-for="letter in word">{{ letter }}</span>
						</p>
					</div>
				</div>
			</client-only>
		</p>
		<div class="social-links">
			<a href="https://github.com/probablyjassin"><i class="fab fa-github"></i></a>
		</div>
		<a id="scroll-down-btn" href="#about" class="scroll-down-btn">
			<i class="fas fa-chevron-down"></i>
		</a>
		<a id="scroll-up-btn" href="#" class="scroll-up-btn">
			<i class="fas fa-chevron-up"></i>
		</a>
	</div>
</template>

<script setup>
	const lines = [["Jässin", "Aouani"], ["Frontend", "Apps"], ["@probablyjassin"]];
</script>

<style scoped>
	.word {
		text-transform: uppercase;
	}
	.fancy {
		cursor: pointer;
	}
	#text:has(.fancy:hover) .word:not(.fancy:hover) {
		opacity: 0.2;
	}
</style>
