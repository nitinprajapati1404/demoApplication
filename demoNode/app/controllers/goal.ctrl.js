var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
var multiparty = require('multiparty');
var helper = require("../helpers/_helpers");
module.exports = {
    // add goal 
    addgoal: function (req, res) {
        models.goals.create(req.body).then(function (goal) {
            return res.json({
                success: true,
                message: "goal added Successfully.",
                goal: goal
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
    // update cms page
    updateGoal: function (req, res) {
        models.goals.update(req.body, {where: {"goalId": req.params.id}}).then(function (goal) {
            return res.json({
                success: true,
                message: "goal updated Successfully",
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
    //get All Goals from home page it will send 0 and from about us page send 1
    getAllGoal: function (req, res) {
        models.goals.findAll().then(function (goals) {
            return res.json({
                success: true,
                message: "get all goals.",
                goals: goals
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });

    },
    getGoalInfo: function (req, res) {
        models.goals.findById(req.params.id).then(function (goal) {
            return res.json({
                success: true,
                message: "get goal Info.",
                goal: goal
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });

    },
    //remove goal page
    removeGoal: function (req, res) {
        models.goals.destroy({where: {"goalId": req.params.id}}).then(function (goal) {
            if (goal == 1) {
                return res.json({
                    success: true,
                    message: "goal has been deleted",
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
    //add newlatter
    addNewsLatter: function (req, res) {
        models.newslatter.create(req.body).then(function (newslater) {
            return res.json({
                success: true,
                message: "newsLatter added Successfully.",
                newslater: newslater
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
    getAllNewsLatters: function (req, res) {
        models.newslatter.findAll().then(function (newslaters) {
            return res.json({
                success: true,
                message: "News Latters List.",
                newslaters: newslaters
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });

    },
    //remove news later
    removeNewsLatter: function (req, res) {
        models.newslatter.destroy({where: {"newslatterId": req.params.id}}).then(function (newslater) {
            if (newslater == 1) {
                return res.json({
                    success: true,
                    message: "newslater has been deleted",
                });
            } else {
                return res.json({
                    success: false,
                    message: "Something wrong",
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
