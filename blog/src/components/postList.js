import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList, fetchUserList } from '../actions';


class PostList extends Component {
    // store.dispatch(fetchPostList)
    componentDidMount() {
        this.props.fetchPostList();
        this.props.fetchUserList();
        
    }

    findUserName=(userId) => {
        const {userList} = this.props;
        if(userList.length>0){
            return userList.find(user => user.id===userId).name
        } else { return ' ' }
    }
    renderItem(post) {

        return (
            <a className="item" key={post.id}>
                <i className="help icon"></i>
                <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">{post.body}</div>
                    <div className="header">{this.findUserName(post.userId)}</div>
                </div>
            </a>
        )
    }

    render() {
        return (
            <div className='ui list'>
                {this.props.postList.map(post => this.renderItem(post))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.userList);
    return {
        postList: state.postList,
        userList: state.userList
    }
}

export default connect(mapStateToProps, { fetchPostList, fetchUserList })(PostList);