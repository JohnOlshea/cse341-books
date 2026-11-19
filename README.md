# CSE 341 - Books API

A read-only Books API built with Express and MongoDB for CSE 341 - W01 Assignment.

## Live API

Deployed URL: https://cse341-books-0f3f.onrender.com

> Replace `YOUR-RENDER-URL` with your real Render URL before you submit.

## Tech Stack

- Node.js + 【entity-Express¦canonical_name=Express】 (ES Modules)
- 【entity-MongoDB¦canonical_name=MongoDB】 Atlas + Official 【entity-MongoDB¦canonical_name=MongoDB】 Node.js Driver
- Render for deployment
- ESLint for code style

## Data Model

Database: `cse341-books-db`
Collection: `books`

Book object:

```json
{
  "id": "b1",
  "author": "Maya Rivera",
  "title": "Patterns of Light",
  "publicationDate": "2021-08-17"
}