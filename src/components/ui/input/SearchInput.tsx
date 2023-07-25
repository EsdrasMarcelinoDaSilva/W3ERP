import * as C from '../../../assets/styles/global-styles'
import { SearchInputProps } from '../../../types/SearchInputProps'

const SearchInput: React.FC<SearchInputProps> = ({ icon, onChange }) => {
  return (
    <C.InputWrap>
      <C.InputSearch
        type="text"
        placeholder="Pesquise uma palavra-chave"
        onChange={onChange}
      />
      <C.IconWrap>{icon}</C.IconWrap>
    </C.InputWrap>
  )
}
export default SearchInput
