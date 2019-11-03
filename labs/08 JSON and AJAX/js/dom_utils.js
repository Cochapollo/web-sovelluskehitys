// This script defines an object 'U' with some useful DOM functions
// In particular it adds a DOM selector '$' like that in jQuery
// It also allows setting text of an element, and adding/removing event listeners

// Who needs jQuery? You can now write your own!
// See http://youmightnotneedjquery.com/ for further inspiration

var U = {

    // For getting the document element by ID:
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, // End of $() function.

    // Function for setting the text of an element:
    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string')
        && (typeof message == 'string') ) {
    
            // Get a reference to the element:
            var output = this.$(id);
            if (!output) return false;
        
            // Set the text
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } // End of main IF.
    }, // End of setText() function.
    
    // Function for creating event listeners:
    // The function 'fn' passed here is the callback - to be run later
    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // Older IE
            obj.attachEvent('on' + type, fn);
        }
    }, // End of addEvent() function.
    
    // Function for removing event listeners:
    removeEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.removeEventListener) { // W3C
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) { // Older IE
            obj.detachEvent('on' + type, fn);
        }
    } // End of removeEvent() function.

}; // End of U declaration.
(function (window) {
    'use strict';

    // Get element(s) by CSS selector:
    window.qs = function (selector, scope) {
        return (scope || document).querySelector(selector);
    };
    window.qsa = function (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    };

    // addEventListener wrapper:
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };

    // Register events on elements that may or may not exist yet:
    // $live('div a', 'click', function (event) {});
    window.$live = (function () {
        var eventRegistry = {};

        function dispatchEvent(event) {
            var targetElement = event.target;

            eventRegistry[event.type].forEach(function (entry) {
                var potentialElements = window.qsa(entry.selector);
                var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

                if (hasMatch) {
                    entry.handler.call(targetElement, event);
                }
            });
        }

        return function (selector, event, handler) {
            if (!eventRegistry[event]) {
                eventRegistry[event] = [];
                window.$on(document.documentElement, event, dispatchEvent, true);
            }

            eventRegistry[event].push({
                selector: selector,
                handler: handler
            });
        };
    }());

    // Find the element's parent with the given tag name:
    // $parent(qs('a'), 'div');
    window.$parent = function (element, tagName) {
        if (!element.parentNode) {
            return;
        }
        if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
            return element.parentNode;
        }
        return window.$parent(element.parentNode, tagName);
    };

    // Allow for looping on nodes by chaining:
    // qsa('.foo').forEach(function () {})
    NodeList.prototype.forEach = Array.prototype.forEach;
})(window);