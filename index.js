function calcularDiasDetalhados(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  // Calcula a diferença total em milissegundos
  const diferencaMilissegundos = hoje - nascimento;

  // Converte para dias totais
  const diasTotais = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

  // Cálculo detalhado de anos, meses e dias
  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();
  let dias = hoje.getDate() - nascimento.getDate();

  if (dias < 0) {
    meses -= 1;
    dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate(); // Dias no mês anterior
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  return {
    diasTotais,
    anos,
    meses,
    dias,
  };
}

// Exemplo de uso
const dataNascimento = "1984-09-24"; // Formato YYYY-MM-DD
const resultado = calcularDiasDetalhados(dataNascimento);

console.log(`Você viveu ${resultado.diasTotais} dias.`);
console.log(
  `Ou, detalhadamente: ${resultado.anos} anos, ${resultado.meses} meses e ${resultado.dias} dias.`
);
