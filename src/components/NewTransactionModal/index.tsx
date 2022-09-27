import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { ButtonType, NewTransactionModalContainer, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('')

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    resetFormFields()
    onRequestClose()
  }

  const resetFormFields = () => {
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'>

      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <NewTransactionModalContainer onSubmit={handleCreateNewTransaction} >
        <h2>Cadastrar transação</h2>

        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder='Título' />

        <input
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          type="number"
          placeholder='Valor' />

        <TransactionTypeContainer>
          <ButtonType
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>
          <ButtonType
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </ButtonType>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={event => setCategory(event.target.value)}
          type="text"
          placeholder='Categoria' />

        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  )
}