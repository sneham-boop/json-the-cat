const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const PATH = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(PATH, (error, response, body) => {
    // Parse data from received body
    const data = JSON.parse(body);
    //console.log(error);
    error = error || `Breed "${breedName}" not found!!!`;
    // Check for a valid breed
    const breedObject = data[0];
    let breedDescription = null;

    if (breedObject) {
      breedDescription = breedObject.description;
      error = null;
    }

    callback(error, breedDescription);
  });
};

module.exports = {
  fetchBreedDescription,
};
