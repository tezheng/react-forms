export const antHtml = `
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

export const antCode = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import FormTemplate from '@data-driven-forms/ant-component-mapper/dist/cjs/form-template';
import componentMapper from '@data-driven-forms/ant-component-mapper/dist/cjs/component-mapper';
import 'antd/dist/antd.css'

import schema from './schema'

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const antWizardCode = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer';
import AntFormTemplate from '@data-driven-forms/ant-component-mapper/dist/cjs/form-template';
import componentMapper from '@data-driven-forms/ant-component-mapper/dist/cjs/component-mapper';
import 'antd/dist/antd.css'

import schema from './schema'

const FormTemplate = (props) => <AntFormTemplate {...props} showFormControls={false} />

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const antDependencies = {
  react: '^16.12.0',
  'react-dom': '^16.12.0',
  '@data-driven-forms/react-form-renderer': 'latest',
  '@data-driven-forms/ant-component-mapper': 'latest',
  antd: 'latest',
  'prop-types': 'latest'
};
