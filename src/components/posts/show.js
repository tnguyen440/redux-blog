import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id);
        this.context.router.push('/');
    }

    render() {
        const { post } = this.props;

        if(!this.props.post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-right"
                    onClick={this.onDeleteClick.bind(this)}
                >Delete Post</button>
                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);