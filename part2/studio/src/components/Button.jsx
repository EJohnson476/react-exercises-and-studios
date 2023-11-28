import ClickedButton from "./ClickedButton.jsx";
import SaveButton from "./SaveButton.jsx";
import "./styling.css";

function Button(props) {
  const saveButton = props.saveButton;
 
  let answer = (saveButton) ? SaveButton() : ClickedButton();
   return answer;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 