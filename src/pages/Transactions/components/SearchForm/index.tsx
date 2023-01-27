import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormConatiner } from './styles'

export function SearchForm() {
  return (
    <SearchFormConatiner>
      <input type="text" placeholder="Buscar transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormConatiner>
  )
}
