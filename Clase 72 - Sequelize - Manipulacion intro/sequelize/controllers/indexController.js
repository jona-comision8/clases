let db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  index: (req, res) => {
    db.Songs.findAll({
      order: [["id", "DESC"]],
      limit: 50,
    }).then((songs) => {
      res.render("index", {
        title: "Musimundos",
        songs,
      });
    });
  },
  detail: (req, res) => {
    /*  db.Songs.findOne({
            where: {
                id: req.params.id
            }
        }) */
    db.Songs.findByPk(req.params.id).then((song) => {
      res.render("detail", {
        title: song.nombre,
        song,
      });
    });
  },
  search: (req, res) => {
    db.Songs.findAll({
      where: {
        nombre: {
          [Op.like]: `%${req.query.search}%`,
        },
      },
    }).then((songs) => {
      res.render("results", {
        title: req.query.search,
        songs,
      });
    });
  },
  add: (req, res) => {
    res.render("songAdd", {
      title: "Agregar canción",
    });
  },
  create: (req, res) => {
    db.Songs.create({
      nombre: req.body.nombre,
      milisegundos: +req.body.milisegundos,
      compositor: req.body.compositor,
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  },
  edit: (req, res) => {
    db.Songs.findByPk(req.params.id)
      .then((song) => {
        res.render("songEdit", {
          title: `Estas editando la cancion ${song.nombre}`,
          song,
        });
      })
      .catch((err) => console.log(err));
  },
  update: (req, res) => {
    db.Songs.update(
      {
        nombre: req.body.nombre,
        milisegundos: +req.body.milisegundos,
        compositor: req.body.compositor,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  },
  destroy: (req, res) => {
    db.Songs.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  },
};
