<script setup>
import dayjs from "dayjs";

// The animal this card shows. App passes it in with :animal="animal".
defineProps({
	animal: Object,
});

// The animals belong to App, so the card never changes animal.adopted
// itself. It only tells App the button was clicked, and App decides what
// happens.
const emit = defineEmits(["toggle"]);

// Turns "2026-08-20" into "Arrived Aug 20, 2026 (55 days ago)".
function arrivalText(intakeDate) {
	const arrived = dayjs(intakeDate);
	return `Arrived ${arrived.format("MMM D, YYYY")} (${dayjs().diff(arrived, "day")} days ago)`;
}
</script>

<template>
	<article class="animal-card" :class="{ adopted: animal.adopted }">
		<h3>{{ animal.name }}</h3>
		<p>{{ animal.species }}, {{ animal.age }} years old</p>
		<p>{{ arrivalText(animal.intakeDate) }}</p>
		<p>{{ animal.adopted ? "Adopted" : "Available" }}</p>
		<button type="button" @click="emit('toggle')">
			{{ animal.adopted ? "Return" : "Adopt" }}
		</button>
	</article>
</template>
