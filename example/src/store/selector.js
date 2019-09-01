export const getDocumentById = (state, { documentId }) =>
  state.document.find(document => document.id === documentId)
