import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`
export const QUERY_BOOKS = gql `
    query books($bookId: String) {
        books(bookId: $bookId) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`