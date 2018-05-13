import React, { Component } from 'react'
import { shallow } from 'enzyme'

class TestComponent extends Component {
  render() {
    return (
      <h1>TestComponent</h1>
    )
  }
}

describe('TestComponent', () => {
  let testComponent

  beforeEach(() => {
    testComponent = shallow(<TestComponent />)
  })

  it('contains a h1', () => {
    expect(testComponent.find('h1').length).toEqual(1)
  })

  it('contains text', () => {
    expect(testComponent.contains('TestComponent')).toEqual(true)
  })
})
