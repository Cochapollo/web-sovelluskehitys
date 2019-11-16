(function (window) {
   window.$id = function (id) {
       return document.getElementById(id);
   };
    window.app = window.app || {};
    window.app.myModule = myModule;
})(window);