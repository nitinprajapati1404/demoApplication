module.exports = function (sequelize, DataTypes) {
    var newslatter = sequelize.define("newslatter", {
        newslatterId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        newslattereEmailId: {type: DataTypes.STRING},
        isActive: {type: DataTypes.BOOLEAN, defaultValue: true}
    },{
        timestamps: false,
    });
    return newslatter;
};