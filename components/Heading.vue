<template>
	<div class="header">
		<img src="/images/IamProgrammerEnglish.png" alt="uwu" v-if="isFunny">
		<p id="name" class="text-4xl md:text-5xl" v-else>
			<client-only>
				<div id="text">
					<div v-for="line in lines" :data-type="line.type || 'text'" class="line flex flex-row justify-between">
						<template v-if="line.fancy">
							<a v-for="word in line.words" class="word fancy interact" :href="line.url ? line.url : 'mailto:jassin@aouani.de'">
								<span class="letter" v-for="letter in word">{{ letter }}</span>
							</a>
						</template>
						<template v-else>
							<p v-for="word in line.words" class="word" :class="{ fancy: line.fancy }">
								<span class="letter" v-for="letter in word">{{ letter }}</span>
							</p>
						</template>
					</div>
				</div>
			</client-only>
		</p>
		<a id="scroll-down-btn" href="#about" class="scroll-down-btn">
			<i class="fas fa-chevron-down"></i>
		</a>
		<a id="scroll-up-btn" href="#" class="scroll-up-btn">
			<i class="fas fa-chevron-up"></i>
		</a>
	</div>
</template>

<script setup>
	const route = useRoute()
	const isFunny = route.query.uwu

	const lines = [
		{
			words: ["Jässin", "Aouani"],
			fancy: false,
		},
		{
			words: ["Frontend", "Apps"],
			fancy: false,
		},
		{
			words: ["Coding", "Projects"],
			fancy: false,
		},
		{
			words: ["Email ->"],
			fancy: true,
			type: "mail"
		},
		{
			words: ["@probablyjassin"],
			fancy: true,
			url: "https://github.com/probablyjassin",
			type: "github"
		},
	];
</script>

<style scoped>
	.word {
		text-transform: uppercase;
	}
	.fancy {
		cursor: pointer;
	}
	.fancy {
		.letter {
			display: inline-block;
			color: rgb(249, 204, 127);
			transition: transform 350ms ease;
		}
	}
	.fancy:hover > .letter {
		transition-duration: 800ms;
		
	}
	#text:has(.fancy:hover) .word:not(.fancy:hover) {
		opacity: 0.2;
	}

	.fancy:hover > .letter:nth-child(1) {
		transform: translate(-50%, -30%) rotate(-50deg);
	}
	.fancy:hover > .letter:nth-child(2) {
		transform: translate(-50%, 10%) rotate(-10deg);
	}
	.fancy:hover > .letter:nth-child(3) {
		transform: translate(-40%, -20%) rotate(20deg);
	}
	.fancy:hover > .letter:nth-child(4) {
		transform: translate(-60%, 20%) rotate(20deg);
	}
	.fancy:hover > .letter:nth-child(5) {
		transform: translate(-80%, -10%) rotate(-20deg);
	}
	.fancy:hover > .letter:nth-child(6) {
		transform: translate(-60%, -10%) rotate(20deg);
	}
	.fancy:hover > .letter:nth-child(7) {
		transform: translate(-70%, -30%);
	}
	.fancy:hover > .letter:nth-child(8) {
		transform: translate(-60%, -5%) rotate(-5deg);
	}
	.fancy:hover > .letter:nth-child(9) {
		transform: translate(-30%, -30%) rotate(-10deg);
	}
	.fancy:hover > .letter:nth-child(10) {
		transform: translate(10%, 0%) rotate(20deg);
	}
	.fancy:hover > .letter:nth-child(11) {
		transform: translate(0%, 0%) rotate(-2deg);
	}
	.fancy:hover > .letter:nth-child(12) {
		transform: translate(0%, -30%) rotate(-9deg);
	}
	.fancy:hover > .letter:nth-child(13) {
		transform: translate(0%, -10%) rotate(9deg);
	}
	.fancy:hover > .letter:nth-child(14) {
		transform: translate(50%, 0%) rotate(20deg);
	}
	.fancy:hover > .letter:nth-child(15) {
		transform: translate(50%, -10%) rotate(-20deg);
	}
</style>
