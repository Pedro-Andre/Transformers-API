# Transformers API

Uma API REST construída com Express e TypeScript para gerenciar informações sobre Cybertronians (personagens do universo Transformers).

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript

## 📁 Estrutura do Projeto

```
transformers-api/
├── src/
│   ├── app.ts                           # Configuração do Express
│   ├── server.ts                        # Entrada da aplicação
│   ├── routes.ts                        # Definição de rotas
│   ├── controllers/
│   │   └── cybertronians-controller.ts # Lógica dos endpoints
│   ├── services/
│   │   └── cybertronians-service.ts    # Regras de negócio
│   ├── repositories/
│   │   └── cybertronian-repository.ts  # Acesso a dados
│   ├── models/
│   │   ├── cybertronian-model.ts       # Model do Cybertronian
│   │   └── http-response-model.ts      # Model de resposta HTTP
│   └── utils/
│       └── http-helper.ts              # Funções utilitárias HTTP
├── arch/                                # Documentação de arquitetura
├── dist/                                # Saída transpilada (gerada)
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Pedro-Andre/Transformers-API
cd Transformers-API
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias:

```env
PORT=3333
```

## ▶️ Como Rodar

### Desenvolvimento

```bash
npm run start:dev
```

### Desenvolvimento com Hot Reload

```bash
npm run start:watch
```

### Produção

```bash
npm run start:dist
```

### Build

```bash
npm run dist
```

## 📚 Endpoints

A API está disponível em `/api` e oferece os seguintes endpoints:

### Cybertronians

| Método | Endpoint             | Descrição                    |
| ------ | -------------------- | ---------------------------- |
| GET    | `/cybertronians`     | Lista todos os Cybertronians |
| GET    | `/cybertronians/:id` | Obtém um Cybertronian por ID |
| POST   | `/cybertronians`     | Cria um novo Cybertronian    |
| PATCH  | `/cybertronians`     | Atualiza um Cybertronian     |
| DELETE | `/cybertronians/:id` | Deleta um Cybertronian       |

## 🏗 Arquitetura

O projeto segue um padrão em camadas:

- **Controllers**: Manipulam requisições HTTP e respostas
- **Services**: Contêm a lógica de negócio
- **Repositories**: Gerenciam o acesso aos dados
- **Models**: Definem as estruturas de dados

## 📝 Autor

Desenvolvido por [Pedro André]("https://github.com/Pedro-Andre")
