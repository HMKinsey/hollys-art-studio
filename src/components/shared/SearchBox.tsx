import { SearchboxTypes } from '../../types/searchbox.types';

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  autoFocus?: boolean;
  searchboxText?: string;
  placeholder?: string;
  type?: SearchboxTypes;
}

function SearchBox({
  autoFocus,
  searchTerm,
  setSearchTerm,
  searchboxText,
  placeholder,
  type = SearchboxTypes.TEXT,
}: SearchBoxProps) {
  return (
    <main>
      {searchboxText ?? <h1>{searchboxText}</h1>}
      <input
        type={type}
        autoFocus={autoFocus}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="h-5 w-40"
      />
    </main>
  );
}

export default SearchBox;
