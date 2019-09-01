import React from 'react'
// @todo add PropTypes
import { connect } from 'react-redux'

// Equality, existence check
const E = a => Boolean(a)

// @todo Props and HOC types
export const preload = (fields) => (WrappedComponent) => {
  class PreloadData extends React.Component<*> {
    componentDidMount() {
      Object.keys(fields).forEach(this.checkAndLoadDataForField)
    }

    componentDidUpdate() {
      Object.keys(fields).forEach(this.checkAndLoadDataForField)
    }

    checkAndLoadDataForField = (field) => {
      const data = this.props[field]
      if (data) return

      const { action, args, validate = E } = fields[field]
      const props = args ? args(this.props) : this.props

      if (!validate(data, this.props)) {
        this.props.dispatch(action(props))
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const getProps = (state, props) => ({
    ...Object.entries(fields).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value.selector(state, props)
    }), {})
  })

  return connect(getProps)(PreloadData)
}
