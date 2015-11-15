var gql = require('gql');

module.exports = gql.and([
  gql.only('rs10246939', 'T'),
  gql.only('rs1726866', 'T'),
  gql.only('rs713598', 'C')
]);