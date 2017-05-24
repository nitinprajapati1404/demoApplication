var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
module.exports = {
    /**
     * @description it add the Leader
     * @param {type} req : object of the leader which needs to create
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    addLeader: function (req, res) {
        var newLeader = req.body;

        models.leader.create(newLeader).then(function (leader) {
            return res.json({
                success: true,
                message: appMessage.leader.success.leaderCreated,
                leader: leader
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
     *@description it returs all the Leaders of the system
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getLeaderList: function (req, res) {
        models.leader.findAll().then(function (leaders) {
            return res.json({
                success: true,
                message: appMessage.leader.success.listOfLeaders,
                leaders: leaders
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
     *@description delete all leaderes
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deleteAllLeaders: function (req, res) {
        models.leader.destroy({where: {}}).then(function (leaderes) {
            return res.json({
                success: true,
                message: appMessage.leader.success.allLeaderDeleted
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
     * @description get description of individual leader
     * @param {type} req : param consists id of the leader
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    getLeaderDetail: function (req, res) {
        var leaderId = req.params.id;
        models.leader.findById(leaderId).then(function (leader) {
            if (leader != null) {
                return res.json({
                    success: true,
                    message: appMessage.leader.success.leaderDetail,
                    leaderDetail: leader
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
     * @description update leader data of the passed id
     * @param {type} req : it contains id in params and also object of data which needs to update
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    udpateLeaderDetail: function (req, res) {
        var leaderId = req.params.id;
        var updateData = req.body;
        models.leader.update(updateData, {where: {"leaderId": leaderId}}).then(function (leader) {
            if (leader == 1) {
                return res.json({
                    success: true,
                    message: appMessage.leader.success.leaderDetailUpdated,
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
     * @description delete the leader 
     * @param {type} req : param consists id of the leader
     * @param {type} res : response object of the API
     * @returns {object} : response object
     */
    deleteLeader: function (req, res) {
        var leaderId = req.params.id;
        models.leader.destroy({where: {"leaderId": leaderId}}).then(function (leader) {
            if (leader == 1) {
                return res.json({
                    success: true,
                    message: appMessage.leader.success.leaderDeleted,
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
