import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <p>
   <h3 className = {classes.choresText}>To Do List:</h3>
   <div className = {classes.choresHeading}>Wash dishes</div>
   <div className = {classes.choresHeading}>Prep-Work</div>
   <div className = {classes.choresHeading}>Buy groceries</div>
   </p>;
}