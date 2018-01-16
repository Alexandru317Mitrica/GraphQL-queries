import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import axios from 'axios';

let AngleInfo = new GraphQLObjectType({
  name: "AngleInfo",
  fields: () => ({
    "login": { type: GraphQLString },
    "url": { type: GraphQLString },
  })
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    testing_query : {
      type: AngleInfo,
      args: {
        login : {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_,{login}) => {
        const url = `https://api.github.com/orgs/${login}`;
        return axios.get(url)
                    .then(function(response) {
                      return response.data;
                    });
      }
    },
  })
});

const schema = new GraphQLSchema({
  query
});

