var shopHelp = angular.module('shopHelp', ['ui.router', 'ngAnimate', 'shopAppCtrls', 'shopAppDirective'])

shopHelp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index', {
			url: '/index',
			views: {
				'': {
					templateUrl: 'tpls/home.html',
				},
				'aside@index': {
					templateUrl: 'tpls/aside.html',
				},
				'main@index': {
					templateUrl: 'tpls/agreement.html'
				}
			}

		})
		//商家协议
		.state('index.agreement', {
			url: '/agreement',
			views: {
				'main@index': {
					templateUrl: 'tpls/agreement.html',
					controller: 'agreementCtrl'
				}
			}

		})
		////店铺基本信息上传注意事项？
		.state('index.baseAttention', {
			url: '/baseAttention',
			views: {
				'main@index': {
					templateUrl: 'tpls/baseAttention.html',
					controller: 'baseAttentionCtrl'
				}
			}
		})
		////如何在手机端预览？
		.state('index.basePhoneShow', {
			url: '/basePhoneShow',
			views: {
				'main@index': {
					templateUrl: 'tpls/basePhoneShow.html',
					controller: 'basePhoneShowCtrl'
				}
			}
		})
		////如何设置店铺分类？
		.state('index.baseSetShopType', {
			url: '/baseSetShopType',
			views: {
				'main@index': {
					templateUrl: 'tpls/baseSetShopType.html',
					controller: 'baseSetShopTypeCtrl'
				}
			}
		})
		////如何设置运费模板？
		.state('index.baseSetShopTpl', {
			url: '/baseSetShopTpl',
			views: {
				'main@index': {
					templateUrl: 'tpls/baseSetShopTpl.html',
					controller: 'baseSetShopTplCtrl'
				}
			}
		})
		//如何添加新商品？
		.state('index.goodsAdd', {
			url: '/goodsAdd',
			views: {
				'main@index': {
					templateUrl: 'tpls/goodsAdd.html',
					controller: 'goodsAddCtrl'
				}
			}
		})
		//如何上\下架商品？
		.state('index.goodsUpDown', {
			url: '/goodsUpDown',
			views: {
				'main@index': {
					templateUrl: 'tpls/goodsUpDown.html',
					controller: 'goodsUpDownCtrl'
				}
			}
		})
		//关于删除商品注意事项？
		.state('index.goodsAboutDel', {
			url: '/goodsAboutDel',
			views: {
				'main@index': {
					templateUrl: 'tpls/goodsAboutDel.html',
					controller: 'goodsAboutDelCtrl'
				}
			}
		})
		//如何查找订单？
		.state('index.orderFind', {
			url: '/orderFind',
			views: {
				'main@index': {
					templateUrl: 'tpls/orderFind.html',
					controller: 'orderFindCtrl'
				}
			}
		})
		//如何发货？
		.state('index.orderDeliver', {
			url: '/orderDeliver',
			views: {
				'main@index': {
					templateUrl: 'tpls/orderDeliver.html',
					controller: 'orderDeliverCtrl'
				}
			}
		})
		//如何修改订单价格/取消订单？
		.state('index.orderChangeMes', {
			url: '/orderChangeMes',
			views: {
				'main@index': {
					templateUrl: 'tpls/orderChangeMes.html',
					controller: 'orderChangeMesCtrl'
				}
			}
		})
		//如何查看账单明细？
		.state('index.accountingMes', {
			url: '/accountingMes',
			views: {
				'main@index': {
					templateUrl: 'tpls/accountingMes.html',
					controller: 'accountingMesCtrl'
				}
			}
		})
		//结算规则？
		.state('index.accountingOver', {
			url: '/accountingOver',
			views: {
				'main@index': {
					templateUrl: 'tpls/accountingOver.html',
					controller: 'accountingOverCtrl'
				}
			}
		})
		//如何为员工按职责分配账号？
		.state('index.accountAllocate', {
			url: '/accountAllocate',
			views: {
				'main@index': {
					templateUrl: 'tpls/accountAllocate.html',
					controller: 'accountAllocateCtrl'
				}
			}
		})
		//何设置优惠劵？
		.state('index.extensionCoupon', {
			url: '/extensionCoupon',
			views: {
				'main@index': {
					templateUrl: 'tpls/extensionCoupon.html',
					controller: 'extensionCouponCtrl'
				}
			}
		})
		//如何将商品推荐至佰佳商城首页？
		.state('index.extensionRecommendHome', {
			url: '/extensionRecommendHome',
			views: {
				'main@index': {
					templateUrl: 'tpls/extensionRecommendHome.html',
					controller: 'extensionRecommendHomeCtrl'
				}
			}
		})
		//如何参加佰佳商城主题促销？
		.state('index.extensionActivity', {
			url: '/extensionActivity',
			views: {
				'main@index': {
					templateUrl: 'tpls/extensionActivity.html',
					controller: 'extensionActivityCtrl'
				}
			}
		})
		//如何更容易让用户找到我的商品？
		.state('index.extensionSearch', {
			url: '/extensionSearch',
			views: {
				'main@index': {
					templateUrl: 'tpls/extensionSearch.html',
					controller: 'extensionSearchCtrl'
				}
			}
		})


})