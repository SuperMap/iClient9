require('./SpatialAnalystBase');
require('./DensityKernelAnalystParameters');
var SuperMap = require('../SuperMap');
SuperMap.DensityAnalystService = SuperMap.Class(SuperMap.SpatialAnalystBase, {
    /**
     * @class SuperMap.DensityAnalystService
     * @constructs SuperMap.DensityAnalystService
     * @classdesc
     *  密度分析服务类，密度分析可计算每个输出栅格像元周围圆形邻域内输入的点或线对象的密度。
     *  密度分析，在某种意义上来说，相当于在表面上将输入的点线对象的测量值散开来，将每个点或线对象的测量量分布在整个研究区域，并计算输出栅格中每个像元的密度值。目前提供1种密度分析：核密度分析（Kernel）。
     * @extends {SuperMap.SpatialAnalystBase}
     * @api
     * @example  例如：
     *
     * (start code)
     * var myDensityAnalystService = new SuperMap.DensityAnalystService(url);
     * myDensityAnalystService.on({
     *     "processCompleted": processCompleted,
     *     "processFailed": processFailed
     *     }
     * );
     * (end)
     *
     */

    /**
     * Property: mode
     * {String} 密度分析类型。
     */
    mode: null,

    /**
     * @method SuperMap.DensityAnalystService.initialize
     * @param  url - {String} 服务的访问地址。如 http://localhost:8090/iserver/services/spatialanalyst-changchun/restjsr/spatialanalyst 。
     * @param options - {Object} 参数。
     *
     * Allowed options properties:</br>
     * eventListeners - {Object} 需要被注册的监听器对象。
     */
    initialize: function (url, options) {
        SuperMap.SpatialAnalystBase.prototype.initialize.apply(this, arguments);
        var me = this;
        if (options) {
            SuperMap.Util.extend(me, options);
        }
    },

    /*
     * APIMethod: destroy
     * 释放资源,将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.SpatialAnalystBase.prototype.destroy.apply(this, arguments);
        this.mode = null;
    },

    /**
     * @method SuperMap.DensityAnalystService.processAsync
     * @description 负责将客户端的查询参数传递到服务端。
     * @param parameter - {DensityKernelAnalystParameters}
     */
    processAsync: function (parameter) {
        var me = this;

        var end = me.url.substr(me.url.length - 1, 1);
        if (end === '/') {

        } else {
            me.url += "/";
        }

        var parameterObject = new Object();

        if (parameter instanceof SuperMap.DensityKernelAnalystParameters) {
            me.url += 'datasets/' + parameter.dataset + '/densityanalyst/kernel';
            me.mode = "kernel";
        }

        SuperMap.DensityKernelAnalystParameters.toObject(parameter, parameterObject);
        var jsonParameters = SuperMap.Util.toJSON(parameterObject);

        if (me.isInTheSameDomain) {
            me.url += '.json?returnContent=true';
        } else {
            me.url += '.jsonp?returnContent=true';
        }

        me.request({
            method: "POST",
            data: jsonParameters,
            scope: me,
            success: me.serviceProcessCompleted,
            failure: me.serviceProcessFailed
        });
    },

    CLASS_NAME: "SuperMap.DensityAnalystService"
});
module.exports = SuperMap.DensityAnalystService;