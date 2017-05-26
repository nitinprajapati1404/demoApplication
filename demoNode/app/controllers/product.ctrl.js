var bcrypt = require("bcrypt-nodejs");
var _ = require('lodash');
var multiparty = require('multiparty');
var helper = require("../helpers/_helpers");
var allAttributesOfProduct = [
    'productId',
    'productName',
    'productShortDesc',
    'productDesc',
    'productThumbImage',
    [models.sequelize.fn('CONCAT', process.env.CONTENT_URL_PRODUCT, models.sequelize.col('productThumbImageRandom')), 'productThumbImageRandom'],
    'productHomePageImage',
    [models.sequelize.fn('CONCAT', process.env.CONTENT_URL_PRODUCT, models.sequelize.col('productHomePageImageRandom')), 'productHomePageImageRandom'],
    'productCatelog',
    [models.sequelize.fn('CONCAT', process.env.CONTENT_URL_CATLOG, models.sequelize.col('productCatelogRandom')), 'productCatelogRandom'],
    "showOnHomePage"
];

module.exports = {
    // add product 
    addProduct: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.productThumbImage, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content/product');
                    req.body['productThumbImage'] = pictureName[0];
                    req.body['productThumbImageRandom'] = pictureName[1];
                });
                _.each(files.productHomePageImage, function (profilePic) {
                    var imageName = helper.uplaodFile(profilePic, 'content/catlog');
                    req.body['productHomePageImage'] = imageName[0];
                    req.body['productHomePageImageRandom'] = imageName[1];
                });
                _.each(files.productCatelog, function (profilePic) {
                    var catlogName = helper.uplaodFile(profilePic, 'content/catlog');
                    req.body['productCatelog'] = catlogName[0];
                    req.body['productCatelogRandom'] = catlogName[1];
                });
            }
            models.product.create(req.body).then(function (product) {
                return res.json({
                    success: true,
                    message: "Product uploaded Successfully",
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
// get all products list
    getAllProducts: function (req, res) {
        models.product.findAll({attributes: allAttributesOfProduct}).then(function (products) {
            return res.json({
                success: true,
                message: "All Product List",
                products: products
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    //get individual product Information
    getIndividualProductInfo: function (req, res) {
        models.product.findById(req.params.id, {attributes: allAttributesOfProduct,
            include: [{model: models.productImages, attributes: [
                        "productImageId",
                        "image",
                        [models.sequelize.fn('CONCAT', process.env.CONTENT_URL_PRODUCT, models.sequelize.col('imageRandom')), 'imageRandom'],
                    ]}]


        }).then(function (product) {
            if (product != null) {
                return res.json({
                    success: true,
                    message: "Products Information",
                    product: product
                });
            } else {
                return res.json({
                    success: false,
                    message: "No Product found",
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
    //update product 
    updateProduct: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            req.files = files;
            if (!_.isEmpty(files)) {
                _.each(files.productThumbImage, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content/product');
                    req.body['productThumbImage'] = pictureName[0];
                    req.body['productThumbImageRandom'] = pictureName[1];
                });
                _.each(files.productHomePageImage, function (profilePic) {
                    var imageName = helper.uplaodFile(profilePic, 'content/catlog');
                    req.body['productHomePageImage'] = imageName[0];
                    req.body['productHomePageImageRandom'] = imageName[1];
                });
                _.each(files.productCatelog, function (profilePic) {
                    var catlogName = helper.uplaodFile(profilePic, 'content/catlog');
                    req.body['productCatelog'] = catlogName[0];
                    req.body['productCatelogRandom'] = catlogName[1];
                });
            }
            models.product.update(req.body, {where: {"productId": req.params.id}}).then(function (product) {
                return res.json({
                    success: true,
                    message: "Product updated Successfully",
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
    //delete individual product
    deleteProduct: function (req, res) {

        models.product.destroy({where: {"productId": req.params.id}}).then(function (product) {
            if (product == 1) {
                return res.json({
                    success: true,
                    message: "product has been deleted",
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
    },
    // add multiple images to the product for the gallary
    addMultipleImagesToProduct: function (req, res) {
        var isError = false;
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            _.each(fields, function (val, key) {
                req.body[key] = parseInt(val[0]);
            });
            req.files = files;
            var allImages = [];
            var totalDocLength = 0;
            if (!_.isEmpty(files)) {
                totalDocLength = files.image.length;
                _.each(files.image, function (profilePic) {
                    var pictureName = helper.uplaodFile(profilePic, 'content/product');
                    allImages.push(pictureName);
                });
            }
            if (totalDocLength > 0) {
                var count = 0;
                _.each(allImages, function (image) {

                    req.body['image'] = image[0];
                    req.body['imageRandom'] = image[1];
                    models.productImages.create(req.body).then(function (product) {
                        count++;
                        if ((count == totalDocLength) && !isError) {

                            return res.json({
                                success: true,
                                message: "Product images uploaded Successfully",
                            })
                        }
                    }).catch(Sequelize.ValidationError, function (err) {
                        isError = true;
                        if (count == totalDocLength) {
                            return res.json({
                                success: false,
                                message: err.message
                            });
                        }

                    }).catch(function (err) {
                        isError = true;
                        if (count == totalDocLength) {
                            return res.json({
                                success: false,
                                message: err.message
                            });
                        }

                    });
                })
            } else {
                return res.json({
                    success: false,
                    message: "No Images uploaded."
                })
            }

        })
    },
    //get all Images of a product for gallery
    getAllImagesOfProduct: function (req, res) {
        models.productImages.findAll({productId: req.params.id}).then(function (products) {
            return res.json({
                success: true,
                message: "All Images of Product.",
                products: products
            });
        }).catch(Sequelize.ValidationError, function (err) {
            return res.status(422).send(err.errors);
        }).catch(function (err) {
            return res.status(400).send({
                message: err.message
            });
        });
    },
    //delete individual of the image
    removeIndividualProductImage: function (req, res) {
        models.productImages.destroy({where: {"productImageId": req.params.id}}).then(function (product) {
            if (product == 1) {
                return res.json({
                    success: true,
                    message: "Image has been deleted",
                });
            } else {
                return res.json({
                    success: false,
                    message: "Something wrong in image",
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
