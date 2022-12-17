import { useState } from 'react';
/**
 * @license React
 * react-debug-tools.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function useReducer(todoReducer, initialState) {
  //useState hook
  const [state, setState] = useState(initialState);
  //dispatch and up to state
  function dispatch(action) {
      const nextState = todoReducer(state, action);
      setState(nextState);
  }
  return [state, dispatch];
}


