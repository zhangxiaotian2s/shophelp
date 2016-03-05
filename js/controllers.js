var shopAppCtrls = angular.module('shopAppCtrls', []);

shopAppCtrls.controller('asideCtrl', ['$scope',
	function($scope) {
		$scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])

shopAppCtrls.controller('agreementCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '平台总则',
			title: '商家协议'
		}
	  $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('baseAttentionCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '店铺基本设置',
			title: '店铺基本信息上传注意事项？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('basePhoneShowCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '店铺基本设置',
			title: '如何在手机端预览？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('baseSetShopTypeCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '店铺基本设置',
			title: '如何设置店铺分类？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('baseSetShopTplCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '店铺基本设置',
			title: '如何设置运费模板？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('goodsAddCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '商品管理',
			title: '如何添加新商品？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('goodsUpDownCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '商品管理',
			title: '如何上\下架商品？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('goodsAboutDelCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '商品管理',
			title: '关于删除商品注意事项？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])

shopAppCtrls.controller('orderFindCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '订单管理',
			title: '如何查找订单？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])

shopAppCtrls.controller('orderDeliverCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '订单管理',
			title: '如何发货？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])

shopAppCtrls.controller('orderChangeMesCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '订单管理',
			title: '如何修改订单价格/取消订单？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('accountingMesCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '财务对账',
			title: '如何查看账单明细？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('accountingOverCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '财务对账',
			title: '结算规则？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('accountAllocateCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '账号管理',
			title: '如何为员工按职责分配账号？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('extensionCouponCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '促销推广',
			title: '何设置优惠劵？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('extensionRecommendHomeCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '促销推广',
			title: '如何将商品推荐至佰佳商城首页？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('extensionActivityCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '促销推广',
			title: '如何参加佰佳商城主题促销？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])
shopAppCtrls.controller('extensionSearchCtrl', ['$scope',
	function($scope) {
		$scope.contentmes = {
			parenttitle: '促销推广',
			title: '如何更容易让用户找到我的商品？'
		}
		 $scope.gotoElement = function() {
            document.body.scrollTop=0
		}
	}
])