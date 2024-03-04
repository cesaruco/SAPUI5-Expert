sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel 
     */
    function (JSONModel) {
        "user strict";

        return {

            createRecipient: function () {
                var oData = {
                    recipient: {
                        name: "Word"
                    }
                };
                return new JSONModel(oData);
            }

        }
    }); 