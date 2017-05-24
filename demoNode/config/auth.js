/*
 * Authencation middleware with session
 
 * list of allowed URLs without login
 */
var jwt = require('jsonwebtoken');
var allowed = [
    '/users/activate',
    '/users/login',
    '/users/signup',
    '/users/forgot-password',
    '/config/set-default-master-data',
//    '/project-dashboard',
    '/sqs/getQueues',
    '/sqs/add',
    '/sqs/view',
    '/sqs/getQueueUrl',
    '/sqs/message/send',
    '/sqs/message',
    's3-bucket-list'
];

/**
 *  middleware enabled or not
 * @type Boolean
 */
var enabled = true;
function checkIfRouteExistInAllowedList(route){
    var evens = _.filter(allowed, function(obj){
        return route.indexOf(obj) !== -1;
    });
    if(evens.length > 0){
        return true;
    } else {
        return false;
    }
}

/**
 * the middleware function
 * @param {type} onoff : to enable momoddleware
 * @returns {Function}
 */
module.exports = function (onoff) {
    enabled = (onoff == 'on') ? true : false;
    
    return function (req, res, next) {
        var originalUrlAllowed = checkIfRouteExistInAllowedList(req.originalUrl);
        var token = req.body.token || req.params.token || req.headers['x-hgl-access-token'];
        if (enabled && (originalUrlAllowed === false)) {
            // check header or url parameters or post parameters for token
            var token = req.body.token || req.params.token || req.headers['x-hgl-access-token'];
            // decode token
            if (token)
            {
                // verifies secret and checks exp
                jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
                    if (err)
                    {
                        return res.status(401).json({success: false, message: 'Failed to authenticate token.'});
                    } else
                    {
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;
                        global.requestUserId = decoded.id;
                        next();
                    }
                });
            } else
            {
                // if there is no token
                // return an error
                return res.status(401).send({
                    success: false,
                    message: 'No token provided.'
                });

            }
        } else {

            next();
        }
    }
};

