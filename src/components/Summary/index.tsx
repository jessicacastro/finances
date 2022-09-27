import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { formatValueToBRL } from '../../utils/formatValueToBRL'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { SummaryContainer } from './styles'


export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return(
    <SummaryContainer>
      <article>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>

        <strong>{formatValueToBRL(summary.deposits)}</strong>
      </article>

      <article>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt='Saídas' />
        </header>

        <strong>- {formatValueToBRL(summary.withdraws)}</strong>
      </article>

      <article className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>

        <strong>{formatValueToBRL(summary.total)}</strong>
      </article>
    </SummaryContainer>
  )
}