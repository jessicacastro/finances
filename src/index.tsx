import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'desenvolvimento',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date(),
        },
      ];
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);