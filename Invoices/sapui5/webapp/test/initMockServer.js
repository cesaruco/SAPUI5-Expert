//@ts-nocheck
sap.ui.define([
    "../localServices/mockserver",
    "sap/m/MessageBox"
], 
/**
 * @param { typeof sap.m.MessageBox} MessageBox 
 */

function(mockserver, MessageBox) {
    'use strict';

    var aMockservers = [];

    //initialize the mock server
    aMockservers.push(mockserver.init()); 
    
    Promise.all(aMockservers).catch(function (oError) {
        MessageBox.error(oError.messagge);
    }).finally(function () {
        sap.ui.require(["module:sap/ui/core/ComponentSupport"])
    });
});