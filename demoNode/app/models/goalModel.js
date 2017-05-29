"use strict";

module.exports = function (sequelize, DataTypes) {
    var goal = sequelize.define("goals", {
        goalId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        goalTitle: {type: DataTypes.STRING},
        goalDesc: {type: DataTypes.STRING},
        isGoal: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return goal;
};
