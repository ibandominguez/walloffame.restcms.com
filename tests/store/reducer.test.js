import { createStore } from 'redux'

describe('Test reducer', () => {
  let counterReducer

  beforeEach(() => {
    counterReducer = createStore((state = 0, action) => {
      switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default: return state
      }
    })
  })

  it('should be zero', () => {
    expect(counterReducer.getState()).toBe(0)
  })

  it('should increment', () => {
    counterReducer.dispatch({ type: 'INCREMENT' })
    expect(counterReducer.getState()).toBe(1)
  })

  it('should decrement', () => {
    counterReducer.dispatch({ type: 'DECREMENT' })
    expect(counterReducer.getState()).toBe(-1)
  })
})
