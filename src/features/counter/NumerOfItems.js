import React from "react";
import styles from './Counter.module.css';
import {
    numOfItemsInStore,
    numOfAllItems,
  } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function NumerOfItems() {

const totalItems = useSelector(numOfAllItems);

const numItemsInStore = useSelector(numOfItemsInStore);
return (
    <h2 className={styles.value}>
        <br></br>
        <li >Number of items in store: {numItemsInStore}</li>
        <br></br>
        
        <li >Total amount of items were in the store: {totalItems}</li>
    </h2>
);
}