try {
  console.log("A");
  throw new Error("Error Thrown");
} catch (e) {
  console.log("I will Only execute if an error is thrown");
  console.log("Error Caught: ", e.message);
} finally {
  console.log("I will execute irrespective of an error thrown");
}
