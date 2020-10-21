const mongoose = require('../connection');
const Schema = mongoose.Schema;

const partySchema = new Schema({
	name: { type: String, required: true },
	partymembers: [
		{
			ref: 'PartyMember',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
