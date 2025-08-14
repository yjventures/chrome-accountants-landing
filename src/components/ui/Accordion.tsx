import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-ca-blue pr-4">{item.question}</span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-ca-mango flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-ca-mango flex-shrink-0" />
              )}
            </button>
            
            <div className={`transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
              <div className="px-6 pb-4 pt-2">
                <p className="text-ca-text leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;