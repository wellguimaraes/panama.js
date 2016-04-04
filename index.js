var observable = require('riot-observable');

module.exports = (function() {
    var riotto = {};

    riotto.createStore = function() {
        var store = {};
        var state = {};
        
        observable(store);

        store.couple = function(anotherStore) {
            anotherStore.apply(this);
            return this;
        }.bind(store);

        store.getState = function() {
            return state;
        };

        store.setState = function(changes) {
            Object.assign(state, changes);
            this.trigger('update');
        }.bind(store);

        return store;

    };

    riotto.createActions = function(namespace, actionSet) {
        for (var action in actionSet) {
            if (actionSet.hasOwnProperty(action))
                actionSet[action] = namespace + ':' + action;
        }

        return actionSet;
    };

    /**
     * @deprecated
     */
    riotto.createEventBus = function() {
        return observable({});
    };

    return riotto;
})();
