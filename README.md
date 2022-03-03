> NOTE: Esse é um projeto desenvolvido para a <a href="https://overall.cloud">Overall.Cloud</a>, todos os direitos são destinados a marca.

<p align="center">
   <br/>
   <a href="https://overall.cloud" target="_blank"><img width="150px" src="https://overall.cloud/wp-content/uploads/2021/08/lateral-icone-colorido-texto-colorido-overall-cloud.png" /></a>
   <h3 align="center">MEI ERP</h3>
   <p align="center">
   Gerenciamento descomplicado para o seu negócio.
   </p>
   <p align="center" style="align: center;">
        <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
        <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
        <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
        <img alt="Nginx" src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
        <img alt="Jenkins" src="https://img.shields.io/badge/Jenkins-D33833?style=for-the-badge&logo=jenkins&logoColor=white">
        <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
        <img alt="Ansible" src="https://img.shields.io/badge/Ansible-000000?style=for-the-badge&logo=Ansible&logoColor=white">
        <img alt="Prometheus`" src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white">
   </p>
</p>

## Visão Geral
O <b>MEI ERP</b> é um projeto para gerenciamento de pequenos negócios (MEI) com controle financeiro, clientes, produtos, estoque, vendas e orçamentos. O objetivo principal do projeto é facilitar o gerenciamento de pequenos negócios com investimento baixo no ERP.

## Projeto
Para o desenvolvimento do front-end e back-end foi utilizado as principais ferramentas e linguagens do mercado, se baseando nas vagas oferecidas para os cargos.

### Estruturas & Funcionalidades
* Autenticação (JWT, NextAuth)
* Routing
* CRUD
* Frameworks - JS && NODEJS
* Web Crawler
* Design Pattern
* Arch Pattern
* Message Broker
* Monitoramento
* GraphQL
* CI/CD

### Linguagens
* Javascript / Typescript
* Jenkins / Github Actions
* Redis
* Kafta / RabbitMQ
* Docker / Ansible / Terraform
* Apollo / Neo4J
* Prometheus / Grafana
* Jaeger / New Relic
* Elastic Stac
* AWS Services

## Como iniciar
### 1. Clone o repositório e instale as dependências

```
git clone https://github.com/gustavokennedy/mei-erp.git
cd mei-erp
npm install
```
### 2. Configurando variáveis locais

Copie o arquivo .env.local.exemplo para .env.local (que será ignorado pelo Git):

```
cp .env.local.exemplo .env.local
```

### Iniciar aplicação

Para inciar a aplicação, execute:

```
npm run dev
```

Para inciar a aplicação em modo de produção, execute:

```
npm run build
npm run start
```

### Preparando para Produção

### Monitoramento