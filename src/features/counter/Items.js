import React, { useState }  from "react";

import styles from './Counter.module.css';
import {
    selectItems,
    sellItem,
    changingPriceByName,
  } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Items() {
const dispatch = useDispatch();
const items = useSelector(selectItems);
const [searchInput, setSearchInput] = useState('');
const [changeItemName, setChangeItemName] = useState('');
const [newPriceAmount, setNewPriceAmount] = useState('');
const newPriceValue = Number(newPriceAmount) || 0;


return (
    <div>
        <div className={styles.value}>Search item:</div>

        <input 
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
            />
        <div className={styles.value}>change price:</div>

            <div className={styles.row}>
            <div className={styles.value}>
            Name:
            </div>
            <input
                aria-label="Set increment amount"
                value={changeItemName}
                onChange={(e) => setChangeItemName(e.target.value)}
            />
            <div className={styles.value}>
            New price:
            </div>

            <input
                aria-label="Set increment amount"
                value={newPriceAmount}
                onChange={(e) => setNewPriceAmount(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => dispatch(changingPriceByName({name:changeItemName,price:newPriceValue}))}
              >
              Change
            </button>
            </div>
          <div className={styles.value}>List of items for sale:</div>

        {items.filter(i => i.name.toLowerCase().includes(searchInput)).map((i,k) => 
          <div className={styles.row}key={k}>
            <li >
              {`Item: ${i.name} Price: ${i.price}₪ `}
               <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(sellItem({name:i.name,price:i.price}))}
              > Buy Item</button>
            </li>
          </div>
        )}    
    </div>
);
}