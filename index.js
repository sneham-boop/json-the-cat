const args = process.argv.slice(2);
const breed = args[0];
const { fetchBreedDescription } = require("./breedFetcher.js");

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log("error: ", error);
    return;
  }
  console.log(description);
});
