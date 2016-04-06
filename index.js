var observable = require('riot-observable');

function PanamaStore() {
    var state = {};

    observable(this);

    this.couple = function(anotherStore) {
        anotherStore.apply(this);
        return this;
    }.bind(this);

    this.getState = function() {
        return state;
    };

    this.setState = function(changes) {
        Object.assign(state, changes);
        this.trigger('update');
        return this;
    }.bind(this);

    return this;
}
    
module.exports = (function() {
    var panama = {};

    panama.createStore = new PanamaStore();

    panama.createActions = function(namespace, actionSet) {
        for (var action in actionSet) {
            if (actionSet.hasOwnProperty(action))
                actionSet[action] = namespace + ':' + action;
        }

        return actionSet;
    };

    /**
     * @deprecated
     */
    panama.createEventBus = function() {
        return observable({});
    };

    return panama;
})();
