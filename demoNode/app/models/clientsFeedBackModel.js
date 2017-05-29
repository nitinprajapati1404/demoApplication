module.exports = function (sequelize, DataTypes) {
    var clientsFeedback = sequelize.define("clientsFeedBack", {
        clientId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        clientName: {type: DataTypes.STRING},
        clientPosition: {type: DataTypes.STRING},
        clientImage: {type: DataTypes.STRING},
        clientImageRandom: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return clientsFeedback;
};