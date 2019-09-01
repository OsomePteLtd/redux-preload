# @osome/redux-preload

> osome redux preload

[![NPM](https://img.shields.io/npm/v/@osome/redux-preload.svg)](https://www.npmjs.com/package/@osome/redux-preload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @osome/redux-preload
```

## Usage

```jsx
import React, { Component } from 'react'

import { preload } from '@osome/redux-preload'

const SimpleComponent = (props) => (<div>Simple component</div>)

const MyComponent = preload(
  users: {
    action: action.loadUsers,
    selector: selector.getUsers,
  },
)(SimpleComponent)
```

## License

MIT © [OsomePteLtd](https://github.com/OsomePteLtd)
