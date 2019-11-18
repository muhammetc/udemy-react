import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { logout} from '../../actions';

class Menu extends Component {
    render() {

        const { isLoggedIn } = this.props.auth;
        return isLoggedIn ? (
            <div className='ui secondary  menu'>
                    <Link className='item' to='/'>Tweetler</Link>
                    <Link className='item' to='/myTweets'>Benim Tweetlerim</Link>
                    <Link className='item' to='/newTweet'>Yeni Tweet</Link>
                <div className='right menu'>
                    <div >
                        <Link className='item active' to='/' onClick= {()=>{
                            this.props.logout();
                        }}>Çıkış Yap </Link>
                    </div>
                </div>
            </div>
        ) : (
                <div className='ui secondary  menu'>
                    <div >
                        <Link className='item' to='/tweets'>Tweetler</Link>
                    </div>

                    <div className='right menu'>
                        <div >
                            <Link className='item active' to='/login'>Giriş Yap </Link>
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => {

    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(Menu);