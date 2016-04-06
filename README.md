# Panama.js
A simple library for uni-directional dataflow architecture inspired by Flux.

`npm install --save-dev riotto`

## Usage

```js
var riotto = require('riotto');

// Create some namespaced actions
var actions = riotto.actions('myApp', {
    something       : 0, // becomes 'myApp:something'
    somethingElse   : 0  // becomes 'myApp:somethingElse'
});

var store = riotto
    .createStore()
    .setState({
        // app initial state
    })
    .couple(function() {
        // event handlers
        
        this.on(actions.something, function(payload) {
            this.setState({
                // some state changes
            });
        });
        
        this.on(actions.somethingElse, function() {
            this.setState({
                // some state changes
            });
        });
    })
    .couple(require('./anotherHandlerSet'));
    
    // Then you can trigger events
    store.trigger(actions.something, payload);

    // And listen to state changes
    store.on('update', function() {
        // Update your views?
    });

```
