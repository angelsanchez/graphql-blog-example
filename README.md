# graphql-blog-example
GraphQL Example

## Requisites
* MongoDB

## Installation
```
npm install
```

## Usage

```
npm run build
npm start
```

Open http://localhost:3000/graphql in a web browser.

### Create author
```
mutation {
  createAuthor(name: "Author Name", email: "author@email.com") {
    _id
    name
    email
  }
}
```

### Get authors
```
{
  authors {
    _id
    name
    email
  }
}
```

### Update author
```
mutation {
  updateAuthor(_id: "5872db7a535dc9223741fd8c", name: "Author Name", email: "author@email.com") {
    _id
    name
    email
  }
}
```

### Delete author
```
mutation {
  deleteAuthor(id: "5872d5d01161ba215b12e60f") {
    _id
    name
    email
  }
}
```

### Create article
```
mutation {
  createArticle(authorId: "5872d5d01161ba215b12e60f", input: {title:"Test Title", content: "Test Conent"}) {
    _id
    title
    content
  }
}
```

### Get articles
```
{
  articles {
    _id
    title
    content
    author {
      _id
      name
      email
    }
  }
}
```

### Update article
```
mutation {
  updateArticle(id: "5872d6d3535dc9223741fd8b", input:{title:"Test"}) {
    _id
    title
  }
}
```

### Delete article
```
mutation {
  deleteArticle(id: "5872d66d1161ba215b12e610") {
    _id
    title
  }
}
```
