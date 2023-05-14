const router = require('express').Router();
const { sellBulkTicket, sellSingleTicket } = require('./controllers');

// router.get('/t/:id');
// router.put('/t/:id');
// router.delete('/t/:id');

router.route('/t/:id').get().put().delete();

// router.get('/u/:username');
// router.put('/u/:username');
// router.delete('/u/:username');

router.route('/u/:username').get().put().delete();

router.post('/bulk', sellBulkTicket);
router.get('/draw');

// router.post('/');
// router.get('/');

router.route('/').get().post(sellSingleTicket);

module.exports = router;
