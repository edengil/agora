import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  changingPriceByName,
  sellItem,
  selectCount,
  selectItems,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  
  const [priceAmount, setPriceAmount] = useState('');
  const [itemName, setItemName] = useState('');

  const priceValue = Number(priceAmount) || 0;
  const items = useSelector(selectItems);
  
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.value}>
        Name:
        <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
        />
        Price:
        <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={priceAmount}
            onChange={(e) => setPriceAmount(e.target.value)}
        />
        <button
            className={styles.button}
            onClick={() => dispatch(addItem({name:itemName,price:priceValue}))}
          >
          Add Item
        </button>
      </div>

      {/* {items.length > 0 ? <div> */}
            {/* <div className={styles.row}>
            Name:
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
                value={changeItemName}
                onChange={(e) => setChangeItemName(e.target.value)}
            />
            New price:
            <input
                className={styles.textbox}
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
          </div> */}
      {/* <div className={styles.value}>Items for offer:</div></div> : null} */}
      {/* {items.map((i,k) => 
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
        )}       */}
    </div>
  );
}
