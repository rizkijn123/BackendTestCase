const getMusic = "SELECT * FROM Artist";
const getMusicById = "SELECT * FROM Artist WHERE id = $1";
const addMusic =
  "INSERT INTO Artist (artistname,packagename,imageurl,releasedate,sampleurl,price) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteMusic = "DELETE FROM Artist WHERE id = $1";
const updateMusic =
  "UPDATE Artist SET artistname = $1, packagename = $2, imageurl = $3, releasedate = $4, sampleurl = $5, price = $6 WHERE id = $7";
module.exports = {
  getMusic,
  getMusicById,
  addMusic,
  deleteMusic,
  updateMusic,
};
