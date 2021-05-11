// import logo from './logo.svg';
import './App.css';
import './Form/Form.js';
import './View/View.js';
import './Popup/Popup.js';
import Form from './Form/Form.js';
import View from './View/View.js';
import Popup from './Popup/Popup.js';

/* 
class App extends Component {
  state = {
      fieldInput: "",
      }
  }

inputValueHandler = (event) => {
  console.log("input was used");

  this.setState({
      fieldInput: event.target.value,
  });
  console.log(this.state.fieldInput);
};

 */
function App() {
  return (
    <div>
      < Form />
      < View />
      < Popup /> 


    </div>
  );
}

export default App;
