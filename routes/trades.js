const express = require('express');
const router = express.Router();
const {createTrades,  updateTrade, getTradeByID, deleteTrade, getTrades} = require('../controllers/trades')

router.post("/trades", createTrades);
router.delete("/trades/:tradeId", deleteTrade);
router.put("/trades/:tradeId", updateTrade);
router.get("/trades", getTrades);
router.get("/trades/:tradeId", getTradeByID);

module.exports = router;
