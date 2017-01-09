import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema, rootValue } from './graphqlSchema'
import mongoose from 'mongoose'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  pretty: true,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('Server listening...')
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost:27017/graphql-blog')
})
