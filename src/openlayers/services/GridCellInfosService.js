﻿/**
 * @class ol.supermap.GridCellInfosService
 * @constructs ol.supermap.GridCellInfosService
 * @classdesc
 * 数据栅格查询服务
 * @example 用法：
 *      new ol.superMap.GridCellInfosService(url)
 *      .getGridCellInfos(param,function(result){
 *           //doSomething
 *      })
 * @api
 */

require('./ServiceBase');
var ol = require('openlayers/dist/ol-debug');
var GetGridCellInfosService = require('../../common/iServer/GetGridCellInfosService');

ol.supermap.GridCellInfosService = function (url, options) {
    ol.supermap.ServiceBase.call(this, url, options);
};
ol.inherits(ol.supermap.GridCellInfosService, ol.supermap.ServiceBase);

/**
 * @method ol.supermap.GridCellInfosService.prototype.getGridCellInfos
 * @param params {SuperMap.GetGridCellInfosParameters}
 * @param callback
 */
ol.supermap.GridCellInfosService.prototype.getGridCellInfos = function (params, callback) {
    if (!params) {
        return null;
    }
    var me = this;
    var gridCellQueryService = new GetGridCellInfosService(me.url, {
        serverType: me.options.serverType,
        eventListeners: {
            scope: me,
            processCompleted: callback,
            processFailed: callback
        }
    });
    gridCellQueryService.processAsync(params);
    return me;
};

module.exports = ol.supermap.GridCellInfosService;