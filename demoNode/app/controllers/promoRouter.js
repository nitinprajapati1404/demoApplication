var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
module.exports = {
    /**
     * @description it add the Promotion
     * @param {type} req : object of the promotion which needs to create
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    addPromotion: function (req, res) {
        var newPromotion = req.body;

        models.promo.create(newPromotion).then(function (promotion) {
            return res.json({
                success: true,
                message: appMessage.promotion.success.promotionCreated,
                promotion: promotion
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    /**
     *@description it returs all the Promotions of the system
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getPromotionList: function (req, res) {
        models.promo.findAll().then(function (promotions) {
            return res.json({
                success: true,
                message: appMessage.promotion.success.listOfpromotions,
                promotions: promotions
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    /**
     *@description delete all promotiones
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deleteAllPromotions: function (req, res) {
        models.promo.destroy({where: {}}).then(function (promotiones) {
            return res.json({
                success: true,
                message: appMessage.promotion.success.allpromotionDeleted,
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    /**
     * @description get description of individual promotion
     * @param {type} req : param consists id of the promotion
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getPromotionDetail: function (req, res) {
        var promotionId = req.params.id;
        models.promo.findById(promotionId).then(function (promotion) {
            console.log(promotion, 'promotion')
            if (promotion != null) {
                return res.json({
                    success: true,
                    message: appMessage.promotion.success.promotionDetail,
                    promotionDetail: promotion
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound
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
    /**
     * @description update promotion data of the passed id
     * @param {type} req : it contains id in params and also object of data which needs to update
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    udpatePromotionDetail: function (req, res) {
        var promotionId = req.params.id;
        var updateData = req.body;
        models.promotion.update(updateData, {where: {"promotionId": promotionId}}).then(function (promotion) {
            if (promotion == 1) {
                return res.json({
                    success: true,
                    message: appMessage.promotion.success.promotionDetailUpdated,
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound
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
    /**
     * @description delete the promotion 
     * @param {type} req : param consists id of the promotion
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deletePromotion: function (req, res) {
        var promotionId = req.params.id;
        models.promo.destroy({where: {"promotionId": promotionId}}).then(function (promotion) {
            if (promotion == 1) {
                return res.json({
                    success: true,
                    message: appMessage.promotion.success.promotionDeleted,
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound
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
};
