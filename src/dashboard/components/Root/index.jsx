import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as deps from '../../deps';
import * as selectors from '../../selectors';
import styles from './style.css';


let GeneralSettingsForm = ({ handleSubmit, pristine, siteId, waiting, initialValues }) => {
  const Button = deps.elements.Button;
  const Input = deps.elements.Input;
  const Select = deps.elements.Select;
  return (
    <form
      onSubmit={handleSubmit((values, dispatch) =>
        dispatch(deps.actions.saveSettingsRequested(
          { title: values.title, numberOfPosts: values.numberOfPosts },
          { siteId, name: 'general-app-extension-worona' })))}
    >

      <Field
        name="title"
        label="Title"
        component={Input}
        type="text"
        size="medium"
        className={`is-medium ${styles.title}`}
      />
      <Field
        name="numberOfPosts"
        label="Number of posts"
        component={Select}
        size="medium"
        options={[5, 10, 15, 20, 25, 30]}
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
    numberOfPosts: React.PropTypes.number,
  }),
};

const mapStateToFormProps = state => ({
  initialValues: {
    title: selectors.getTitle(state),
    numberOfPosts: selectors.getNumberOfPosts(state),
  },
  waiting: state.settings.savingSettings === 'general-app-extension-worona',
});

GeneralSettingsForm = reduxForm({
  form: 'GeneralSettingsForm',
  fields: ['title', 'numberOfPosts'],
  getFormState: state => state.theme.reduxForm,
  enableReinitialize: true,
})(GeneralSettingsForm);
GeneralSettingsForm = connect(mapStateToFormProps)(GeneralSettingsForm);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer mobilePreview>
      <h1>General Settings</h1>
      <hr />
      <GeneralSettingsForm />
    </RootContainer>
  );
};
