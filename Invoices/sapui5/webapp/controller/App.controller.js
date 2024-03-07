// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller) {
        "user strict";

        return Controller.extend("coa.sapui5.controller.App", {

            onInit: function () {

            },

            onOpenDialogHeader: function(){
                this.getOwnerComponent().openHelloDialog();
            }

        });
    }); 