// if statements all false

if ( false || null ||
    undefined || "" || 0 || NaN) {
        console.log("This line won't ever execute");
    }
else {
    console.log("All false");
}