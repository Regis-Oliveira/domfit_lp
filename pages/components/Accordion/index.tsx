import AccordionItem from '../AccordionItem';

const faq = [
  {
    id: 1,
    question: 'Em quanto tempo eu terei resultados com o MAX PRO?',
    answer: 'Com benefícios para o seu corpo, saúde, energia e disposição. Resultados podem variar de acordo com o organismo de cada pessoa. Aconselhamos o uso de 3 a 5 meses para melhores resultados.',
  },
  {
    id: 2,
    question: 'Como devo usar o MAX PRO?',
    answer: 'Indicado tomar MAX PRO Caps. 2(duas) vezes ao dia antes de cada refeição.',
  },
  {
    id: 3,
    question: 'Qual o prazo do entrega do MAX PRO?',
    answer: 'O prazo médio de entrega do MAX PRO para o Brasil é de até 5 dias úteis para Sul e Sudeste. Para as demais regiões, o prazo de entrega é de até 7 dias úteis, normalmente sendo entregue antes. O prazo passa a valer após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto.'
  },
  {
    id: 4,
    question: 'MAX PRO é aprovado pela Anvisa ?',
    answer: 'Por se tratar de um Suplemento alimentar, MAX PRO é um produto dispensado da obrigatoriedade de registro conforme RDC 27/2010.'
  },
  {
    id: 5,
    question: 'Pessoas com comorbidades podem fazer uso do produto ?',
    answer: 'Cada indivíduo tem características específicas, não temos como prever todas as possibilidades. Sempre contate seu médico e verifique se você tem alguma alergia aos ingredientes da fórmula.'
  },
]

export default function Accordion() {
  return (
    <section className='flex flex-col items-center justify-center w-full'>
      <span className='text-4xl text-gray-400 font-bold mb-3'>Dúvidas frequentes:</span>
      <ul className='max-w-3xl px-6'>
        {faq.map(faq => (
          <AccordionItem key={faq.id} {...faq}/>
        ))}
      </ul>
    </section>
  )
}
