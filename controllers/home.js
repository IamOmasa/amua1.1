const Member = require('../models/Member')
const Amount = require('../models/Amount')

module.exports = {
    getIndex : async(req,res) => {
        try{
            const members = await Member.find();
            // const amounts = await Amount.find({members: req.params.id}).sort({createdAt: "desc"}).populate("member").lean()
            res.render("index.ejs",{membersList: members})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },

    getMember: async (req,res) => {
        try {
            const member = await Member.findById(req.params.id);
        const amounts = await Amount.find({member: req.params.id}).sort({createdAt: "desc"}).populate("member").lean();
        console.log(member)
        res.render("index.ejs", { member: member, amounts: amounts})
        } catch (err) {
            console.log(err)
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