"use strict";

module.exports = function (sequelize, DataTypes) {
    var contactus = sequelize.define("contactus", {
        contactId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        contactName: {type: DataTypes.STRING},
        InquiryProductName: {type: DataTypes.STRING},
        InfoDesc: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
        isDelete: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        timestamps: true
    });
    return contactus;
};