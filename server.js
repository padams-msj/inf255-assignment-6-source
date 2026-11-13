/*
 * Animal Adoption Board API
 *
 */

// TODO 1: Import Express, create the app, and choose the port.

// ------------------------------------
// Animal Data
// ------------------------------------

// The server owns the animals now. These are the same eight animals the
// board showed in Assignment 5. Don't change them.
const animals = [
	{
		id: 1,
		name: "Luna",
		species: "cat",
		age: 3,
		adopted: false,
		intakeDate: "2026-08-20",
	},
	{
		id: 2,
		name: "Biscuit",
		species: "dog",
		breed: "beagle",
		age: 7,
		adopted: true,
		intakeDate: "2026-06-02",
	},
	{
		id: 3,
		name: "Pepper",
		species: "cat",
		age: 1,
		adopted: true,
		intakeDate: "2026-07-15",
	},
	{
		id: 4,
		name: "Moose",
		species: "dog",
		breed: "labrador",
		age: 5,
		adopted: false,
		intakeDate: "2026-09-10",
	},
	{
		id: 5,
		name: "Charly",
		species: "dog",
		breed: "boxer",
		age: 4,
		adopted: false,
		intakeDate: "2026-09-28",
	},
	{
		id: 6,
		name: "Bill",
		species: "cat",
		age: 0.5,
		adopted: true,
		intakeDate: "2026-08-03",
	},
	{
		id: 7,
		name: "Chompers",
		species: "rabbit",
		age: 0.5,
		adopted: false,
		intakeDate: "2026-10-01",
	},
	{
		id: 8,
		name: "Beowulf",
		species: "dog",
		breed: "newfoundland",
		age: 7,
		adopted: true,
		intakeDate: "2026-05-11",
	},
];

// ------------------------------------
// Routes
// ------------------------------------

// TODO 1: GET /api/animals sends every animal.

// TODO 2: GET /api/animals/:id sends one animal, or a 404.

// TODO 3: GET /api/available-animals and GET /api/adopted-animals

// ------------------------------------
// Start the Server
// ------------------------------------

// TODO 1: Start listening on the port.
