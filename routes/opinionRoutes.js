const router = require('express').Router();
const opinionCtrl = require('../controllers/opinionCtrl');

router.get('/', opinionCtrl.getOpinions);

router.post('/add', opinionCtrl.createOpinion);

module.exports = router