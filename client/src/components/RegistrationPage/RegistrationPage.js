import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon,  Form,  Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import { userRegisterRequest } from "../../redux/actions/account/register.actions";

const mapStateToProps = state => {
	const { hasRegister, loading } = state.registration;
	return { hasRegister, loading };
};

export default connect(mapStateToProps, null)(class RegistrationPage extends Component {
	state = {
	  firstName: '',
	  lastName: '',
	  email: '',
	  password: '',
	  submitted: false
	};

	handleChange = (name, value) => this.setState({ [name]: value });

	handleSubmit = event => {
		event.preventDefault();
		const { dispatch } = this.props, { firstName, lastName, email, password } = this.state;
      	dispatch(userRegisterRequest(firstName, lastName, email, password))
	};

	render() {
		const { firstName, lastName, password, email, submitted } = this.state;
		return (
			<>
			  <h2>Registration Form</h2>
			  <Form onSubmit={this.handleSubmit} className="login-form">
				<div>
				  <label htmlFor="firstName">First Name</label>
				  <Input type="user"
						 value={firstName}
						 onChange={event => this.handleChange('firstName', event.target.value)}
						 autoComplete="firstName" />
				  { submitted && !firstName && <div>First Name is required</div> }
				  </div>
				<div>
				  <label htmlFor="lastName">Last Name</label>
				  <Input type="user"
						 value={lastName}
						 onChange={event => this.handleChange('lastName', event.target.value)}
						 autoComplete="lastName" />
				  { submitted && !email && <div>Last Name is required</div> }
				  </div>
				<div>
				  <label htmlFor="email">Email</label>
				  <Input type="user"
						 value={email}
						 onChange={event => this.handleChange('email', event.target.value)}
						 autoComplete="user-name" />
				  { submitted && !email && <div>Email is required</div> }
				  </div>
				<div>
				  <label htmlFor="password">Password</label>
				  <Input prefix={<Icon type="lock"
									   style={{ color: 'rgba(0,0,0,.25)' }} />}
										type="password"
										placeholder="Password"
										value={password}
										onChange={event => this.handleChange('password', event.target.value)}
										autoComplete="new-password" />
				  { submitted && !password && <div>Password is required</div> }
				  </div>
				<div>
				  <Button htmlType='submit'>Registration</Button>
				  {this.props.loading && <Button shape="circle" loading />}
				  <Link  to='/login'><Button>Sign in</Button></Link>
				</div>
			  </Form>
			</>
		)
	}
})