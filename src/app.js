var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

// Schema and Resolver Imports
import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Config .env
dotenv.config();

// Config CORS
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Config PORT
const port = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// Set up default routes
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error Handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Start the server
app.listen({ port }, () => console.log(`Server is ready at port ${port}, Apollo is ready at path "${server.graphqlPath}"`));
