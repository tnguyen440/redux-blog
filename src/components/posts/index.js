import React, {Component} from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link to="posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <div>
                    <h3>Posts</h3>
                    <ul>
                        {this.renderPost()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
} 

function mapStateToProps(state){
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);

//es6 style
/*
remove mapDispatchToProps
add: export default connect(null, { fetchPosts })(PostsIndex);
*/