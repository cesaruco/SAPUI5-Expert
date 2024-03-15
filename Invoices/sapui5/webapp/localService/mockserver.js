//@ts-nocheck
sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UriParameters",
    "sap/base/Log"
], 
/**
 * 
 * @param { typeof sap.ui.core.util.MockServer } MockServer 
 * @param { typeof sap.ui.model.json.JSONModel } JSONModel 
 * @param { typeof sap.base.util.UriParameters } UriParameters 
 * @param { typeof sap.base.Log } Log 
 */
function (MockServer, JSONModel, UriParameters, Log ) {
    'use strict';

    var oMockServer,
        _sAppPath = "coa/sapui5",
        _sJsonFilePath = _sAppPath + "localService/mockdata";

        var oMockServerInterface = {

            /**
             * Initializes the mock server asynchronously
             * @protected 
             * @param {object} oOptionsParameter
             * @returns {Promise} a promise that is resolved whe the mock server has been started 
             */
            init: function(oOptionsParameter) {
                
                var oOptions = oOptionsParameter || {};

                return new Promise (function(fnResolve, fnResect)  {
                    var sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json"),
                        oManifestModel = new JSONModel(sManifestUrl);

                    oManifestModel.attachRequestCompleted(function() {
                        var oUriParameters = new UriParameters(window.location.href);

                        //parse manifest for local metadata URI 
                        var sJsonFileUrl = sap.ui.require.toUrl(_sJsonFilePath);
                        var oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService");
                        var sMatadataUrl = sap.ui.require.toUrl(_sAppPath, oMainDataSource.setting.localUri);

                        //ensure there is a trailing slash 
                        var sMockServerUrl = oMainDataSource.uri && new URIError(oMainDataSource).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

                        //create a mock server instance or stop the existing one to reinitialize
                        if(!oMockServer){
                            oMockServer = new MockServer{
                                rootUri : sMockServerUrl
                            }     
                        } else {
                            oMockServer.stop();
                        } 

                        //configure mock server with the given options or a default delay of 0.5s
                        MockServer.config({
                            autoRespond: true,
                            autoRespondAfter : (oOptionsParameter.delay || oUriParameters.get("serverDelay") || 500 )
                        }
                    });    
                });
            }
        };

        return oMockServerInterface;
});