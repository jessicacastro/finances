import { useContext } from "react"

import { TransactionsContext } from "../../contexts/TransactionsContext"

import { SummaryContainer } from "./styles"

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export const Summary = () => {
  const transactions = useContext(TransactionsContext)

  const calculateIncomeTotal = () => 
    transactions.reduce((sum, transaction) => transaction.type === 'deposit' ? sum + transaction.amount : 0, 0)

  return(
    <SummaryContainer>
      <article>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </article>

      <article>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </article>

      <article className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </article>
    </SummaryContainer>
  )
}