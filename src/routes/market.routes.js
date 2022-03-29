const {
    createMarket,
    readMarket,
    deleteMarket,
    updateMarket,
    findMarketById,
} = require('../app/controllers/MarketController');

const express = require('express');
const router = express.Router();

router.route('/market').post(createMarket);
router.route('/market').get(readMarket);

router.route('/market/:id').delete(deleteMarket);
router.route('/market/:id').put(updateMarket);
router.route('/market/:id').get(findMarketById);

module.exports = router;
