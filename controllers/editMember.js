const Member = require('../models/Member')

module.exports = {
    getEdit: async (req,res) =>  {
        const id = req.params.id
        console.log(id)
        try {
            const members = await Member.find()
            res.render("editMember.ejs", {membersList: members, idMember: id})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    deleteItem: async (req,res) => {
        const id = req.params.id
        try {
            const result = await Member.findByIdAndDelete(id)
            console.log(result)
            res.redirect('back')
        } catch (err) {
            if (err) return res.status(500).send(err)
        } 
    },
    updateItem: async (req,res) => {
        const id = req.params.id
        try {
            await Member.findByIdAndUpdate(
               id,
               {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                roles: req.body.roles,
                nationalId: req.body.nationalId
               }
            )
            res.redirect('/');
        } catch (err) {
            if (err) return res.status(500).send(err)
            res.redirect('/');
        } 
    }
}