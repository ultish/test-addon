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
    <style>
      @scope (.hello-world) {
        h1 {
          color: red;
        }
      }
    </style>
    <div class="hello-world">
      <h1>
        does this change ss
      </h1>
      <div class={{styles.container}}>
        hello
        {{yield}}
      </div>
    </div>
  </template>
}
