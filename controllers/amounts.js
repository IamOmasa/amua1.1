const Amount = require('../models/Amount');

module.exports = {
    // getAmount : async(req,res) => {
    //     try{
    //         const amounts = await Amount.find()
    //         res.render("index.ejs",{amountsList: amounts})
    //     } catch (err) {
    //         if (err) return res.status(500).send(err)
    //     }
    // },
    createAmount: async (req,res) => {
       const newAmount = new Amount(
        {
            amount: req.body.amount,
            member: req.params.id
            

        }
    )
    try {
        await newAmount.save()
        console.log(newAmount)
        res.redirect("/"+req.params.id)
    } catch (err) {
        if(err) return res.status(500).send(err)
        res.redirect("/")
    }
}
}