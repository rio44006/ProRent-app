# ProRent - Marketplace de Aluguel de Carros P2P

## Descrição

Plataforma inovadora de aluguel de carros peer-to-peer (P2P) que conecta proprietários e locatários através de uma interface moderna e segura.

## Stack Tecnológico

- **Frontend**: React + Vite
- **Linguagem**: JavaScript/TypeScript (ES6+)
- **Estilização**: Tailwind CSS
- **Autenticação**: Firebase Authentication
- **Banco de Dados**: Firestore
- **Armazenamento**: Firebase Storage
- **Pagamentos**: Stripe Connect
- **Documentos**: jsPDF para geração de contratos
- **Chat Real-time**: Firestore Listeners

## Funcionalidades Principais

### Para Proprietários
- Cadastro e gestão de veículos
- Definição de preços e disponibilidade
- Chat em tempo real com locatários
- Recebimento de pagamentos via Stripe Connect
- Geração automática de contratos PDF

### Para Locatários
- Busca e filtro de veículos
- Chat direto com proprietários
- Checkout seguro com Stripe
- Assinatura de contrato digital
- Histórico de locuções

## Instalação

```bash
# Clonar repositório
git clone https://github.com/rio44006/ProRent-app.git
cd ProRent-app

# Instalar dependências
npm install

# Instalar dependências adicionais
npm install firebase jspdf @stripe/stripe-js

# Configu rar variáveis de ambiente (.env.local)
VITE_FIREBASE_API_KEY=sua_chave_api
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe

# Executar em desenvolvimento
npm run dev
```

## Deploy

### Vercel

1. Conectar repositório GitHub à Vercel
2. Configurar variáveis de ambiente
3. Deploy automático em cada push

## Estrutura do Projeto

```
src/
  ├─ firebase/
  ├─ contexts/
  ├─ components/
  ├─ services/
  ├─ pages/
  └─ App.tsx
```

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

MIT

## Contato

**rio44006@gmail.com**
