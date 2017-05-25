var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
var multiparty = require('multiparty');
var helper = require("../helpers/_helpers");
module.exports = {
    // end user will fill his detail and enter here
    addContactUs: function (req, res) {
        models.contactus.create(req.body).then(function (contactus) {
            return res.json({
                success: true,
                message: "Your Inquiry submitted.",
                contactus: contactus
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.json({
                success: true,
                message: "something wrong.",
            });
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    // get all list of contact us
    getAllContactUs: function (req, res) {
        models.contactus.findAll().then(function (allContacts) {
            return res.json({
                success: true,
                message: "All Images of Product.",
                allContacts: allContacts
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    // view individual info
    getIndividualContactUs: function (req, res) {
        models.contactus.findById(req.params.id).then(function (contact) {
            return res.json({
                success: true,
                message: "Individual contact info.",
                contact: contact
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    // remove pereson
    removeContactUs: function (req, res) {
        models.contactus.destroy({where: {"contactId": req.params.id}}).then(function (contact) {
            if (contact == 1) {
                return res.json({
                    success: true,
                    message: "contact has been deleted",
                });
            } else {
                return res.json({
                    success: false,
                    message: "Something wrong in product",
                });
            }

        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    // update detail
    updateContactUs: function (req, res) {
        models.contactus.update(req.body, {where: {"contactId": req.params.id}}).then(function (contact) {
            return res.json({
                success: true,
                message: "contact updated Successfully",
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.json({
                success: true,
                message: "something wrong.",
            });
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    }

};
