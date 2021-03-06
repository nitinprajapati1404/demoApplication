"use strict";

module.exports = function (sequelize, DataTypes) {
    var cms = sequelize.define("cms", {
        cmsId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        cmsName: {type: DataTypes.STRING},
        cmsDisplayName: {type: DataTypes.STRING},
        cmsShortDesc: {type: DataTypes.TEXT},
        cmsLongDesc: {type: DataTypes.TEXT},
        cmspagebanner: {type: DataTypes.STRING},
        cmspagebannerRandom: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: true,
    });
    return cms;
};