import React, { Component } from 'react';
/* import {BrowserRouter, Route} from 'react-router-dom'; */
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './menu/menu';
import Tweets from './tweet/tweets';
import NewTweet from './tweet/newTweet/newTweet';
import MyTweets from './tweet/myTweet';
import Login from './login/login';
import firebase from 'firebase/app';
import history from '../history';
import { isLoggedIn } from '../actions'
import { connect } from 'react-redux';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBqtAv145gaaUfWHHzMg512ZMYr4djxhSY",
            authDomain: "twitterklon-react-d937b.firebaseapp.com",
            databaseURL: "https://twitterklon-react-d937b.firebaseio.com",
            projectId: "twitterklon-react-d937b",
            storageBucket: "twitterklon-react-d937b.appspot.com",
            messagingSenderId: "219069404847",
            appId: "1:219069404847:web:8bbc68e68003be3609265a",
            measurementId: "G-5JSF9W2SEN"
        };
        firebase.initializeApp(firebaseConfig);
        this.props.isLoggedIn();
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <Menu />

                    <Switch>
                        <Route path='/' exact component={Tweets} />
                        <Route path='/myTweets' exact component={MyTweets} /> {/* exact yazılmazsa Anasayfa En altta yazılmak zorunda  */}
                        <Route path='/newTweet' exact component={NewTweet} /> 
                        <Route path='/editTweet' exact component={NewTweet} /> 
                        <Route path='/login' exact component={Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

/* const App = () => {
    return (
        <BrowserRouter>
            <Route path='/page1' component={page1} />
        </BrowserRouter>
    )
} */

export default connect(null, { isLoggedIn })(App);