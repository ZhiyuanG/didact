/** @jsx Didact.createElement */
import Didact from './didact';

const element = {
    type: "div",
    props: {
      id: "container",
      children: [
        { type: "input", props: { value: "foo", type: "text" } },
        { type: "a", props: { href: "/bar" } },
        { type: "span", props: {} }
      ]
    }
};

const app = (
  <div>
    <input value="foo" type="text" />
    <a href="/bar" >link</a>
    <span></span>
  </div>
)

Didact.render(app, document.getElementById('app'));