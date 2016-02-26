module.exports = (function() {
	
	var events = {};
	
	return {
		on: function(name, fn) {
			events[name] = events[name] || [];
			events[name].push(fn);
		},
		off: function(name, fn) {
			if(events[name]) {
				if(!fn) {
					delete events[name];
					return;
				}

				for(var i=0; i<events[name].length; i++) {
					if(events[name][i] === fn) {
						events[name].splice(i, 1);
					}
				};
			}
		},
		trigger: function(name, val) {
			if(events[name]) {
				events[name].forEach(function(element, index, arr) {
					element(val);
				});
			}
		}
	}
})();
