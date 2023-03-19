import { useRef, useState } from 'react'

interface IAccordionItemProps {
  question: string
  answer: string
}

export default function AccordionItem({ answer, question }: IAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);

  const handleAccordionOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <li className='mt-4 border-2 rounded-lg border-gray-700'>
      <button
        className='w-full p-4 font-semibold flex items-center text-base sm:text-lg 
          font-sans uppercase text-[#05c8cb] justify-between'
        onClick={handleAccordionOpen}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        ref={answerRef}
        className='px-4 overflow-hidden transition-all ease-in-out duration-300'
        style={
          isOpen ? { height: answerRef.current?.scrollHeight } : { height: 0 }
        }>
        <p className='py-4 text-white text-lg'>{answer}</p>
      </div>
    </li>
  )
}