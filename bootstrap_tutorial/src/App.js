
import './App.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function App() {
  return (
    <div className="App">
       <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
     <Button>ADD</Button>
    </div>
  );
}

export default App;
