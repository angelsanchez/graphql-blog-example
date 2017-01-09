import mongoose, { Schema } from 'mongoose'

const authorSchema = new Schema({
  name: String,
  email: String
}, {
  collection: 'authors',
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

const Author = mongoose.model('Author', authorSchema)

export function findOne (_id) {
  return Author.findOne({ _id })
}

export function findAll () {
  return Author.find()
}

export function create (input) {
  const author = new Author(input)
  return author.save().then(() => author)
}

export function update ({id, name, email}) {
  const update = {};

  if (name) {
    update.name = name
  }

  if (email) {
    update.email = email
  }

  return Author.findByIdAndUpdate(id, update)
}

export function remove (id) {
  return Author.findByIdAndRemove(id)
}
