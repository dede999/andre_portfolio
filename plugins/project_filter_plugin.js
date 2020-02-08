const funcs = {
    esta_no_array_de_filtros(ferramenta, lista_de_ferramentas) {
        return lista_de_ferramentas.indexOf(ferramenta) !== -1
    },
    projetos_escolhidos(projeto, lista_de_ferramentas) {
        return projeto.tools.some(ferramenta => this.esta_no_array_de_filtros(ferramenta, lista_de_ferramentas))
    }
}

module.exports = funcs