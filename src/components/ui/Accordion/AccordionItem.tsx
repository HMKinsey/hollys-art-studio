import { Dispatch, SetStateAction } from 'react';
import { dataType } from '../../../types/accordion.types';
import Button from '../Button/Button';

interface AccordionItemProps {
  data: dataType;
  selectedAccordionItem: number | null;
  setSelectedAccordionItem: Dispatch<SetStateAction<number | null>>;
}

function AccordionItem({
  data,
  selectedAccordionItem,
  setSelectedAccordionItem,
}: AccordionItemProps) {
  function handleSelect(dataexample: dataType): void {
    setSelectedAccordionItem(
      dataexample.id === selectedAccordionItem ? null : dataexample.id
    );
  }

  return (
    <div key={data.id} className={'outline outline-2 outline-pink-500'}>
      <Button buttonText={data.title} onClick={() => handleSelect(data)} />
      {data.id === selectedAccordionItem && <div> {data.content} </div>}
    </div>
  );
}

export default AccordionItem;
