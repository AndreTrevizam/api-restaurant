
# API para Restaurante

Bem-vindo ao repositório da API para gestão de restaurante! Esta API foi desenvolvida para facilitar a administração de um restaurante, permitindo operações CRUD (Create, Read, Update, Delete) em produtos (como pratos de comida), gerenciamento de mesas, criação de seções para mesas, e realização de pedidos. Abaixo, você encontrará todas as informações necessárias para configurar, utilizar e contribuir para este projeto.

## Funcionalidades

- **Gestão de Produtos:** Criar, ler, atualizar e deletar pratos de comida.

- **Gestão de Mesas:** Criar, ler, atualizar e deletar mesas.

- **Gestão de Seções:** Criar seções para mesas e fechá-las.

- **Gestão de Pedidos:** Fazer pedidos para mesas específicas.



## Stack utilizada

- **Back-end:** TypeScript (NodeJS)
- **Framework:** ExpressJS, Zod, KnexJS
- **Banco de dados:** SQLite3
- **Versionamento:** Git


## Rodando localmente

### Pré-requisitos:
- **Node.js instalado (versão 14.x ou superior)**
- **Git instalado**
- **Software para banco de dados: Beekeeper Studio (exemplo)**

Ao clonar o projeto, você receberá um arquivo JSON pré-configurado que pode ser importado diretamente no Insomnia (ou em outras ferramentas de teste de API, como o Postman). Esse arquivo contém todas as requisições necessárias para testar os endpoints da API de forma rápida e prática, permitindo que você explore as funcionalidades do sistema sem precisar configurar manualmente cada requisição. Basta importar o arquivo e começar a testar! 🚀

Clone o projeto

```bash
  git clone https://github.com/AndreTrevizam/api-restaurant.git
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

