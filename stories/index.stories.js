/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Default Button', () => ({
    data: () => ({
      button: {
        id: 0,
        text: 'Me Button',
      },
    }),
    template: '<m-button :button="button" @click="action">{{ button.text }}</m-button>',
    methods: {
      action: action('clicked'),
    },
  }));
