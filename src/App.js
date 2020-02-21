import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {FormComponent, createFormData} from './component/form.component';
import MinimumSalary from './component/minimum-salary.component';
import PayersTable from './component/payers-table.component';
import Payer from './model/payer.model';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formData: createFormData(),
      payers: [],
      minimumSalary: 0
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handleMSChange = this.handleMSChange.bind(this);
    this.handleMSSubmit = this.handleMSSubmit.bind(this);
  }

  handleFormChange(event) {    
    // get Data
    let data = this.state.formData;
    // change the value
    data[event.target.name] = event.target.value;
    // update state
    this.setState({
      formData: data
    });    
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // get data
    let data = this.state.payers;
    // ad Payer
    data.push(new Payer(this.state.formData));
    // update state
    this.setState({
      payers: data,
      formData: createFormData()
    });    
  }

  handleMSChange(event) {
    this.setState({
      minimumSalary: Number(event.target.value)
    });
  }

  handleMSSubmit(event) {
    event.preventDefault();

    alert(this.state.minimumSalary);
  }

  render() {
    return (
      <div className="app">
        <Card>
          <Card.Header>Cadastro de Contribuinte</Card.Header>
          <Card.Body>
            <FormComponent onChange={this.handleFormChange} onSubmit={this.handleFormSubmit} data={this.state.formData} />
            <hr/>
            <MinimumSalary onChange={this.handleMSChange} onSubmit={this.handleMSSubmit} value={this.state.minimumSalary}/>
            <hr/>
            <PayersTable data={this.state.payers} />
          </Card.Body>
        </Card>
      </div>
    );
  }

}

export default App;
