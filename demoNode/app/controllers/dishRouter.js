var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
module.exports = {
    /**
     * @description it add the dish
     * @param {type} req : object of the dish which needs to create
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    addDish: function (req, res) {
        var newDish = req.body;

        models.dish.create(newDish).then(function (dish) {
            return res.json({
                success: true,
                message: appMessage.dish.success.dishCreated,
                dish: dish
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
     *@description it returs all the dishes in the system
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getDishList: function (req, res) {
        console.log('getDishDetail')
        models.dish.findAll().then(function (dishes) {
            return res.json({
                success: true,
                message: appMessage.dish.success.listOfdishes,
                dishList: dishes
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
     *@description delete all dishes
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deleteAllDish: function (req, res) {
        models.dish.destroy({where: {}}).then(function (dishes) {
            return res.json({
                success: true,
                message: appMessage.dish.success.alldishDeleted,
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
     * @description get description of individual dish
     * @param {type} req : param consists id of the dish
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getDishDetail: function (req, res) {
        var dishId = req.params.id;
        models.dish.findById(dishId).then(function (dish) {
            if (dish != null) {
                return res.json({
                    success: true,
                    message: appMessage.dish.success.dishDetail,
                    dishDetail: dish
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound,
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
     * @description delete the dish 
     * @param {type} req : param consists id of the dish
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deleteDish: function (req, res) {
        var dishId = req.params.id;
        models.dish.destroy({where: {"dishId": dishId}}).then(function (dish) {
            if (dish == 1) {
                return res.json({
                    success: true,
                    message: appMessage.dish.success.dishDeleted,
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound,
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
     * @description update dish data of the passed id
     * @param {type} req : it contains id in params and also object of data which needs to update
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    udpateDishDetail: function (req, res) {
        var dishId = req.params.id;
        var updateData = req.body;
        models.dish.update(updateData, {where: {"dishId": dishId}}).then(function (dish) {
            console.log(dish, 'f')
            if (dish == 1) {
                return res.json({
                    success: true,
                    message: appMessage.dish.success.dishDetailUpdated,
                });
            } else {
                return res.json({
                    success: false,
                    message: appMessage.common.error.detailNotFound,
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
