# 🧪 Testes Automatizados com Cypress - SauceDemo

Este projeto contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar funcionalidades do site [saucedemo.com](https://www.saucedemo.com/) utilizando a resolução de tela do dispositivo **iPhone XR**.

## 📋 Descrição do Projeto

Os testes foram criados com o objetivo de verificar:

- Funcionalidade de login com diferentes tipos de usuários
- Adição de produtos ao carrinho de compras
- Exibição correta de mensagens de erro e elementos visuais

Todos os testes utilizam **Cypress** e são executados simulando o dispositivo **iPhone XR**, garantindo a responsividade da aplicação em dispositivos móveis.

---

## ✅ Pré-requisitos

Antes de rodar o projeto, verifique se você tem os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)
- npm (gerenciador de pacotes do Node, geralmente vem junto)

---

## 💻 Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```
2. Instale as dependências do projeto:

```bash
npm install
```
▶️ Como Rodar os Testes

Executar testes em modo interativo (GUI):
```bash
npx cypress open
```
Escolha o navegador e o teste que deseja executar na interface.

Executar testes no terminal (modo headless):
```bash
npx cypress run
```
🧪 Estrutura dos Testes

Os testes estão localizados em:

```pgsql
cypress/
├── e2e/
│   ├── login.cy.js          # Testes de login em iPhone XR
│   └── carrinho.cy.js       # Testes do carrinho em iPhone XR
```
📱 Dispositivo Simulado

Todos os testes usam a resolução do dispositivo iPhone XR, aplicada via:

```js
cy.viewport("iphone-xr");
```

🧑‍💻 Comandos customizados

O projeto utiliza um comando customizado cy.login() para simplificar os testes de autenticação. Verifique o arquivo:

```bash
cypress/support/commands.js
```

📄 Licença

Este projeto é apenas para fins educacionais e de demonstração. Nenhum direito autoral do site saucedemo.com é reivindicado.
