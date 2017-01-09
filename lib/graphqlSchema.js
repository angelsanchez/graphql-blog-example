import { buildSchema } from 'graphql'

import {
  authors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} from './resolvers/authors'

import {
  articles,
  createArticle,
  updateArticle,
  deleteArticle
} from './resolvers/articles'

export const schema = buildSchema(`
  type Author {
    _id: String!
    name: String
    email: String
  }

  type Article {
    _id: String!
    title: String
    content: String
    author: Author
  }
  
  input ArticleInput {
    title: String
    content: String
  }
  
  type Query {
    authors: [Author]
    articles: [Article]
  }
  
  type Mutation {
    createAuthor (name: String!, email: String!) : Author
    updateAuthor (id: String!, name: String, email: String) : Author
    deleteAuthor (id: String!) : Author
    createArticle (authorId: String!, input: ArticleInput) : Article
    updateArticle (id: String!, input: ArticleInput) : Article
    deleteArticle (id: String!) : Article
  }
`)

export const rootValue = {
  authors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  articles,
  createArticle,
  updateArticle,
  deleteArticle
}
