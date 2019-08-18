import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from './';

storiesOf('Buttons', module)
  .addDecorator(withInfo)
  .add('Primary', () => <Button>Primary</Button>)
  .add('Disabled', () => <Button type={'disabled'}>Disabled</Button>)
  .add('Success', () => <Button type={'success'}>Success</Button>);
