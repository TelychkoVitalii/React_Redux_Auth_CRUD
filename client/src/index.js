import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { history } from "./utils/history";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

render(
	<Row>
		<Col span={6} offset={9}>
			<Provider store={store}>
				<Router history={history}>
                  <App />
				</Router>
			</Provider>
		</Col>
	</Row>,
	document.getElementById('root')
);


