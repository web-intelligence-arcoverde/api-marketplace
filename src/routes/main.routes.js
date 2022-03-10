const express = require("express");
const app = express();
const router = express.Router();

const Petshop = require("../modules/petshop");
const Product = require("../modules/product");
router.get("/petshops", async (req, res, next) => {
  try {
    const petshops = await Petshop.find();
    res.json(petshops);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});
router.get("/petshops/:id", async (req, res, next) => {
  try {
    const petshop = await Petshop.findById(req.params.id);

    const product = await Product.find({ petshop_id: petshop.id });

    res.json({ error: false, petshop: { ...petshop._doc, product } });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.post("/purchase", async (req, res) => {
  try {
    const transaction = await createSplitTransaction(req.body);
    res.json(transaction);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});


//definição de rotas de autenticação 

const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
};

module.exports = router;
