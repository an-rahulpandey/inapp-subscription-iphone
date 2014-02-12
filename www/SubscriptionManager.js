cordova.define("com.sarathdr.plugins.subscriptionmanager.SubscriptionManager", function(require, exports, module) {var cordova = require('cordova'),
exec = require('cordova/exec');

var SubscriptionManager = function() {
    this.options = {};
};

SubscriptionManager.prototype = {
    /*
     Add your plugin methods here
     */
subscribe: function(success, failed, productId) {
    /*cordova.exec(null, null, "ScreenOrientation", "showStatusBar", []);*/
    
    cordova.exec(success, failed, "SubscriptionManager", "subscribe", [productId]);

    
    
},
    
subscriptionstatus: function(success,failed) {
    //cordova.exec(null, null, "ScreenOrientation", "hideStatusBar", []);
    cordova.exec(success,failed, "SubscriptionManager", "updateSubscriptionNotifyStatus", []);

}
};

var SubscriptionManagerInstance = new SubscriptionManager();

module.exports = SubscriptionManagerInstance;});
