"use strict";

module.exports = function (sequelize, DataTypes) {
    var contactus = sequelize.define("contactus", {
        contactId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        contactName: {type: DataTypes.STRING},
        ConatctLastName: {type: DataTypes.STRING},
        contactEmailId: {type: DataTypes.STRING},
        contactPhone: {type: DataTypes.STRING},
        InquiryProductName: {type: DataTypes.STRING},
        InfoDesc: {type: DataTypes.STRING},
        contactedUser: {type: DataTypes.BOOLEAN, defaultValue: false},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
        isDelete: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        timestamps: true
    });
    return contactus;
};
module.exports = function (sequelize, DataTypes) {
    var myaddress = sequelize.define("myaddress", {
        addressId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        addressDesc: {type: DataTypes.STRING},
        phoneNumber: {type: DataTypes.STRING},
        alternetPhoneNumber: {type: DataTypes.STRING},
        emailId: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    });
    return myaddress;
};