const issueLero1 = [
  "Nesse pull request, ",
  "Explica pro Product Onwer que ",
  "Dado o fluxo de dados atual, ",
  "Com este commit, ",
  "A equipe de suporte precisa saber que ",
  "Desde ontem a noite ",
  "Fala pro cliente que ",
  "Muitos clientes relataram que ",
  "Segundo a equipe de segurança da informação, ",
  "O Dependabot detectou que "
];
const issueLero2 = [
  "o último pull request desse SCRUM ",
  "o módulo de recursão paralela ",
  "o deploy automatizado no Heroku ",
  "a estrutura atual da organização ",
  "a compilação final do programa ",
  "o gerenciador de dependências do frontend ",
  "a otimização de performance da renderização do DOM ",
  "a UI de autenticação ",
  "a atualização nas tabelas do banco de dados ",
  "o serviço de autorizações ",
  "a api do chatbot ",
  "a biblioteca de envio de e-mails "
];
const issueLero3 = [
  "dificultou a resolução de conflito do fluxo de dados ",
  "afetou o desempenho na renderização dos argumentos ",
  "deletou todas as entradas ",
  "gerou um bug ",
  "diminuiu o desempenho ",
  "complexificou o merge ",
  "causou uma excessão no servidor ",
  "está apresentando dados imprecisos ",
  "realizou operações duplicadas ",
  "apresentou um loop infinito ",
  "crashou o serviço ",
  "apresentou falhas na segurança dos dados "
];
const issueLero4 = [
  "de uma configuração Webpack eficiente nos builds.",
  "na criação de novos polyfills para suportar os processos.",
  "do JSON compilado a partir de proto-buffers.",
  "de compilação multi-plataforma de forma asincrona.",
  "de estados estáticos nos componentes da UI.",
  "na organização alfanumérico dos arrays multidimensionais.",
  "na compilação de templates literais.",
  "da execução parelela de funções em multi-threads."
];
const solutionLero1 = [
  "Foi detectado que deve-se ",
  "Ao consultar o banco de dados, foi visto que é preciso ",
  "Após a equipe de teste realizar alguns procedimentos, foi relatado que será necessário ",
  "Os desenvolvedores seniores fizeram um teste de estresse e foi concluido que o problema seria resolvido ao ",
  "Após algumas reuniões com a equipe solucionadora, notamos que bugs similares seriam solucionados com a implantação de um RPA para ",
  "Problemas como esses são facilmente solucionados ao "
];
const solutionLero2 = [
  "atualizar regularmente ",
  "refatorar ",
  "excluir entradas desnecessárias d",
  "reinicializar ",
  "reestruturar ",
  "rever erros de sintaxe n",
  "realizar um downgrade para uma versão estável d",
  "substituir um serviço descontinuado ou obsoleto d",
  "recompilar diariamente ",
  "utilizar um serviço de IA n",
  "migrar "
];
const solutionLero3 = [
  "o banco de dados ",
  "o backend ",
  "o frontend ",
  "a UI de autenticação ",
  "a biblioteca de envio de e-mails ",
  "a api do chatbot ",
  "o deploy automatizado no Heroku ",
  "o deploy na nuvem do banco de dados ",
  "a compilação final do programa ",
  "o gerenciador de dependências do frontend "
];
const solutionLero4 = [
  "para uma tecnologia mais recente.",
  "para resolver alguns problemas relacionados a instabilidade do servidor.",
  "para obter resultados mais precisos.",
  "para uma melhor experiência de usuário.",
  "para otimizar o sistema em computadores mais limitados.",
  "para evitar excessões que causam crash ao servidor.",
  "para evitar dados duplicados.",
  "para evitar loop infito.",
  "para melhorar o desempenho.",
  "para reforçar a segurança dos dados."
];

function randomItem(arr) {
  const index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index];
}

function issueDescLero() {
  return (
    randomItem(issueLero1) +
    randomItem(issueLero2) +
    randomItem(issueLero3) +
    randomItem(issueLero4)
  );
}
function issueTitleLero() {
  let issueTitle1 = randomItem(issueLero2);
  let issueTitle2 = randomItem(issueLero3);
  return (
    issueTitle1.charAt(0).toUpperCase() +
    issueTitle1.slice(1) +
    issueTitle2.slice(0, -1)
  );
}
function solutionDescLero() {
  return (
    randomItem(solutionLero1) +
    randomItem(solutionLero2) +
    randomItem(solutionLero3) +
    randomItem(solutionLero4)
  );
}
function solutionTitleLero() {
  let solutionTitle1 = randomItem(solutionLero2);
  let solutionTitle2 = randomItem(solutionLero3);
  return (
    solutionTitle1.charAt(0).toUpperCase() +
    solutionTitle1.slice(1) +
    solutionTitle2.slice(0, -1)
  );
}

module.exports.lero = {
  issueTitleLero: issueTitleLero,
  issueDescLero: issueDescLero,
  solutionTitleLero: solutionTitleLero,
  solutionDescLero: solutionDescLero
};
