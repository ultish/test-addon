import type HelloWorldComponent from './components/hello-world.gts';
import type HelloComponent from './components/hello.ts';
export default interface JxhuiRegistry {
  'HelloWorld': typeof HelloWorldComponent;
  'hello-world': typeof HelloWorldComponent;
  'Hello': typeof HelloComponent;
  'hello': typeof HelloComponent;
}
