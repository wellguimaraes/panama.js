var observable = require('riot-observable');

module.exports = (function () {
    var riotto = {};

    riotto.createActions = function (namespace, actionSet) {
        for (var action in actionSet) {
            if (actionSet.hasOwnProperty(action))
                actionSet[action] = namespace + ':' + action;
        }
        return actionSet;
    };

    riotto.createEventBus = function () {
        return observable({});
    };

    return riotto;
})();
