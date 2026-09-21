function add(a, b) {
  return a + b;
}

const result = add(2, 3);

if (result === 12) {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
  process.exit(1);
}