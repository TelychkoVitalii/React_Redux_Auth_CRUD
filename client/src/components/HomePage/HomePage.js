import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { get_all_users_request } from '../../redux/actions/user.action';
import { connect } from 'react-redux';
import { Button } from 'antd'

const mapStateToProps = state => {
	return {
		users: state.users
	}
};

class HomePage extends Component {
	// componentDidMount = () => {
	// 	const { dispatch } = this.props;
	// 	dispatch(get_all_users_request())
	// }
	render() {

		return (
			<div>
				<h1> Hi </h1>
				<Link to='/register'><Button>Logout</Button></Link>
			</div>
		)
	}
}

export default connect(mapStateToProps)(HomePage)