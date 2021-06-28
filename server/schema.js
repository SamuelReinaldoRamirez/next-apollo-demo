const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')
const faker = require('faker')
const casual = require('casual')
casual.define('user', function() {
  return {
      email: casual.email,
      name: casual.name,
      address: casual.address,
      phone: casual.phone
  };
});

function generateUser(){
  return casual.user
}

function arrayOfUsers(times, generator) {
  var result = [];
  for (var i = 0; i < times; ++i) {
      result.push(generator());
  }
  return result;
};


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      info: {
        type: GraphQLString,
        resolve() {
          return faker.name.findName()
        }
      },
      dummyUserList:{
        type: GraphQLString,
        resolve() {
          return JSON.stringify(arrayOfUsers(2000, generateUser))
        }
      },
      dummyUser:{
        type: GraphQLString,
        resolve() {
          return JSON.stringify(casual.user)
        }
      },
      dummyName: {
        type: GraphQLString,
        resolve() {
        return casual.name
        }
      },
      dummyEmail: {
        type: GraphQLString,
        resolve() {
        return casual.email
        }
      },
      dummyAddress: {
        type: GraphQLString,
        resolve() {
        return casual.address
        }
      },
      dummyPhone: {
        type: GraphQLString,
        resolve() {
        return casual.phone
        }
      }
    }
  })
})
