<script setup>
// App owns the current filter. The controls only need it to highlight the
// matching button.
defineProps({
	activeFilter: String,
});

// The controls don't change the filter or sort themselves. They tell App
// what the user picked, and App changes its data.
const emit = defineEmits(["filter", "sort"]);

// event.target is the <select>, and its value is the option the user picked.
function onSortChange(event) {
	emit("sort", event.target.value);
}
</script>

<template>
	<div class="controls">
		<div class="filters" role="group" aria-label="Filter animals">
			<button
				type="button"
				:class="{ active: activeFilter === 'all' }"
				@click="emit('filter', 'all')"
			>
				All
			</button>
			<button
				type="button"
				:class="{ active: activeFilter === 'available' }"
				@click="emit('filter', 'available')"
			>
				Available
			</button>
			<button
				type="button"
				:class="{ active: activeFilter === 'adopted' }"
				@click="emit('filter', 'adopted')"
			>
				Adopted
			</button>
		</div>

		<label for="sort-animals">Sort by:</label>
		<select id="sort-animals" @change="onSortChange">
			<option value="default">Original order</option>
			<option value="name">Name</option>
			<option value="age">Age</option>
		</select>
	</div>
</template>
