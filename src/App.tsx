import { useState } from 'react';

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import { TransactionsProvider } from './contexts/TransactionsContext';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

// Inform to react-modal that the modal will be opened inside the element with id="root"
Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}
