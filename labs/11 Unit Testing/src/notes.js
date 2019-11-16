var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note && note.replace(/\s/g, '').length && typeof note === 'string') {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if(index<list.length && index >= 0){
                list.splice(index,1);
                return true;
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {},
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());
