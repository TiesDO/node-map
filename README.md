# Nodemap Library

A simple node map editor with base components that can be configured or extended.

## Usage

Note this is a [Qwik](https://qwik.builder.io/) library which you can download as a package from [NPM](https://www.npmjs.com/package/@tiesdenouden/node-map) or directly install using the command line with:

```shell
npm install @tiesdenouden/node-map
```

> :warning: These components are still being developed and are **subject to change**!

### Basic component

After you've succesfully installed the package you can then use the out of the box component like so:

```JSX
import { component$, useContext } from 'builder.io/qwik';

// import the library
import { NodeMap } from 'tiesdenouden@node-map';

export const DefaultSettings = component$(() => {
  // provide your own context to allow
  // - easy access and manipulation from outside the component
  // - multiple map contexts within the app

  const nodeMapState = useContext<INodeMapState>(MyAppContext);

  // the base parent component with default settings
  return <NodeMap context={nodeMapState}/>
});

export const DefaultSettings = component$(() => {
  // provide your own context to allow
  // - easy access and manipulation from outside the component
  // - multiple map contexts within the app

  const nodeMapState = useContext<INodeMapState>(MyAppContext);

  // the base parent component with default settings
  return <NodeMap context={nodeMapState}/>
});
```

### Custom tool

You can inherit the `INodeTool` to easily create a new tool.

```JSX
import { $, QwikMouseEvent } from 'builder.io/qwik';

import { INodeTool, NodeTool } from 'tiesdenouden@node-map';

export const CustomTool = () => {
  const customProps: INodeTool = {
    name: 'My Custom Tool',
    icon: '/path/to/icon',

    // on mouse down event takes a $ wrapped function. This allows Qwik to serialise and lazy load the tools behaviour
    onMouseDown: $((e: QwikMouseEvent) => {
      console.log(`clicked at (${e.clientX};${e.clientY})`);
    })
  }

  // return a new NodeTool component with your own event handlers
  return <NodeTool {...customProps} />
}
```

## Project Structure

The library should provide users with a simple component that works out of the box and can be supplied with `custom components` as needed.

```txt
- nodemap component
  - property editor
    - node property [interface]
    - node string property *
    - node decimal property *
    - node integer property *
    - node enum property *
    - node color property *
  - toolbar
    - base tool [interface]
    - move tool *
    - create tool *
    - pan/zoom tool *
    - pan/zoom tool *
  - canvas
    - base node [interface]
    - text node *
```

\* Preconfigured optional components \
[_interface_] extendable interfaces

## Prototype 1 (0.1.0)

It's first minor version should allow a user to:

- Import the component into their project
- Property editor provides (c)RUD functionality
- Out of the box tools should provide all CR(ud) functionality and relations
- Base node should allow for:
  - Colors
  - Text
  - Node relations

```txt
possible useacases are an 'SQL database explorer' and a 'Project Service designer'
```
