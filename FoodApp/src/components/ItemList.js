import React from 'react'
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("pizza"))
    }
    console.log(items)
  return (
    <div>
            {
                items.map(item => (
                    <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                        <div className='w-10/12'>
                            <div className='py-2'>
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className='text-xs'>{item.card.info.description}</p>
                        </div>
                        <div className='w-2/12 p-4'>
                            <div className='absolute'>
                                <button className='p-2 mx-10 rounded-lg bg-black text-white shadow-lg m-auto'
                                    onClick={handleAddItem}
                                >
                                    Add
                                </button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId}></img>
                        </div>
                    </div>
                ))}
    </div>
  )
}

export default ItemList