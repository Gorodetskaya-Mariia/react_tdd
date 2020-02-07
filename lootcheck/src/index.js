import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers/balance';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root'));