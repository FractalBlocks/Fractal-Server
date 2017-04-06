import {
  Component,
  Actions,
  Inputs,
} from 'fractal-core'
import { stateOf } from 'fractal-core/utils/component'

const name = 'Root'

const state = 'false'

const inputs: Inputs = ctx => ({
  '/toggle': () => [
    actions.Toggle(),
    <any> ['httpResponse', 'done'],
  ],
  '/read': id => ['httpResponse', stateOf(ctx)],
})

const actions: Actions = {
  Toggle: () => s => s === 'false' ? 'true' : 'false',
}

const comp: Component = {
  name,
  state,
  inputs,
  actions,
  interfaces: {},
}

export default comp
