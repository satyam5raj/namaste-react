import React from 'react'

const Square = ({value, onSquareClick}) => {

    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
    // }

  return (
        <button 
            onClick={onSquareClick}
            className='border border-black p-4 text-xl focus:outline-none w-16 h-16 box-border align-middle transition-none select-none'>{value}</button>
  )
}

export default Square