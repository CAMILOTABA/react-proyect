import './App.scss';
import { Alert } from 'antd';
import { Card } from 'antd';
import {DatePicker} from 'antd';


function App() {
  const date_test = (date, dateString) =>{
     console.log(date, dateString) 
    
  }
  
   return (
      <div className='app'>
        <div>
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="Warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
        </div>
        <label>Selecciona una fecha</label>
        <DatePicker on onChange={date_test}></DatePicker>
        <div>
        <Card 
            size='small'
            title='Tarjeta de presentacion'
            extra={<a href="a">ver mas</a>}
            style={{withd:300}}>
            <p>Camilo Tabares</p>
            <p>Ingeniero en sistemas y telecomunicaciones</p>
          </Card>
      </div>
    </div>
  );
}

export default App;
