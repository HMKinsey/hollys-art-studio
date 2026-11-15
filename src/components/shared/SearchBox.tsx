import { SearchboxTypes } from '../../types/generic';

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchboxText?: string;
  placeholder?: string;
  type?: SearchboxTypes;
}

function SearchBox({
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="h-5 w-40"
      />
    </main>
  );
}

export default SearchBox;
