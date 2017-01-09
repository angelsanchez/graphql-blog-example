import mongoose, { Schema } from 'mongoose'
import { findOne as getAuthor } from './authors'

const articleSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' }
}, {
  collection: 'articles',
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

const Article = mongoose.model('Article', articleSchema)

export function findAll () {
  return Article.find().populate('author')
}

export function create (authorId, { title, content }) {
  return getAuthor(authorId)
    .then(author => {
      if (!author) return null

      const article = new Article({title, content, author: author._id})
      return article.save().then(() => article)
    })
}

export function update (id, update) {
  return Article.findByIdAndUpdate(id, update)
}

export function remove (id) {
  return Article.findByIdAndRemove(id)
}
