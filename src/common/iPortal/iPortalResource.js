/* Copyright© 2000 - 2019 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
import {SuperMap} from '../SuperMap';
import {Util} from '../commontypes/Util';
import {IPortalServiceBase} from './iPortalServiceBase';
/**
 * @class SuperMap.IPortalResource
 * @classdesc iPortal 资源详情类。
 * @category iPortal/Online
 * @param {string} portalUrl - 资源地址。
 * @param {Object} [resourceInfo] - 资源详情参数。
 * @extends {SuperMap.iPortalServiceBase}
 *
 */
export class IPortalResource extends IPortalServiceBase {
    constructor(portalUrl, resourceInfo) {
        super(portalUrl);
        resourceInfo = resourceInfo || {};
        this.authorizeSetting = [];
        this.bounds = "";
        this.bounds4326 = "";
        this.checkStatus = "";
        this.createTime = 0;
        this.description = null;
        this.dirId = null;
        this.epsgCode = 0;
        this.heatLevel = 0;
        this.id = 0;
        this.name = "";
        this.personalDirId = null;
        this.resourceId = 0;
        this.resourceSubType = null;
        this.resourceType = null;
        this.serviceRootUrlId = null;
        this.tags = null;
        this.thumbnail = null;
        this.updateTime = 0;
        this.userName = "";
        Util.extend(this, resourceInfo); // INSIGHTS_WORKSPACE MAP_DASHBOARD
        this.resourceUrl = portalUrl + "/web/"+this.resourceType.replace("_","").toLowerCase()+"s/" + this.resourceId;
        if (this.withCredentials) {
            this.resourceUrl = portalUrl + "/web/mycontent/"+this.resourceType.replace("_","").toLowerCase()+"s/" + this.resourceId;
        }
        // if (this.id) {
        //     this.mapUrl = mapUrl + "/" + this.id;
        // }
    }

    /**
     * @function SuperMap.IPortalResource.prototype.load
     * @description 加载资源信息。
     * @returns {Promise} 返回 Promise 对象。如果成功，Promise 没有返回值，请求返回结果自动填充到该类的属性中；如果失败，Promise 返回值包含错误信息。
     */
    load() {
        var me = this;
        return me.request("GET", me.resourceUrl + ".json")
            .then(function (resourceInfo) {
                if (resourceInfo.error) {
                    return resourceInfo;
                }
                for (var key in resourceInfo) {
                    me[key] = resourceInfo[key];
                }
            });
    }

    /**
     * @function SuperMap.IPortalResource.prototype.update
     * @description 更新地图参数。
     * @returns {Promise} 返回包含更新操作状态的 Promise 对象。
     */
    update() {
        var resourceUpdateParam = {
            units: this.units,
            level: this.level,
            center: this.center,
            controls: this.controls,
            description: this.description,
            epsgCode: this.epsgCode,
            extent: this.extent,
            status: this.status,
            tags: this.tags,
            layers: this.layers,
            title: this.title,
            thumbnail: this.thumbnail,
            sourceType: this.sourceType,
            authorizeSetting: this.authorizeSetting
        };
        var options = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        return this.request("PUT", this.resourceUrl, JSON.stringify(resourceUpdateParam), options);
    }

}

SuperMap.iPortalResource = IPortalResource;
