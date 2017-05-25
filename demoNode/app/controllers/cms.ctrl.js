var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
var multiparty = require('multiparty');
var helper = require("../helpers/_helpers");
module.exports = {
    // add cms page
    addCms: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.cmspagebanner, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content');
                    req.body['cmspagebanner'] = pictureName[0];
                    req.body['cmspagebannerRandom'] = pictureName[1];
                });
            }
            models.cms.create(req.body).then(function (product) {
                return res.json({
                    success: true,
                    message: "Cms Page added Succesfully.",
                    product: product
                });
            }).catch(Sequelize.ValidationError, function (err) {
                return res.json({
                    success: true,
                    message: "something wrong.",
                });
            }).catch(function (err) {
                return res.status(400).send({
                    message: err.message
                });
            });

        })
    },
    // update cms page
    updateCms: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.productThumbImage, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content');
                    req.body['cmspagebanner'] = pictureName[0];
                    req.body['cmspagebannerRandom'] = pictureName[1];
                });
            }
            models.cms.update(req.body, {where: {"cmsId": req.params.id}}).then(function (page) {
                return res.json({
                    success: true,
                    message: "page updated Successfully",
                });
            }).catch(Sequelize.ValidationError, function (err) {
                return res.json({
                    success: true,
                    message: "something wrong.",
                });
            }).catch(function (err) {
                return res.status(400).send({
                    message: err.message
                });
            });

        })
    },
    // get individual cms page info 
    getCmsPage: function (req, res) {
        console.log(req.params.id)
        models.cms.findById(req.params.id).then(function (cmspage) {
            if (cmspage != null) {
                return res.json({
                    success: true,
                    message: "CMS page Information",
                    cmspage: cmspage
                });
            } else {
                return res.json({
                    success: false,
                    message: "No cms found",
                });
            }

        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    //get All cms page
    getAllCmsPage: function (req, res) {
        models.cms.findAll().then(function (pages) {
            if (pages != null) {
                return res.json({
                    success: true,
                    message: "All CMS pages",
                    pages: pages
                });
            } else {
                return res.json({
                    success: false,
                    message: "No cms found",
                });
            }

        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    //remove cms page
    removeCms: function (req, res) {
        models.cms.destroy({where: {"cmsId": req.params.id}}).then(function (cmspage) {
            if (cmspage == 1) {
                return res.json({
                    success: true,
                    message: "cms page has been deleted",
                });
            } else {
                return res.json({
                    success: false,
                    message: "Something wrong in product",
                });
            }

        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    }
};
