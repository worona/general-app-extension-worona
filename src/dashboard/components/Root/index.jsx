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

        <label className="label" htmlFor="postNo">Number of posts</label>
        <p className="control" id="postNo">
          <Select size="medium" options={[5, 10, 15, 20, 25, 30]} selected={10} />
        </p>
        <br />
        <Button color="primary" size="large">Save</Button>
      </form>
  );
};

const mapStateToFormProps = state => ({
  initialValues: {
    title: selectors.getTitle(state),
    postNo: selectors.getNumberOfPosts(state),
  },
  // waiting: state.generalApp.SavingSettings,
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
