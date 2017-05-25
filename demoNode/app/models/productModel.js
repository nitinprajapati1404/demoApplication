"use strict";

module.exports = function (sequelize, DataTypes) {
    var products = sequelize.define("product", {
        productId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        productName: {type: DataTypes.STRING},
        productDesc: {type: DataTypes.STRING},
        productThumbImage: {type: DataTypes.STRING},
        productThumbImageRandom: {type: DataTypes.STRING},
        productHomePageImage: {type: DataTypes.STRING},
        productHomePageImageRandom: {type: DataTypes.STRING},
        productCatelog: {type: DataTypes.STRING},
        productCatelogRandom: {type: DataTypes.STRING},
        showOnHomePage: {type: DataTypes.BOOLEAN, defaultValue: false},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
        isDelete: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        timestamps: true,
        classMethods: {
            associate: function (models) {
                products.hasMany(models.productImages, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name: "productId",
                        notEmpty: false
                    }
                });
            }
        }
    });
    return products;
};