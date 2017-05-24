"use strict";

module.exports = function (sequelize, DataTypes) {
    var productImages = sequelize.define("productImages", {
        productImageId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        image: {type: DataTypes.STRING},
        imageRandom: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
        isDelete: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        timestamps: true,
        classMethods: {
            associate: function (models) {
                productImages.belongsTo(models.product, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name: "productId",
                        notEmpty: false
                    }
                });
            }
        }
    });
    return productImages;
};