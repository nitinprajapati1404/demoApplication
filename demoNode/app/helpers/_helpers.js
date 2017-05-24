var _ = require('lodash');
var fs = require('fs');
var asyncLoop = require('node-async-loop');
var asyncLoop = require('node-async-loop');

var moment = require('moment');
var path = require('path');

module.exports = {
    handleErrorMessage: function (res, err) {
        return res.status(400).send({
            message: err.message
        });
    },
    formatErrors: function (errorsIn) {
        var errors = {};
        var a, e;

        for (a = 0; a < errorsIn.length; a++) {
            e = errorsIn[a];

            errors[e.property] = errors[e.property] || [];
            errors[e.property].push(e.msg);
        }
        return errors;
    },
    /**
     * @description To generate randem string
     * @param {type} len
     * @returns {module.exports.generateRandomString.token|String}
     */
    generateRandomString: function (len) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var token = '';
        for (var i = len; i > 0; --i) {
            token += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return token;
    },
    trimCommaFromString: function (str) {
        return str.replace(/(^[,\s]+)|([,\s]+$)/g, '');
    },
    createStringFromArray: function (arr, key) {
        return _.map(arr, function (obj) {
            return obj[key];
        }).join(', ');
    },
    createStringFromArrayWithSeperator: function (arr, key, seperator) {
        return _.map(arr, function (obj) {
            return obj[key];
        }).join(seperator);
    },
    combineKeyData: function (data) {
        var output = {}, item;
        for (var i = 0; i < data.length; i++) {
            item = data[i];
            for (var prop in item) {
                if (item.hasOwnProperty(prop)) {
                    if (!(prop in output)) {
                        output[prop] = [];
                    }
                    output[prop].push(parseFloat(Number(item[prop]).toPrecision()));
                }
            }
        }
        return output;
    },
    uplaodFile: function (profilePic,profilePath) {
        var tmpPath = profilePic.path; 
        //var imageName = uuid.v4() + (path.extname(profilePic.originalFilename)).toLowerCase(); 
        var imageName = module.exports.generateRandomString(4);
        var name = (profilePic.originalFilename).split('.')[0];
        var ext = path.extname(profilePic.originalFilename);
        imageName = (name + '_' + imageName + ext).replace(' ', '_'); 
        var targetPath = profilePath + '/' + imageName;

        fs.readFile(tmpPath, function (err, data) {
            fs.writeFile(targetPath, data, function (err) {
                if (err)
                    console.error(err.stack);
            });
        });
        
        return [name+ext,imageName];
    },
};
    