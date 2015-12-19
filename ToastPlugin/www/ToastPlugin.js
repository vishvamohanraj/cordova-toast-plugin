var exec = require('cordova/exec');

function ToastPlugin() { 
 console.log("ToastPlugin.js: is created");
}

ToastPlugin.prototype.show = function(aString){
 console.log("ToastPlugin.js: show");

 exec(function(result){
     /*alert("OK" + reply);*/
   },
  function(result){
    /*alert("Error" + reply);*/
   },"ToastPlugin",aString,[]);
}

var ToastPlugin = new ToastPlugin();
module.exports = ToastPlugin;