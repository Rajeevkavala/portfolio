import React from 'react'

type Props = {
    plainText: string;
    highlightedText: string;
}

const SectionHeader = ({plainText,highlightedText}: Props) => {
  return (
    <h2 className='text-[22px] md:text-[35px]
    px-20 text-center mb-5'>
        {plainText}{" "}<span className='
        highlight px-2 whitespace-nowrap'>{highlightedText}</span>
    </h2>
  )
}

export default SectionHeader