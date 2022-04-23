const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("should return a string description for a valid breed via callback", (done) => {
    fetchBreedDescription("sib", (error, description) => {
      assert.equal(error, null);
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(description.trim(), expectedDesc);
      done();
    });
  });

  it("should return null description for an invalid breed via callback", (done) => {
    fetchBreedDescription("hn", (error, description) => {
      assert.equal(description, null);
      const expectedError = `Breed "hn" not found!!!`;
      assert.equal(error.trim(), expectedError);
      done();
    });
  });
});
