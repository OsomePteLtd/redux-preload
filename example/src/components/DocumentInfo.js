import React from 'react'
import PropTypes from 'prop-types'
import { preload } from '@osome/redux-preload'

import { loadDocument } from '../store/action'
import { getDocumentById } from '../store/selector'

const DocumentInfo = ({ document }) =>
  (<div>document, {JSON.stringify(document)}</div>)

DocumentInfo.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.number,
    data: PropTypes.string
  })
}

const enhance = preload({
  document: {
    selector: getDocumentById,
    action: ({ documentId }) => loadDocument(documentId),
    validate: (document, { index }) => {
      return document && document.id === index
    }
  }
})

export default enhance(DocumentInfo)
