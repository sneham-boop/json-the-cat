const args = process.argv.slice(2);
const request = require("request");

const breed = args[0];
const PATH = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(PATH, (error, response, body) => {
  console.log("error:", error); // Print the error
  console.log("statusCode:", response && response.statusCode); // Print status code

  // Check for valid breed
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch {
    console.log("I cannot find this breed right now");
  }
});
