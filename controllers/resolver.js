// resolvers.js
const Book = require('../models/users');

const resolvers = {
    Query: {
        books: () => Book.findAll(),
        book: (_, { id }) => Book.findByPk(id),
    },
    Mutation: {
        addBook: (_, args) => Book.create(args),
        updateBook: (_, { id, ...args }) => Book.update(args, { where: { id } }),
        deleteBook: async (_, { id }) => {
            const book = await Book.findByPk(id);
            await book.destroy();
            return book;
        },
    },
};

module.exports = resolvers;
