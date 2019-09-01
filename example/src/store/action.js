import uuid from 'uuid/v4'

export const LOAD_DOCUMENT = 'LOAD_DOCUMENT'

export const loadDocument = (id) => ({
  type: LOAD_DOCUMENT,
  document: { id, data: uuid() }
})
