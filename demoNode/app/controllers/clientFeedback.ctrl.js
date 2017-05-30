var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
var multiparty = require('multiparty');
var helper = require("../helpers/_helpers");
var allAttributesOfClient = [
    'clientId',
    'clientName',
    'clientPosition',
    'clientFeedback',
    'clientImage',
    [models.sequelize.fn('CONCAT', process.env.CONTENT_URL_CLIENT, models.sequelize.col('clientImageRandom')), 'productThumbImageRandom']
];

module.exports = {
    // add client feedback
    addClientFeedback: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.clientImage, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content/clientImages');
                    req.body['clientImage'] = pictureName[0];
                    req.body['clientImageRandom'] = pictureName[1];
                }); 
            }
            models.clientsFeedBack.create(req.body).then(function (feedback) {
                return res.json({
                    success: true,
                    message: "Product uploaded Successfully",
                    feedback: feedback
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
        })

    },
// get all client feedbacklist
    getAllClientFeedback: function (req, res) {
        models.clientsFeedBack.findAll({attributes: allAttributesOfClient}).then(function (feedbacks) {
            return res.json({
                success: true,
                message: "All client feedback",
                feedbacks: feedbacks
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    getIndividualClientFeedback: function (req, res) {
        models.clientsFeedBack.findById(req.params.id,{attributes: allAttributesOfClient}).then(function (feedback) {
            return res.json({
                success: true,
                message: "get client feedback",
                feedback: feedback
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
  
    //update feedback
    updateClientFeedback: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.clientImage, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content/clientImages');
                    req.body['clientImage'] = pictureName[0];
                    req.body['clientImageRandom'] = pictureName[1];
                }); 
            }
            models.clientsFeedBack.update(req.body, {where: {"clientId": req.params.id}}).then(function (feedback) {
                return res.json({
                    success: true,
                    message: "Client feedback updated Successfully",
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
        })

    },
    //delete individual feedback
    deleteClientFeedback: function (req, res) {

        models.clientsFeedBack.destroy({where: {"clientId": req.params.id}}).then(function (feedback) {
            if (feedback == 1) {
                return res.json({
                    success: true,
                    message: "feedback has been deleted",
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
    }
};
