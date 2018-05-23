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

Didact.render(<div>123</div>, document.getElementById('app'));