import { TransactionsTableContainer } from "./styles"

export const TransactionsTable = () => {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>

          <tr>
            <td>Compra de notebook</td>
            <td className="deposit">R$5.400,00</td>
            <td>Eletrônicos</td>
            <td>15/02/2021</td>
          </tr>

          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$200,00</td>
            <td>Casa</td>
            <td>12/02/2021</td>
          </tr>
        </tbody>
      </table>

      <p>Made with &hearts; by <a href="https://linkedin.com/in/jessicacastros">Jessica Castro</a></p>
    </TransactionsTableContainer>

  )
}