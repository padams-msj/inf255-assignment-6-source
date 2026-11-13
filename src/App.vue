<script setup>
/*
 * Animal Adoption Board
 *
 * This is a completed version of Assignment 5. In Assignment 6 you change
 * only the places marked TODO 4.
 */

import { ref, computed } from "vue";
import AnimalCard from "./components/AnimalCard.vue";
import AnimalControls from "./components/AnimalControls.vue";

// ------------------------------------
// App Data
// ------------------------------------

// App owns all of the data. The components receive it as props and send
// changes back up as events.
const animals = ref([]);
const loading = ref(false);
const error = ref("");

// ------------------------------------
// Load the Animals
// ------------------------------------

async function loadAnimals() {
	loading.value = true;
	error.value = "";

	try {
		// TODO 4: Load the animals from your API instead of the JSON file.
		const response = await fetch("/animals.json");

		// A 404 or 500 still comes back as a response, so check it.
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		animals.value = await response.json();
	} catch (err) {
		console.error(err);
		error.value = "Sorry, the animals couldn't be loaded. Try refreshing the page.";
	}

	loading.value = false;
}

loadAnimals();

// ------------------------------------
// Adopt or Return an Animal
// ------------------------------------

function toggleAdoption(animal) {
	animal.adopted = !animal.adopted;
}


// ------------------------------------
// Filter, Sort, and Count
// ------------------------------------

const activeFilter = ref("all");
const activeSort = ref("default");

// A computed property replaced updateDisplay(). Vue remembers that it reads
// animals, activeFilter, and activeSort, and works it out again whenever one
// of them changes, so nothing has to be called after an adoption or a
// filter change.
const visibleAnimals = computed(() => {
	// sort() changes the array it is called on, so work on a copy.
	let visible = animals.value.slice();

	if (activeFilter.value === "available") {
		visible = visible.filter((a) => !a.adopted);
	} else if (activeFilter.value === "adopted") {
		visible = visible.filter((a) => a.adopted);
	}

	if (activeSort.value === "name") {
		visible.sort((a, b) => a.name.localeCompare(b.name));
	} else if (activeSort.value === "age") {
		// A negative result puts a before b, so smaller ages come first.
		visible.sort((a, b) => a.age - b.age);
	}

	return visible;
});

// Counts from every animal, not the visible ones, so filtering doesn't
// change the count.
const availableCount = computed(() => {
	return animals.value.filter((a) => !a.adopted).length;
});

function setFilter(filter) {
	activeFilter.value = filter;
}

function setSort(sort) {
	activeSort.value = sort;
}
</script>

<template>
	<header>
		<h1>Animal Adoption Board</h1>
		<p>Meet the animals currently staying at our shelter.</p>
	</header>

	<main>
		<section aria-labelledby="animals-heading">
			<h2 id="animals-heading">Animals</h2>

			<!-- TODO 4: The details panel and the details error go here. -->

			<p v-if="!loading && !error" id="animal-count">
				{{ availableCount }} of {{ animals.length }} animals are available for adoption.
			</p>

			<AnimalControls
				:active-filter="activeFilter"
				@filter="setFilter"
				@sort="setSort"
			/>

			<div id="animal-list" aria-live="polite">
				<p v-if="loading">Loading animals...</p>
				<p v-else-if="error" class="error-message">{{ error }}</p>
				<p v-else-if="visibleAnimals.length === 0" class="empty-message">
					There are no animals to show.
				</p>
				<div v-else>
					<!-- TODO 4: Listen for the card's details event. -->
					<AnimalCard
						v-for="animal in visibleAnimals"
						:key="animal.id"
						:animal="animal"
						@toggle="toggleAdoption(animal)"
					/>
				</div>
			</div>
		</section>
	</main>
</template>
