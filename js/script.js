try {
	for (var i = 1; i > 0; i++) {
		if (i >= 1000) { throw new Error("Unavailable iterations count") }
	}
} catch(e) {
	// statements
	console.log(e);
}