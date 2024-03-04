// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "user strict";

        return Controller.extend("coa.sapui5.controller.App", {

            onInit: function () {
      

            },

            onShowHello: function () {
                MessageToast.show("Hello Word")
            }

        });
    }); 