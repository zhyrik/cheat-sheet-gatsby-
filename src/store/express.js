export const arr = [
  {
    language: "javascript",
    title: 'npm',

code: `"server": "nodemon server.js",
"client": "cd client && npm start",
"dev": "concurrently --names \"server,client\" \"npm run server --silent\" \"npm run client --silent\""`
    },{
    language: "javascript",
    title: 'start',

code: `const express = require('express');
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(\`Server listening on \${PORT}\`)
})`
    },{
    language: "javascript",
    title: 'mongoDB varibles.env',

code: `|-- varibles.env

MONGO_URI=
mongodb://zhyrik:rkty1918234@ds042677.mlab.com:42677/react-recepy2`
    },{
    language: "javascript",
    title: 'Conect MLab (mongoose)',

code: `const mongoose = require('mongoose');
//connect variables.env
require('dotenv').config({ path: 'variables.env'});

// connect Schemas
const Recipe = require('./models/Recipe');
const User = require('./models/User');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
// перед app`
    },{
    language: "javascript",
    title: 'Mongose Schema',

code: `|--models
    |--User.js
    
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    
    const UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        joinDate: {
            type: Date,
            default: Date.now
        },
        favorites: {
            type: [Schema.Types.ObjectId],
            ref: 'Recipe'
        }
    });
    
    module.exports = mongoose.model('User', UserSchema)`
    },{
    language: "javascript",
    title: 'add grqphQL midleware & schema',

code: `// Bring in  graphQL middleware
const { graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools')

const { typeDefs } = require('./schema');
const { resolvers } = require('./reaolvers');

// create schema 
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});`
    },{
    language: "javascript",
    title: 'connect schema graphQL',

code: `// create graphql application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));
// conect schema to graphQL
app.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress(({ currentUser }) => ({
      schema,
      context: {
        Recipe,
        User,
        currentUser
      }
    }))
  );`
    },{
    language: "javascript",
    title: 'schema graphQL',

code: `exports.typeDefs = \`
type Recepy {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
}

type User {
    username: String! @unuque
    password: String!
    email: String!
    joinDate: String
    favorites: [Recepy]
}
\`;`
    },{
    language: "javascript",
    title: 'mutation graphQL',

code: `mutation {
    addRecipe(name: "ldkfj", imageUrl: "url", description: "description", category: "category", instructions: "instructions") {
      name
      imageUrl
      description
    }
  }`
    },{
    language: "javascript",
    title: 'query graphQL',

code: `query{
    getAllRecipes {
      _id
      name
      category
    }
  }`
    },{
    language: "javascript",
    title: '',

code: ``
    },
]

