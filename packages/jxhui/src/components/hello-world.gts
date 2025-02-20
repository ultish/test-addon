import Component from '@glimmer/component';

import styles from './hello-world.css';

interface HelloWorldSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class HelloWorldComponent extends Component<HelloWorldSignature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
