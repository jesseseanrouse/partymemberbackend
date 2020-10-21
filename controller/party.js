// copied from fruit lab with minor edits
const express = require('express');
const mongoose = require('../db/connection');
const router = express.Router();
const Party = require('../models/party');
const PartyMember = require('../models/partyMember');

// Show Party
router.get('/', async (req, res) => {
	res.json(await Party.find({}).populate('partymembers'));
});

// Create Party
router.post('/', async (req, res) => {
	res.json(await Party.create(req.body));
});

// Update Party
router.put('/:partyId/addPartyMember/:partyMemberId', async (req, res) => {
	const party = await PartyMember.findById(
		req.params.id,
		(err, partyMember) => {
			if (err) {
			} else {
				Party.findByIdAndUpdate(
					req.params.partyId,
					{
						$push: {
							partymembers: partyMember.id,
						},
					},
					(err, party) => {
						if (err) {
						} else res.send(party);
					}
				);
			}
		}
	);
});

module.exports = router;
