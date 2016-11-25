import React from 'react';
import * as deps from '../../deps';

const Content = () => (
  <div>
    <h1>General Settings</h1>
    <div>I am the general settings screen.</div>
  </div>
);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer mobilePreview>
      <Content />
    </RootContainer>
  );
};
