
app.factory('userService', ['$rootScope', '$location', function ($rootScope, $location) {
        var userData = {};
        var userInfo = {};

        /**
         * @description it checks whether user has last logged in time if
         * for instant we have requiement of 7 days  
         * if it is less then 7 days then update lastLoggedInTime else logout user
         */
        userData.checkSessionExpired = function () {
            var currentTime = new Date().getTime();
            var lastLoggedInTime = localStorage.getItem('lastLoggedInTime');
            if (typeof lastLoggedInTime != 'undefined' && lastLoggedInTime != 'null') {
                lastLoggedInTime = parseInt(lastLoggedInTime) + (7 * 24 * 60 * 60 * 1000); // for 7 days
//                lastLoggedInTime = parseInt(lastLoggedInTime) + (2 * 1000);
                if (lastLoggedInTime < currentTime) {
                    this.removeAllLocalStorage();
                } else {
                    localStorage.setItem('lastLoggedInTime', currentTime);
                }
            } else {
                this.removeAllLocalStorage();
            }

        }
        /**
         * @desc : use to store data in localStorage
         * @param {type} userInfo
         * @returns {userInfo|localUserStorageService_L2.userInfo}
         */
        userData.saveDataInLocalStorage = function (userInfo) {
            userInfo = userInfo;
            if (userInfo['x-access-token']) {
                var currentTime = new Date().getTime();
                localStorage.setItem('x-access-token', userInfo['x-access-token']);
                localStorage.setItem('lastLoggedInTime', currentTime);
            }
            for (var x in userInfo) {
                localStorage.setItem(x, userInfo[x]);
            }
            return userInfo;
        }
        /**
         * @desc : used at when we need to get info of indvidual key value from localstorage
         * @param {type} key : param whose value we want to get
         * @returns {userInfo|localUserStorageService_L2.userInfo|type}
         */
        userData.getDataFromLocalStorage = function (key) {
            userInfo = localStorage.getItem(key);

            return userInfo;
        }
        /**
         * @desc : it will call after update profile
         * @param {type} updatedInformation : object of updated informations
         * @returns {Array} : update array
         */
        userData.UpdateInfo = function (updatedInformation) {
//            var keys = Object.keys(updatedInformation);
            var arr = [];
            for (var x in updatedInformation) {
                localStorage.setItem(x, updatedInformation[x]);
                userInfo.x = updatedInformation[x];
                arr[x] = updatedInformation[x];
            }
            return arr;
        }
        userData.UpdateIndividualInfo = function (key, updatedInformation) {
            localStorage.setItem(key, updatedInformation);
            return true;
        }

        /**
         * @desc : to remove all local storage this function will call(it will call at time of logout)
         * @returns {Boolean} return true if localstorage find if not then return false
         */
        userData.removeAllLocalStorage = function () {

            if (localStorage.length) {
                localStorage.removeItem('x-access-token');
                localStorage.removeItem('lastLoggedInTime');
                var rememberMeUsername = localStorage.getItem("remember-me-email");
                var rememberMePassword = localStorage.getItem("remember-me-password");
                for (var i = 0, len = localStorage.length; i < len; i++) {
                    var key = localStorage.key(i);
                    var value = localStorage[key];
                    this.removeLocalStorageKey(key);
                }
                localStorage.setItem('remember-me-email', rememberMeUsername);
                localStorage.setItem('remember-me-password', rememberMePassword);
                return true;
            } else {
                return false;
            }

        }

        /**
         * @desc : call when individual key remove from local storage
         * @param {type} key : string which we want to remove from the local storage
         * @returns {boolean} : return true after remove it from localstroage 
         */
        userData.removeLocalStorageKey = function (key) {
            localStorage.removeItem(key);
            return true;
        }

        /**
         * 
         * @param {type} key : string which needs to be check in localstorage
         * @returns {Boolean} : if key exists then return true and not exists then  return false;
         */
        userData.checkExistKey = function (key) {
            if (localStorage.getItem(key) !== '' && localStorage.getItem(key) != undefined && localStorage.getItem(key) != null) {
                return localStorage.getItem(key);
                return true;
            } else {
                return false;
//                console.log("else");
            }
        }

        return userData;

    }]); 