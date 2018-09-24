
require('style/main.scss');

// require('component/demo.js');

// require('component/counterByDOM');
// require('component/counterByRedux');

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducer';
import {increment, decrement, addIfOdd, asyncAdd} from 'actions';

import CounterPanel from 'component/counter/CounterPanel';


const store = createStore(reducer, applyMiddleware(thunk));

const boundIncrement = (id) => store.dispatch(increment(id));
const boundDecrement = (id, value) => store.dispatch(decrement(id, value));
const boundAddIfOdd = (id, value) => store.dispatch(addIfOdd(id, value));
const boundAsyncAdd = (id) => store.dispatch(asyncAdd(id));
const addCounter = panelName => store.dispatch({type: 'ADD_COUNTER', panelName});

let propTypes = {
    actions: PT.objectOf(PT.func),
    state: PT.shape({
        A: PT.arrayOf(PT.object),
        B: PT.arrayOf(PT.object)
    }),
    addCounter: PT.func
}

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let {actions, addCounter, state} = this.props;
        return (
            <div>
                <CounterPanel {...{
                    data: state.A, actions, addCounter,
                    panelName: 'A'
                }}/>
                <CounterPanel {...{
                    data: state.B, actions, addCounter,
                    panelName: 'B'
                }}/>
            </div>
        )
    }
}

App.propTypes = propTypes;

function render() {
    ReactDOM.render(
        <App
            actions={{
                boundIncrement, boundDecrement, boundAddIfOdd, boundAsyncAdd
            }}
            {...{
                state: store.getState(),
                addCounter
            }}
        />,
        document.getElementById('root')
    );
}

render();

store.subscribe(render)
