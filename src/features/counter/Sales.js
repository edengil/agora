import React from "react";
import styles from './Counter.module.css';
import {
    selectSalesItems,
    sumOfSales,
  } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Sales() {
const sales = useSelector(selectSalesItems);
const sumSales = useSelector(sumOfSales);

return (
    <div>
      <br></br>
    <div className={styles.value}>Total sale amount:{sumSales}₪</div>
    {sales.length > 0 ?
      <div className={styles.value}>Sales:</div> : null}
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