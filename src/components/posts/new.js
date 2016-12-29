import React, {Component,PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../../actions/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const validate = values => {
  const errors = {}
  const requiredFields = [ 'title', 'categories', 'content' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth={true}	
    {...input}
    {...custom}
  />
);

const style = {
  marginRight: 10,
};


class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmitForm(props) {
        createPost(props);

         this.context.router.push('/');
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
                <h3>Create a new post</h3>
                <div>
                    <Field name="title" component={renderTextField} label="Tilte"/>
                </div>
                <div>
                    <Field name="categories" component={renderTextField} label="Categories"/>
                </div>
                <div>
                    <Field name="content" component={renderTextField} label="Content" multiLine={true} rows={2}/>
                </div>
                <div>
                    <RaisedButton type="submit" label="Submit" disabled={ submitting } primary={true} style={style}/> 
                    <RaisedButton label="Reset" secondary={true} disabled={pristine || submitting} onClick={reset}  style={style}/>
                    <Link to="/"><RaisedButton label="Cancel" style={style} /></Link>
                    
                </div>
            </form>
        );
    }
}

//connect: 1st argument is mapStateToPtops, 2nd is mapDispatchToProps
//reduxform: 1st is form config, 2nd is mapStateToPtops, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    validate
},null, { createPost })(PostsNew);