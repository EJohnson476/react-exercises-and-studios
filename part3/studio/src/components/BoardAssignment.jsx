import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{"label": "Italian", "value": "1"},{"label": "Pasta Lovers", "value": "2"},{"label": "Dinner Ideas", "value": "3"}];
   const [boardName,setName] = useState('no boards yet!');
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((data, id) => {return(<option key={id} value={data.value}>{data.label}</option>)})}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
