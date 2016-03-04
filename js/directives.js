var shopAppDirective=angular.module('shopAppDirective',[])
shopAppDirective.run(function ($templateCache) {
    $templateCache.put('b_nav', '<div class="contentbar "><h3 >{{contentmes.parenttitle}}</h3></div>')
    $templateCache.put('h_title', '<h1 class="title">{{contentmes.title}}</h1>')
})


shopAppDirective.directive('bnav', function ($templateCache) {
    return{
        restrict:'AE',
        template:$templateCache.get('b_nav'),
        transclude:true
    }
})

shopAppDirective.directive('htitle', function ($templateCache) {
    return{
        restrict:'AE',
        template:$templateCache.get('h_title'),
        transclude:true
    }
})
