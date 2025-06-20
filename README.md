# Pokedex Ionic App

<!-- PROJECT SHIELDS -->
<div align="center">
  <img src="https://img.shields.io/github/contributors/wectornanime/pokedex-ionic-app.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/wectornanime/pokedex-ionic-app.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/v/release/wectornanime/pokedex-ionic-app?style=for-the-badge" />
  <img src="https://img.shields.io/badge/status-in%20development-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/netlify/b95f1530-e877-4441-ad45-90b733875b3d?style=for-the-badge" />
</div>
<!-- USED TECHNOLOGIES -->
<div align="center">
  <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=Capacitor&logoColor=white" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/PokeAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black" />
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#descrição-do-projeto-">Descrição do projeto</a></li>
    <li><a href="#deploy-da-aplicação-">Deploy da aplicação</a></li>
    <li><a href="#funcionalidades-️">Funcionalidades</a></li>
    <li><a href="#pré-requisitos-">Pré-requisitos</a></li>
    <li><a href="#tarefas-em-aberto-">Tarefas em aberto</a></li>
    <li><a href="#como-rodar-a-aplicação-️">Como rodar a aplicação</a></li>
    <li><a href="#desenvolvedorescontribuintes-octocat">Desenvolvedores/Contribuintes</a></li>
    <li><a href="#licença-️">Licença</a></li>
  </ol>
</details>

## Descrição do projeto 📝
Este projeto foi criado com Ionic + Angular, utilizando a API PokeAPI para consultar dados dos Pokémons.
O projeto usa a injeção de dependência nos serviços do Angular para consumir a API. 
A interface é responsiva e adaptada para retrato e paisagem.
Na página principal temos uma lista de pokémons que mostra a imagem, o número e os tipos de cada, acessando um, vamos para a página de detalhes que mostra mais informações.
Os commits seguem o padrão do [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/) para commits claros e diretos.
O código segue um padrão standalone para facilitar manutenção.
O projeto ainda contará com testes unitários e página de favoritos.

## Deploy da aplicação 💨
[deploy usando netlify](https://ionicpokedex.netlify.app/home)

## Funcionalidades 🛠️
- :heavy_check_mark: Lista dos Pokémons
- :heavy_check_mark: Detalhes sobre os Pokémons
- :heavy_check_mark: Responsividade
- :warning: Paginação
- :warning: Testes unitários
- :warning: Página de Favoritos
- :x: Pesquisar pokémon por nome

## Pré-requisitos ✅
- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- [Git](https://git-scm.com/) para clonar o projeto e acompanhar os commits

> Opcional:
> - Editor recomendado: [Visual Studio Code](https://code.visualstudio.com/)
> - Extensões úteis: Angular Language Service, ESLint, Prettier
> - [Angular CLI](https://angular.dev/tools/cli/setup-local) (`npm install -g @angular/cli`)

## Tarefas em aberto 🔄
- :warning: Paginação
- :warning: Testes unitários
- :warning: Página de Favoritos
- :x: Pesquisar pokémon por nome

## Como rodar a aplicação 🕹️
1. Clone o repositório:
```bash
git clone https://github.com/Wectornanime/pokedex-ionic-app.git
```
2. Entre no diretório:
```bash
cd pokedex-ionic-app
```
3. Instale as dependências:
```bash
npm install
```
4. Rode a aplicação:
```bash
ionic serve
```
> Você deve receber algo como: `localhost:8100`
5. Acesse a aplicação:
  - Acesse no seu navegador: `localhost:8100`
> O Ionic, pode abrir o seu navegador padrão já com a aplicação

## Desenvolvedores/Contribuintes :octocat:
| [<img src="https://github.com/wectornanime.png" width=115><br><sub>Wectornanime Felipe</sub>](https://github.com/wectornanime) |
| :---: |

## Licença ⚖️
The [MIT License](LICENSE)<br><br>
Copyright ©️ 2025 - Wectornanime Felipe<br>
Criado como parte de um desafio técnico usando Ionic + Angular e PokeAPI.
