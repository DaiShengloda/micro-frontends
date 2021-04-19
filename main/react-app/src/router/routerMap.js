/*
 * @Author: zhouquan
 * @Date: 2020-12-03 17:48:13
 * @Description:
 */
//给面包屑导航用的路由层级映射
const pageRouter = [
    {path: '/', component: true, name: '首页'},
    {path: '/login', component: true, name: '登录'},


    {
        path: '/mission/taskExcitation/index', component: false, name: '任务管理',
        routes: [
            {path: '/mission/taskExcitation/index', component: true, name: '任务激励'},
            {
                path: '/mission/viewTasks/index', component: true, name: '查看任务',
                routes: [
                    {path: '/mission/viewTasks/create', component: true, name: '新增任务'},
                    {path: '/mission/viewTasks/edit', component: true, name: '编辑任务'},
                    {path: '/mission/viewTasks/check', component: true, name: '任务详情'},
                ]
            },
            {
                path: '/mission/personalityTask/index', component: true, name: '个性化任务配置'
            },
        ]
    },
    {
        path: '/statistics/taskProgress/index', component: false, name: '数据统计',
        routes: [
            {path: '/statistics/taskProgress/index', component: true, name: '任务完成数据'},
            {path: '/statistics/shopAchievement/index', component: true, name: '导购业绩统计'},
            {path: '/statistics/sourceMaterial/index', component: true, name: '素材转化分析'},
        ]
    },

    {
        path: '/guide/index', component: false, name: '导购管理',
        routes: [
            {path: '/guide/list/index', component: true, name: '导购管理'},
            {path: '/guide/list/detail', component: true, name: '查看导购'},
            {path: '/guide/recruit/fansList/index', component: true, name: '粉丝列表'},
            {path: '/guide/recruit/memberList/index', component: true, name: '会员列表'},
            {path: '/guide/welcomeMsg/index', component: true, name: '欢迎语配置'},
            {path: '/guide/welcomeMsg/detail', component: true, name: '查看欢迎语'},
            {path: '/guide/welcomeMsg/add', component: true, name: '新增欢迎语'},
            {path: '/guide/userFeedback/index', component: true, name: '用户反馈'},
            { path: '/guide/channelManage/index', component: true, name: '渠道管理' ,routes:[
                { path: '/guide/channelManage/edit', component: true, name: '渠道信息' },
            ]},
            { path: '/guide/recruitConfig/index', component: true, name: '招募配置列表' },
            { path: '/guide/recruitConfig/detail', component: true, name: '招募配置详情' },
            { path: '/guide/recruitConfig/add', component: true, name: '招募配置新增' },
            { path: '/guide/virtualStaff/index', component: true, name: '虚拟店铺成员维护' },
            
        ]
    },
    {
        path: '/coupon/massCoupon', component: true, name: '优惠券管理',
        routes: [
            {path: '/coupon/massCoupon/index', component: true, name: '群发优惠券列表'},
            {path: '/coupon/newMassCoupon/index', component: true, name: '新建群发优惠券'},
            {path: '/coupon/detail/index', component: true, name: '群发优惠券详情'},
        ]
    },
    {
        path: '/walnutMall', component: true, name: '核桃商场',
        routes: [
            {path: '/walnutMall/goodsList/index', component: true, name: '核桃商城列表'},
            {path: '/walnutMall/addExchangeGoods/index', component: true, name: '新增兑换商品'},
            {path: '/walnutMall/exchangeGoodsDetail/index', component: true, name: '兑换商品详情'},
        ]
    },

    {
        path: '/resource', name: '资源管理', routes: [
            {
                path: '/resource/pictureTemplate/index', component: true, name: '图片模板管理',
                routes: [
                    {path: '/resource/pictureTemplate/create', component: true, name: '新增图片模板'},
                    {path: '/resource/pictureTemplate/edit', component: true, name: '编辑图片模板'},
                    {path: '/resource/pictureTemplate/check', component: true, name: '查看图片模板'},
                ]
            },
            {
                path: '/resource/wxappCard/index', component: true, name: '小程序卡片模板管理',
                routes:[
                    {path: '/resource/wxappCard/detail', component: true, name: '小程序卡片'},
                ]
            },
            {
                path: '/resource/h5Template/index', component: true, name: 'h5模板管理',
                routes:[
                    {path: '/resource/h5Template/detail', component: true, name: 'h5模板'},
                ]
            },
        ]
    },

// ########## 消费端后台菜单 ##########
    {
        path: '/goods', name: '商品', routes: [
            {path: '/goods/classify/index', component: true, name: '商品分类'},
            {path: '/goods/list/index', component: true, name: '基础商品库'},
            {path: '/goods/list/edit', component: true, name: '编辑商品'},
            {path: '/goods/label/index', component: true, name: '商品标签'},
            {path: '/goods/AssociatedLabel/index', component: true, name: '商品标签关联商品查询'},
            {path: '/goods/channelsPush/index', component: true, name: '商品渠道推送' },
            { path: '/goods/spuList/index', component: true, name: '商城商品库' },
            { path: '/goods/spuList/detail', component: true, name: '商城商品库详情' },
            { path: '/goods/material/index', component: true, name: '素材库' },
        ]
    },
    {
        path: '/order', name: '订单', routes: [
            {path: '/order/list/index', component: true, name: '订单列表'},
            {path: '/order/list/detail', component: true, name: '订单详情'},
            {path: '/order/freightTemplate/index', component: true, name: '运费模板'},
            {path: '/order/freightTemplate/edit', component: true, name: '运费模板编辑'},
            {path: '/order/evaluationManagement/index', component: true, name: '评价管理'},
            {path: '/order/bindRelation/add', component: true, name: '用户关系绑定'},
            {path: '/order/rightSubscription/index', component: true, name: '订阅购权益订单列表'},
            {path: '/order/rightSubscription/detail', component: true, name: '订阅购权益订单详情' },
        ]
    },
    {
        path: '/subCommission', name: '分佣', routes: [
            {path: '/subCommission/template/index', component: true, name: '分佣模板'},
            {path: '/subCommission/template/detail', component: true, name: '新增分佣模板'},
            {path: '/subCommission/activity/index', component: true, name: '分佣活动'},
            {path: '/subCommission/activity/add', component: true, name: '分佣活动新增'},
            {path: '/subCommission/shopsDetail/index', component: true, name: '分佣商品明细'},
            {path: '/subCommission/order/index', component: true, name: '分佣订单'},
            {path: '/subCommission/WhiteList/index', component: true, name: '分佣白名单'},
        ]
    },

    {
        path: '/live', name: '直播', routes: [
            {
                path: '/live/manage/index', component: true, name: '直播间管理', routes: [
                    // {path: '/live/manage/index', component: true, name: '直播间管理'},
                    {path: '/live/manage/add', component: true, name: '新增直播间'},
                    {path: '/live/manage/Detail', component: true, name: '直播间详情'},
                ]
            },
            { path: '/LiveProductsExamine/index', component: true, name: '直播商品提审管理' },
            {
                path: '/live/goodsManage', component: true, name: '直播间商品管理', routes: [
                    {path: '/live/goodsManage/index', component: true, name: '直播间商品管理'},
                ]
            },
            {
                path: '/live/activeMaterial', component: true, name: '预售管理', routes: [
                    {path: '/live/activeMaterial/index', component: true, name: '活动素材编辑'},
                    {path: '/live/activeMaterial/addSeckill', component: true, name: '新增秒杀商品'},
                    {path: '/live/activeMaterial/addCoupon', component: true, name: '新增礼品券'},
                    {path: '/live/presell/index', component: true, name: '预售管理'},
                    {path: '/live/presell/add', component: true, name: '新增预售'},
                    {path: '/live/presell/detail', component: true, name: '预售活动查看'},
                    {path: '/live/presell/addShops', component: true, name: '预售商品新增'},
                ]
            },
            {path: '/live/presellOrder/index', component: true, name: '预售订单查询'},
        ]
    },


    {
        path: '/pageManage', component: true, name: '页面管理', routes: [
            {path: '/pageManage/wepage/index', component: true, name: '微页面列表'},
            {path: '/pageManage/wepage/detail', component: true, name: '微页面详情'},
            { path: '/pageManage/advertising/index', component: true, name: '广告位管理' },
            { path: '/pageManage/advertising/add', component: true, name: '广告位管理' },
            { path: '/pageManage/advertising/edit', component: true, name: '广告位详情' },
            { path: '/pageManage/advertising/detail', component: true, name: '广告详情' },
            { path: '/pageManage/searchconfig/index', component: true, name: '搜索配置' },
            { path: '/pageManage/homePop/index', component: true, name: '首页弹窗',routes:[
                    { path: '/pageManage/homePop/detail', component: true, name: '首页弹窗详情' },
                ]
            },
        ]
    },

    {
        path: '/community/articleList/index', component: false, name: '种草社区', routes: [
            {path: '/community/articleList/index', component: true, name: '文章列表',routes:[
                { path: '/community/articleList/detail', component: true, name: '文章新增' },
            ]},
            {path: '/community/articleSection/index', component: true, name: '文章板块'},
            {path: '/community/contentReview/index', component: true, name: '内容审核'},
            {path: '/community/commentReview/index', component: true, name: '评论审核'},
            {path: '/community/authorManage/index', component: true, name: '作者管理'},
        ]
    },

    {
        path: '/pageManage', component: true, name: '促销', routes: [
            {path: '/promotion/seckill/index', component: true, name: '商品秒杀'},
            {path: '/promotion/seckilladd/add', component: true, name: '商品秒杀新增'},
            { path: '/promotion/seckill/detail', component: true, name: '秒杀详情' },
            { path: '/promotion/presale/index', component: true, name: '管理预售',routes:[
                { path: '/promotion/presale/add', component: true, name: '预售新增' },
                { path: '/promotion/presale/detail', component: true, name: '预售活动查看' },
                { path: '/promotion/presale/goodsadd', component: true, name: '预售商品新增' },

            ]},
            { path: '/promotion/presaleorder/index', component: true, name: '预售订单' },
            { path: '/promotion/commodity/index', component: true, name: '商品关联活动管理' ,routes:[
                { path: '/promotion/commodity/add', component: true, name: '商品关联活动新增' },

            ]},
            { path: '/promotion/subscribebuy/index', component: true, name: '订阅购' },
            { path: '/promotion/subscribebuy/detail', component: true, name: '订阅购新增' },
            { path: '/promotion/subscribebuy/watch', component: true, name: '订阅购详情' },
            {path: '/promotion/goodsDecline/index', component: true, name: '单品直降',routes:[
                {path: '/promotion/goodsDecline/detail', component: true, name: '详情'},
            ]},
        ]
    },
    { path: '/promotion/couponConfigure/index', component: true, name: '优惠券配置',routes:[
        { path: '/promotion/couponConfigure/edit', component: true, name: '优惠券配置编辑' },
    ] },
    
// ########## 消费端后台菜单END ##########


//---ROUTER_APPEND---
// 上面这个标记用于自动创建路由时的标记，不能去掉
];

//获取路由map配置
function getRouteMap(data, parent = []) {
    let routeMap = {};
    for (let item of data) {
        let cloneParent = [].concat(parent);
        if (item.component) {
            routeMap[item.path] = cloneParent.concat([{
                path: item.path,
                name: item.name,
                component: item.component
            }]);
        }
        if (item.routes) {
            cloneParent.push({
                path: item.path,
                name: item.name,
                component: item.component
            });
            routeMap = Object.assign(routeMap, getRouteMap(item.routes, cloneParent));
        }
    }

    return routeMap;
}


const routerMap = getRouteMap(pageRouter);

export default routerMap;
