import {
  findAll,
  create,
  update,
  remove
} from '../db/authors'

export function authors() {
  return findAll()
}

export function createAuthor(author) {
  return create(author)
}

export function updateAuthor (author) {
  return update(author)
}

export function deleteAuthor ({id}) {
  return remove(id)
}
