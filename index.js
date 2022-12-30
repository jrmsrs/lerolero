const tpLero1 = [
  "Nesse pull request, ",
  "Explica pro Product Onwer que ",
  "Dado o fluxo de dados atual, ",
  "Com este commit, ",
  "A equipe de suporte precisa saber que ",
  "Desde ontem a noite ",
  "Fala pro cliente que "
];
const tpLero2 = [
  "o último pull request desse SCRUM ",
  "o módulo de recursão paralela ",
  "o deploy automatizado no Heroku ",
  "a estrutura atual da organização ",
  "a compilação final do programa ",
  "o gerenciador de dependências do frontend ",
  "o módulo de recursão paralela ",
  "a otimização de performance da renderização do DOM "
];
const tpLero3 = [
  "dificultou a resolução de conflito do fluxo de dados ",
  "afetou o desempenho na renderização dos argumentos ",
  "deletou todas as entradas ",
  "gerou um bug ",
  "diminuiu o desempenho ",
  "complexificou o merge "
];
const tpLero4 = [
  "de uma configuração Webpack eficiente nos builds.",
  "na criação de novos polyfills para suportar os processos.",
  "do JSON compilado a partir de proto-buffers.",
  "de compilação multi-plataforma de forma asincrona.",
  "de estados estáticos nos componentes da UI.",
  "na organização alfanumérico dos arrays multidimensionais",
  "na compilação de templates literais.",
  "da execução parelela de funções em multi-threads."
];

function randomItem(arr) {
  const index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index];
}

function tpDescLero() {
  return (
    randomItem(tpLero1) +
    randomItem(tpLero2) +
    randomItem(tpLero3) +
    randomItem(tpLero4)
  );
}

function tpTitleLero() {
  let tpTitle1 = randomItem(tpLero2);
  let tpTitle2 = randomItem(tpLero3);
  return (
    tpTitle1.charAt(0).toUpperCase() + tpTitle1.slice(1) + tpTitle2.slice(0, -1)
  );
}

module.exports.tpLero = {
  tpTitleLero: tpTitleLero(),
  tpDescLero: tpDescLero()
};
