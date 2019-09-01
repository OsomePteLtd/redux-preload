import React, { Component } from 'react'

import DocumentInfo from './components/DocumentInfo'

export default class App extends Component {
  state = {
    documentId: 0
  }

  updateDocumentId = () =>
    this.setState({ documentId: this.state.documentId + 1 })

  render () {
    return (
      <div>
        <button onClick={this.updateDocumentId}>
          Load next document
        </button>
        <DocumentInfo documentId={this.state.documentId} />
      </div>
    )
  }
}
