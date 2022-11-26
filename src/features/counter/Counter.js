import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  changingPriceByName,
  sellItem,
  selectCount,
  selectItems,
  selectSalesItems,
  numOfItemsInStore,
  numOfAllItems,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  
  
  const [priceAmount, setPriceAmount] = useState('');
  const [itemName, setItemName] = useState('');

  const [newPriceAmount, setNewPriceAmount] = useState('');
  const [changeItemName, setChangeItemName] = useState('');
  
  const priceValue = Number(priceAmount) || 0;
  const items = useSelector(selectItems);
  const sales = useSelector(selectSalesItems);
  const newPriceValue = Number(newPriceAmount) || 0;
  
  const numItemsInStore = useSelector(numOfItemsInStore);
  const totalItems = useSelector(numOfAllItems);
// console.log(numItemsInStore);
  return (
    <div>
        

      <div >Number of items in store now:{numItemsInStore}</div>
      <div >The total amount of products that were in the store:{totalItems}</div>
      <div className={styles.row}>
      
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

      {items.length > 0 ? <div>
            <div className={styles.row}>
      
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
          </div>
      <div className={styles.value}>Items for offer:</div></div> : null}
      {items.map((i,k) => 
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


        {sales.length > 0 ? <div className={styles.value}>Sales:</div> : null}
        {sales.map(i => 
          <div className={styles.row}>
            <li >
              {`Item: ${i.name} Sold for:${i.price}₪ `}

            </li>
          </div>
        )}   
    </div>
  );
}
