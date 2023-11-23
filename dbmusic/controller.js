const pool = require("../db/db");
const query = require("./queries");
const getMusic = (req, res) => {
  pool.query(query.getMusic, (error, results) => {
    if (error) {
      res.send("error " + error);
    } else if (results.rows.length === 0) {
      res.status(200).json({ status: "error", message: "Belum ada data" });
    } else {
      res.status(200).json({ status: "success", data: results.rows });
    }
  });
};
const getMusicById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getMusicById, [id], (error, results) => {
    if (error) {
      res.status(200).json({ status: "error", message: error });
    } else if (results.rows.length === 0) {
      res
        .status(200)
        .json({ status: "error", message: "Data tidak ditemukan" });
    } else {
      res.status(200).json({ status: "success", data: results.rows });
    }
  });
};

const addMusic = (req, res) => {
  const { artistname, packagename, imageurl, releasedate, sampleurl, price } =
    req.body;
  pool.query(
    query.addMusic,
    [artistname, packagename, imageurl, releasedate, sampleurl, price],
    (error, results) => {
      if (error) {
        res.status(200).json({ status: "error", message: error });
      } else {
        res
          .status(201)
          .json({ status: "success", message: "Data berhasil ditambahkan" });
      }
    }
  );
};
const deleteMusic = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getMusicById, [id], (error, results) => {
    const notfoundmusic = !results.rows.length;
    if (notfoundmusic) {
      res
        .status(200)
        .json({ status: "error", message: "Data Tidak Ditemukan" });
    } else {
      pool.query(query.deleteMusic, [id], (error, results) => {
        if (error) {
          res.status(200).json({ status: "error", message: error });
        } else {
          res
            .status(200)
            .json({ status: "success", message: "Data Berhasil dihapus" });
        }
      });
    }
  });
};
const updateMusic = (req, res) => {
  const id = parseInt(req.params.id);
  const { artistname, packagename, imageurl, releasedate, sampleurl, price } =
    req.body;
  pool.query(query.getMusicById, [id], (error, results) => {
    const notfoundmusic = !results.rows.length;
    if (notfoundmusic) {
      res
        .status(200)
        .json({ status: "error", message: "Data Tidak Ditemukan" });
    } else {
      pool.query(
        query.updateMusic,
        [artistname, packagename, imageurl, releasedate, sampleurl, price, id],
        (error, results) => {
          if (error) {
            res.status(200).json({ status: "error", message: error });
          } else {
            res
              .status(200)
              .json({ status: "success", message: "Data Berhasil di Update" });
          }
        }
      );
    }
  });
};
module.exports = { getMusic, getMusicById, addMusic, deleteMusic, updateMusic };
