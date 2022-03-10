const Petshop = require("../modules/petshop");
const Product = require("../modules/product");
const petshops = require("./petfood.json");
//
const db = require("../modules/app");
const Role = db.role;
require("../../database");

const addPetshopsAndProducts = async () => {
  try {
    for (let petshop of petshops) {
      const newPetshop = await new Petshop(petshop).save();
      petshop.produtos.map((p) => console.log(p));
      await Product.insertMany(
        petshop.produtos.map((p) => ({ ...p, petshop_id: newPetshop._id }))
      );
    }
    console.log("Arquivo subido com sucesso");
  } catch (error) {
    console.log("este aqui foi o erro" + error);
  }
};

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("usuário adicionado à coleção de funções");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("moderador adicionado á coleção de funções");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("admin adicionado á coleção de funçoes");
      });
    }
  });
}
addPetshopsAndProducts();
initial();
