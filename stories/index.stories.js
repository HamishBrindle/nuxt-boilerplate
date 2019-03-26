/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button.vue';
import '../assets/styles/settings.scss';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { Button },
    template: '<m-button @click="action">Hello Button</m-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: {
      'm-button': Button,
    },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <m-button onClick={this.action}>With JSX</m-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { Button },
    template: '<m-button @click="action">😀 😎 👍 💯</m-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
