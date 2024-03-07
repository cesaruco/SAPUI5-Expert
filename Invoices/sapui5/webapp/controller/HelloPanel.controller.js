// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "user strict";

             return Controller.extend("coa.sapui5.controller.HelloPanel", {

            onInit: function () {

            },

            onShowHello: function () {
                MessageToast.show("Hello Word")
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
         
            }

        });
    }); 