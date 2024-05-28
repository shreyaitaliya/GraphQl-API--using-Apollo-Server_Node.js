// index.js
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const sequelize = require('./config/db');
const typeDefs = require('./controllers/schema');
const resolvers = require('./controllers/resolver');

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    });
}

startServer();
