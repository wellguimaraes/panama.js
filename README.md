# Riotto
A Flux helper for Riot, React or any other UI library.

`npm install --save-dev riotto`

## Usage

```js
var riotto = require('riotto');

var store = riotto
    .createStore()
    .setState({
        // app initial state
    })
    .couple(function() {
        // event handlers
        
        this.on('something', function(payload) {
            this.setState({
                // some state changes
            });
        });
        
        this.on('somethingElse', function() {
            this.setState({
                // some state changes
            });
        });
    })
    .couple(require('./anotherHandlerSet'));
    
    // Then you can trigger events
    store.trigger('something', payload);

    // And listen to state changes
    store.on('update', function() {
        // Update your views?
    });

```