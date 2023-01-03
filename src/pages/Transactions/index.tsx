import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/01/2000</td>
            </tr>
            <tr>
              <td>Alimentação</td>
              <td>
                <PriceHighlight variant="outcome">R$ 98,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>02/01/2000</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>01/01/2000</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
