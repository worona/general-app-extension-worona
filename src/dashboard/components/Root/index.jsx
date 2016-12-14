import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as deps from '../../deps';
import * as selectors from '../../selectors';
import styles from './style.css';

let GeneralSettingsForm = ({ handleSubmit, pristine, siteId, waiting }) => {
  const Button = deps.elements.Button;
  const Input = deps.elements.Input;
  const Select = deps.elements.Select;
  return (
    <form
      onSubmit={handleSubmit((values, dispatch) =>
        dispatch(deps.actions.saveSettingsRequested(
          { title: values.title, postNo: values.postNo },
          { siteId, name: 'general-app-extension-worona' })))}
    >
      <h1>General Settings</h1>

      <Field
        name="title"
        label="Title"
        component={Input}
        type="text"
        size="medium"
        className={`is-medium ${styles.title}`}
      />
      <Field
        name="postNo"
        label="Number of posts"
        component={Select}
        size="medium"
        options={[5, 10, 15, 20, 25, 30]}
        selected={10}
      />
      <br />
      <Button
        color="primary"
        size="large"
        type="submit"
        disabled={pristine}
        loading={waiting}
      >
        Save
      </Button>
    </form>
  );
};

GeneralSettingsForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  waiting: React.PropTypes.bool,
  siteId: React.PropTypes.string,
  pristine: React.PropTypes.bool,
  initialValues: React.PropTypes.shape({
    title: React.PropTypes.string,
    postNo: React.PropTypes.number,
  }),
};

const mapStateToFormProps = state => ({
  initialValues: {
    title: selectors.getTitle(state),
    postNo: selectors.getNumberOfPosts(state),
  },
  waiting: state.settings.SavingSettings === 'general-app-extension-worona',
});

GeneralSettingsForm = reduxForm({
  form: 'GeneralSettingsForm',
  fields: ['title', 'postNo'],
  getFormState: state => state.generalApp.reduxForm,
  enableReinitialize: true,
})(GeneralSettingsForm);
GeneralSettingsForm = connect(mapStateToFormProps)(GeneralSettingsForm);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer mobilePreview>
      <GeneralSettingsForm />
    </RootContainer>
  );
};
