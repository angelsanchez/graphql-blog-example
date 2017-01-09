import {
  findAll,
  create,
  update,
  remove
} from '../db/articles'

export function articles () {
  return findAll()
}

export function createArticle ({authorId, input}) {
  return create(authorId, input)
}

export function updateArticle ({id, input}) {
  return update(id, input)
}

export function deleteArticle ({id}) {
  return remove(id)
}
