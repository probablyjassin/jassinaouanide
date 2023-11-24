<template>
    <div class="about-section">
			<div class="container">
				<div class="lg:flex space-y-3">
					<div class="md:w-1/2">
						<h2 id="about" class="font-bold">Über mich</h2>
						<p>
							Hallo! Ich bin Jässin Aouani, Schüler des Max-Klinger-Gymnasiums in Leipzig. Ich absolviere das Abitur im Juni 2024. Hier auf meiner Website sind
							mein Lebenslauf und meine Projekte zu finden.
						</p>
					</div>
					<client-only class="md:w-1/2">
						<div class="hobbys flex-col">
							<p><faIcon icon="calendar" class="icon"></faIcon>17</p>
							<p><faIcon icon="icons" class="icon"></faIcon>Informatik, Sprachen, Musik, Schach</p>
							<p><faIcon icon="map-marker-alt" class="icon"></faIcon>Leipzig, Deutschland</p>
						</div>
					</client-only>
				</div>
			</div>
		</div>
</template>

<style scoped>
	.hobbys p {
		display: flex;
		margin-bottom: 0.4rem;
		.icon {
			margin-right: 0.5rem;
		}
	}
</style>
