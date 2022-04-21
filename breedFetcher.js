const args = process.argv.slice(2);
const request = require("request");

const breed = args[0];
const PATH = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(PATH, (error, response, body) => {
  // Print the error
  if (error) {
    return console.log("error:", error);
  }

  // Parse data from received body
  const data = JSON.parse(body);

  // Check for a valid breed
  const breedObject = data[0];
  if (!breedObject) {
    return console.log("Breed not found!!!", breed);
  }

  console.log(breedObject.description);
});
