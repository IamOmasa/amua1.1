const Member = require('../models/Member')
const Amount = require('../models/Amount')

module.exports = {
    getIndex : async(req,res) => {
        try{
            const members = await Member.findById(req.params.id);
            const amounts = await Amountfind({members: req.params.id}).sort({createdAt: "desc"}).populate("member").lean()
            res.render("index.ejs",{membersList: members, amounts: amounts})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    createMember: async (req,res) => {
        const newMember = new Member(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                roles: req.body.roles,
                nationalId: req.body.nationalId


            }
        )
        try {
            await newMember.save()
            console.log(newMember)
            res.redirect("/")
        } catch (err) {
            if(err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}