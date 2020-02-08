const funcs = require('../../plugins/project_filter_plugin')
const projects = require('../../server/data/projects')

describe('#esta_no_array_de_filtros', () => {
    test('retorna true quando o elemento é encontrado no array', () => {
        expect(funcs.esta_no_array_de_filtros('eu', ['ele', 'eu', 'ela'])).toBeTruthy()
    }),
    test('retorna false quando o elemento é encontrado no array', () => {
        expect(funcs.esta_no_array_de_filtros('nos', ['ele', 'eu', 'ela'])).toBeFalsy()
    })
});

describe('#projetos_escolhidos', () => {
    test('retorna true se o projeto utiliza js', () => {
        expect(funcs.projetos_escolhidos(projects[8], ['js'])).toBeTruthy()
    }),
    test('retorna false se o projeto não utiliza js', () => {
        expect(funcs.projetos_escolhidos(projects[7], ['js'])).toBeFalsy()
    }),
    test('permite filtrar os n projetos que usam awk e/ou latex', () => {
        let resultado = projects.filter(proj => funcs.projetos_escolhidos(proj, ['awk', 'latex']))
        expect(resultado.length).toEqual(2);
    })
});