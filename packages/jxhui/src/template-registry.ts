import type HelloWorldComponent from './components/hello-world.gts';
export default interface JxhuiRegistry {
  'HelloWorld': typeof HelloWorldComponent;
  'hello-world': typeof HelloWorldComponent;
}
