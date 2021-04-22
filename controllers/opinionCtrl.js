const Opinions = require('../models/OpinionSchema');

const opinionCtrl = {
    getOpinions: async (req, res) => {
        try {
            
            const opinions = await Opinions.find()

            res.json({ opinions })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    createOpinion: async (req, res) => {
        try {
            
            const { title, body } = req.body;

            const newOpinion = new Opinions({
                title: title.toLowerCase(), body
            })

            await newOpinion.save()

            res.json({ msg: 'create' })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = opinionCtrl