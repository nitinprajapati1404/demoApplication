app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/bub-hub-post", {
                    templateUrl: "app/modules/bubHubPost/templates/postList.html",
                    controller: "bubHubPostCtrl",
                    pagename: "Manage Post",
                    addLink: false,
                    auth: true
                })
                .when("/bub-hub-post/:param", {
                    templateUrl: "app/modules/bubHubPost/templates/postList.html",
                    controller: "bubHubPostCtrl",
                    pagename: "Add Post",
                    addLink: false,
                    auth: true
                })
                .when("/bub-hub-post/:param/:id", {
                    templateUrl: "app/modules/bubHubPost/templates/postList.html",
                    controller: "bubHubPostCtrl",
                    pagename: "Edit Post",
                    addLink: false,
                    auth: true
                })
    }]);
app.controller('bubHubPostCtrl', ['$scope', '$rootScope', '$uibModal', '$location', 'ApiService', 'apiUrl', 'helper', 'userService', 'httpMethodService', 'bubHubPostFactory', '$location', '$routeParams', 'growl','constant','$sce','$document','$window','moment','base64', function ($scope, $rootScope, $uibModal, $location, ApiService, apiUrl, helper, userService, httpMethodService, bubHubPostFactory, $location, $routeParams, growl,constant,$sce,$document,$window,moment,base64) {
        $scope.base64 = base64;
        $scope.pageNo =1;
        $scope.lastDate = '';
        $scope.postList = [];
        $scope.filter = {};
        $scope.filters={};

        $scope.postImageUrl= constant.CDN_URL+constant.bub_hub_post_images+"/";
        $scope.postThumbImageUrl= constant.apiUrl+"image-resize/"+base64.encode(constant.bub_hub_post_images)+"/";
        
        if (typeof $routeParams.param == 'undefined') {
            /*
             * @param {type} callback
             * @returns {}
             * @desc : This is for listing city
             */
             $scope.getPost = function(pageNo,lastDate,filter){

             var params = {};
             params.pageNo = pageNo;
             params.lastSync = lastDate;
             if(filter !== undefined){
                if(filter.search !== undefined && filter.search != ""){
                    params.search = filter.search;
                }
                if(filter.lovePost !== undefined){
                    if(filter.lovePost == true){
                        params.isLoved = true;
                    }else{
                        delete params.isLoved;
                    }
                }
                if(filter.reportAbuse !== undefined){
                    if(filter.reportAbuse == true){
                        params.isReportAbused = true;
                    }else{
                        delete params.isReportAbused;
                    }
                }
             }
            bubHubPostFactory.getPost(params).then(function (data) {
                    if (data.success) {
                        if(data.data !== undefined){
                            if($scope.pageNo == 1){
                                $scope.postList = [];
                            }
                         $scope.postList = $scope._.union($scope.postList,data.data);   

                         var lastIndex = data.data.length - 1;
                         $scope.lastDate = data.data[lastIndex].createdAt;
                        }else{
                            $scope.endData = true;
                        }
                    }
                }, function (err) {

                });   
             }
             $scope.getPost($scope.pageNo,'');
             angular.element($window).bind("scroll", function() {
                var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
                var body = document.body, html = document.documentElement;
                var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
                windowBottom = windowHeight + window.pageYOffset;
                if (windowBottom >= docHeight) {
                    $scope.pageNo  = $scope.pageNo+1;
                    $scope.getPost($scope.pageNo,$scope.lastDate,$scope.filter);
                }
            });

             /**
                filter post
             **/
             $scope.filterPost = function(filter){
                $scope.postList=[];
                $scope.filter = filter;
                $scope.getPost(1,'',$scope.filter);
             }
             /**
                Clear filter
             */
             $scope.clearFilter = function(){
                $scope.filters = {};
                $scope.filters.lovePost = false;
                $scope.filters.reportAbuse = false;
                $scope.postList = [];
                $scope.getPost(1,'');  
             }
        }
        
        /**
            function for open popup of video
        **/
        $scope.openPopup = function(post,url){
            var videoModal = $uibModal.open({
            backdrop:true,
            templateUrl: 'app/modules/bubHubPost/templates/videoModal.html',
            controller: function($scope,$sce) {
                $scope.trustSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
                }
                $scope.videoUrl = url+post.videos.fileName; 
                $scope.cancel = function(){

                videoModal.dismiss('cancel');
              }
            }
        });
            videoModal.result.then(function (selectedItem) {
              
            }, function () {
                angular.element("#bubhubpostVideo").push();
            });
        }

        /*
            function for open popup of like list
        */
        $scope.likepopup = function(id){
            var likeModal = $uibModal.open({
            backdrop:true,
            templateUrl: 'app/modules/bubHubPost/templates/likeModal.html',
            controller: function($scope,$sce) {
                $scope.cdnUrl= constant.CDN_URL
                bubHubPostFactory.getPostLike(id).then(function(data){
                    $scope.userList = data.data;
                },function(err){
                    console.log(err);
                });
                $scope.cancel = function(){

                likeModal.dismiss('cancel');
              }
            }
        });
        }
        /*
            function for open comment list popup
        */
        $scope.commentpopup = function(id){
            var commnetModal = $uibModal.open({
            backdrop:true,
            templateUrl: 'app/modules/bubHubPost/templates/commentModal.html',
            controller: function($scope,$sce) {
                $scope.cdnUrl= constant.CDN_URL
                bubHubPostFactory.getPostComments(id).then(function(data){
                    $scope.commentList = data.data;
                    console.log(data);
                },function(err){
                    console.log(err);
                });
                $scope.cancel = function(){

                commnetModal.dismiss('cancel');
              }
            }
        });
        }
        /*
            function for open report abuse list popup
        */
        $scope.reportAbusePopup = function(id){
            var reportModal = $uibModal.open({
            backdrop:true,
            templateUrl: 'app/modules/bubHubPost/templates/reportAbuseModal.html',
            controller: function($scope,$sce) {
                $scope.cdnUrl= constant.CDN_URL
                bubHubPostFactory.getPostReportAbuse(id).then(function(data){
                    $scope.reportList = data.data;
                    console.log(data);
                },function(err){
                    console.log(err);
                });
                $scope.cancel = function(){

                reportModal.dismiss('cancel');
              }
            }
        });
        }
        /*
            function for delete post
        */
        $scope.deletePost = function(post){
            bubHubPostFactory.deletePost(post._id).then(function (data) {
                if (data.success) {
                    var index = $scope._.findIndex($scope.postList,{"_id":post._id});
                    $scope.postList.splice(index, 1);
                    growl.success("Post deleted successfully");
                }
            }, function (err) {

            });
        }
        /*
        function for like post (love post)
        */
        $scope.makeLovePost = function(post){
            if(post.isLoved == true){
                var loveAction = "false";
            }else{
                var loveAction = "true";
            }
            var loveData = {};
            loveData.postId = post._id;
            loveData.likeType = loveAction;
            bubHubPostFactory.lovePost(loveData).then(function(data){
                var index = $scope._.findIndex($scope.postList,{"_id":post._id});
                $scope.postList[index].isLoved = !post.isLoved;

                $scope.$apply;
            },function(err){

            });
        }
        
    }]);

app.directive('prettyp', function () {
    return function (scope, element, attrs) {
        $("[rel^='prettyPhoto']").prettyPhoto({
            deeplinking: false,
            social_tools: false,
            allow_resize: true,
            allow_expand: false
        });
    }
});