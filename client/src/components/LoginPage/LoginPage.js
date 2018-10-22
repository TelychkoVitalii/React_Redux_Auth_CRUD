import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { user_login_request } from '../../redux/actions/user.action';
import { Button, Icon, Form, Input } from 'antd';

 const mapStateToProps = state => {
	return { 
		loggedIn  : state.authenticate 
	};
}

class LoginPage extends Component {
        state = {
            username: '',
            password: '',
            submitted: false
        }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event =>  {
        event.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(user_login_request(username, password));
        }
    }

    render() {
        const { loading } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className=''>
                <h2>Login</h2>
                <Form name='form' onSubmit={this.handleSubmit}>
                    <div className={(submitted && !username ? ' error' : '')}>
                        <label htmlFor="username">Username</label>
                        <Input type="text" className=''
                               name='username' value={username} 
                               onChange={this.handleChange} 
                               autoComplete="user-name"
                               />
                        {submitted && !username &&
                        <div className=''>Username is required</div>
                        }
                    </div>
                    <div className={submitted && !password ? 'error' : ''}>
                        <label htmlFor="password">Password</label>
                        <Input prefix={<Icon type="lock" 
									style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password" 
									placeholder="Password" 
									value={password}
									onChange={this.handleChange}
									name='password'
									autoComplete="new-password"
									/>
                        {submitted && !password && <div>Password is required</div>
                        }
                    </div>
                    <div >
                        <Button htmlType='submit'>Login</Button>
                        { loading && <Icon type="loading" /> }
                        <Link to='/register'><Button>Sign up</Button></Link>
                    </div>
                </Form>
            </div>
        )
    }
}



export default connect(mapStateToProps)(LoginPage);
