class Noticia {
  constructor(titulo, data_publicacao, resumo, texto) {
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

  mostrarNoticia() {

    return `${this.titulo}\n${this.data_publicacao}\n${this.resumo}\n\n${this.texto}`;

  }

}

let mostrar = new Noticia("Mãe abandona duas crianças pequenas e vizinhos chamam polícia", "08/03/2022", "Profissionais constaram situação de abandono e abrigaram as crianças.\nEssa não seria a primeira vez que mãe abandona as filhas enquanto sai.", "Duas meninas, uma com menos de um ano de idade e a outra com dois anos,foram resgatadas pelo Conselho Tutelar de Santos,no litoral de São Paulo,após vizinhos denunciaram a mãe das crianças.Ao chegar à residência na manhã desta terça-feira(18) os profissionais constaram a situação de abandono e levaram as duas crianças para um abrigo.");

console.log(mostrar.mostrarNoticia());