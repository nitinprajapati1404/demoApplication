var controllers = require('../app/controllers')

/*  
 * **************************** Product Routing Start ************************************************************************
 */

app.post('/product', controllers.productRouter.addProduct);
app.get('/product', controllers.productRouter.getAllProducts);
app.get('/product/:id', controllers.productRouter.getIndividualProductInfo);
app.put('/product/:id', controllers.productRouter.updateProduct);
app.delete('/product/:id', controllers.productRouter.deleteProduct);
app.post('/addImagesOfProduct', controllers.productRouter.addMultipleImagesToProduct);
app.delete('/removeIndiImage/:id', controllers.productRouter.removeIndividualProductImage);
 

/*  
 * **************************** END ************************************************************************
 */
/*  
 * **************************** Product Routing Start ************************************************************************
 */

app.post('/cms', controllers.cmsRouter.addCms);
 

/*  
 * **************************** END ************************************************************************
 */
/*  
 * **************************** Dish Routing Start ************************************************************************
 */

app.post('/dishes', controllers.dishRouter.addDish);
app.get('/dishes', controllers.dishRouter.getDishList);
app.delete('/dishes', controllers.dishRouter.deleteAllDish);
app.get('/dishes/:id', controllers.dishRouter.getDishDetail);
app.put('/dishes/:id', controllers.dishRouter.udpateDishDetail);
app.delete('/dishes/:id', controllers.dishRouter.deleteDish);

/*  
 * **************************** END ************************************************************************
 */
/*  
 * **************************** Promotion Routing Start ************************************************************************
 */

app.post('/promotions', controllers.promoRouter.addPromotion);
app.get('/promotions', controllers.promoRouter.getPromotionList);
app.delete('/promotions', controllers.promoRouter.deleteAllPromotions);
app.get('/promotions/:id', controllers.promoRouter.getPromotionDetail);
app.put('/promotions/:id', controllers.promoRouter.udpatePromotionDetail);
app.delete('/promotions/:id', controllers.promoRouter.deletePromotion);

/*  
 * **************************** END ************************************************************************
 */
/*  
 * **************************** Leader Routing Start ************************************************************************
 */

app.post('/leadership', controllers.leaderRouter.addLeader);
app.get('/leadership', controllers.leaderRouter.getLeaderList);
app.delete('/leadership', controllers.leaderRouter.deleteAllLeaders);
app.get('/leadership/:id', controllers.leaderRouter.getLeaderDetail);
app.put('/leadership/:id', controllers.leaderRouter.udpateLeaderDetail);
app.delete('/leadership/:id', controllers.leaderRouter.deleteLeader);

/*  
 * **************************** END ************************************************************************
 */