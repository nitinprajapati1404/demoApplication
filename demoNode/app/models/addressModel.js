"use strict";

module.exports = function (sequelize, DataTypes) {
    var myaddress = sequelize.define("myaddress", {
        addressId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        addressDesc: {type: DataTypes.STRING},
        cityName: {type: DataTypes.STRING},
        countryName: {type: DataTypes.STRING},
        pincode: {type: DataTypes.STRING},
        phoneNumber: {type: DataTypes.STRING},
        alternetPhoneNumber: {type: DataTypes.STRING},
        emailId: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    });
    return myaddress;
};