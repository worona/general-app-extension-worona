import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as deps from '../../deps';
import * as selectors from '../../selectors';
import styles from './style.css';

let GeneralSettingsForm = ({ handleSubmit, pristine, siteId, waiting }) => {
  const Button = deps.elements.Button;
  const Input = deps.elements.Input;
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
          className={`input is-medium ${styles.title}`}
        />

        <label className="label" htmlFor="postNo">Number of posts</label>
        <p className="control" id="postNo">
          <span className="select is-medium">
            <select>
              <option>5</option>
              <option selected="selected">10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
            </select>
          </span>
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
