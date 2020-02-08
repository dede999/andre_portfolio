const controllers = require('../controllers')
const { gql } = require('apollo-server-express')

const schemas = gql`
  type Experience {
    slug: String
    began: String
    ended: String
    desc_pt: String
    desc_en: String
    title_pt: String
    title_en: String
  }

  type Language {
    id: Int
    pt: String
    en: String
    speach_pt: String
    speach_en: String
    text_pt: String
    text_en: String
  }

  type Query {
    experiences: [Experience],
    languages: [Language]
  }
`;

const resolvers = {
  Query: {
    experiences() {
      return controllers.experinces();
    },
    languages() {
      return controllers.get_languages();
    }
  }
};

module.exports = { schemas, resolvers };
