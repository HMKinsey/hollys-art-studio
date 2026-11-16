import { useState } from 'react';
import { cn } from '../../../lib/cn';
import { accordionVariant } from './accordionVarients';
import { dataType } from '../../../types/accordion.types';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  data: dataType[];
}

function Accordion({ data }: AccordionProps) {
  const [selectedAccordionItem, setSelectedAccordionItem] = useState<
    number | null
  >(null);

  return (
    <div className={cn(accordionVariant())}>
      <h1> Menu </h1>

      {data.map((dataexample) => (
        <AccordionItem
          key={dataexample.id}
          data={dataexample}
          selectedAccordionItem={selectedAccordionItem}
          setSelectedAccordionItem={setSelectedAccordionItem}
        />
      ))}
    </div>
  );
}

export default Accordion;
