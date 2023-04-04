import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import Calendar from './Component/Calendar';
Modal.setAppElement('#root')
function App() {
  return (
    <Calendar/>
  );
}

export default App;
