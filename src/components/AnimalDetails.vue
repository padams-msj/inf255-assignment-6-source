<script setup>
import dayjs from "dayjs";

// One animal, exactly as GET /api/animals/:id sent it. App loads it and
// passes it in.
defineProps({
	animal: Object,
});

// The Close button tells App to stop showing the details.
const emit = defineEmits(["close"]);

// Turns "2026-08-20" into "August 20, 2026".
function longDate(date) {
	return dayjs(date).format("MMMM D, YYYY");
}
</script>

<template>
	<article class="animal-details" aria-labelledby="details-heading">
		<h3 id="details-heading">About {{ animal.name }}</h3>
		<dl>
			<dt>Shelter id</dt>
			<dd>{{ animal.id }}</dd>
			<dt>Species</dt>
			<dd>{{ animal.species }}</dd>
			<dt>Breed</dt>
			<dd>{{ animal.breed || "Not listed" }}</dd>
			<dt>Age</dt>
			<dd>{{ animal.age }} years old</dd>
			<dt>Arrived</dt>
			<dd>{{ longDate(animal.intakeDate) }}</dd>
		</dl>
		<button type="button" @click="emit('close')">Close</button>
	</article>
</template>
