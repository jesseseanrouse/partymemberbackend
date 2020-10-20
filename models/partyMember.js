const {Schema, model} = require('mongoose')

// Party member Schema
const partyMemberSchema = new Schema(
    {
        name: String,
        weapon: String,
        race: String,
        armor: String,
        hidden: String,
        img: String
    },
    {timestamps: true}
)

const PartyMember = model("PartyMember", partyMemberSchema)
module.exports = PartyMember