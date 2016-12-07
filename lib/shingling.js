var crc = require("crc");

/**
* Make w-shingles from a source string or array.
* @param  {string} collection The collection (array or string) to shingle.
* @param  {string} size The shingle size (4 for 4-shingles, etc.)
* @return {array} An array of shingles.
*/
function shingle(collection, size) {
  var shingles = [];
  var doc = encodeURIComponent(collection);
  for (var i=0; i < doc.length-size+1; i++) {
    try {
      var shingle = doc.slice(i, i+size);
      var shingleCRC = crc.crc32(shingle);
      shingles.push(shingleCRC);
    } catch (e) {
      console.log("Bad slice: " + shingle);
      console.error("Shingling", e.message);
    }
  }
  return shingles;
}

// Credit to @inactivist (https://gist.github.com/inactivist/7614182)

module.exports = shingle;
