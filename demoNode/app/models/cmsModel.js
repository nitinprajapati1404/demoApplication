"use strict";

module.exports = function (sequelize, DataTypes) {
    var promo = sequelize.define("cms", {
        cmsId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        cmsName: {type: DataTypes.STRING},
        cmsDisplayName: {type: DataTypes.STRING},
        cmsShortDesc: {type: DataTypes.STRING},
        cmsLongDesc: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: true,
    });
    return promo;
};