const lang = require('./data/languages')
const projects =  require('./data/projects')
const working_exp =  require('./data/works')

const controllers = {
  get_experiences() {
    return working_exp
  },
  get_projects () {
    return projects
  },
  get_a_project(id) {
    return projects.find(proj => proj.id  == id)
  },
  get_languages() {
    return lang;
  },
  get_tools() {
    return ['C(++)', 'Java', 'SQL', 'Shell Script (UNIX)']
  }
};

module.exports = controllers;
