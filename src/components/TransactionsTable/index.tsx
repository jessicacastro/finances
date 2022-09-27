import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { formatDateToBR } from '../../utils/formatDateToBR'
import { formatValueToBRL } from '../../utils/formatValueToBRL'

import { TransactionsTableContainer } from './styles'

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext)

  return(
    <TransactionsTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          { transactions.length > 0 && transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {formatValueToBRL(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {formatDateToBR(transaction.createdAt)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <p>Made with &hearts; by <a href='https://linkedin.com/in/jessicacastros'>Jessica Castro</a></p>
    </TransactionsTableContainer>
  )
}