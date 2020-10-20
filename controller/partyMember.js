const partyMember = require('../models/partyMember');
const { Router } = require('express');
const router = Router();

// index route
router.get('/', async (req, res) => {
	res.json(await partyMember.find({}));
});

// show single party member
router.get('/:name', async (req, res) => {
	res.json(await partyMember.find({ name: req.params.name }));
});

//create route
router.post('/', async (req, res) => {
	res.json(await partyMember.create(req.body));
});

//update route
router.put('/:name', async (req, res) => {
	res.json(
		await partyMember.findOneAndUpdate({ name: req.params.name }, req.body, {
			new: true,
		})
	);
});

//delete route
router.delete('/:name', async (req, res) => {
	res.json(await partyMember.findOneAndDelete({ name: req.params.name }));
});

module.exports = router;
