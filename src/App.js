// Libraries
import React from 'react';
import { Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
// Components
import {FormComponent, createFormData} from './component/form.component';
import MinimumSalary from './component/minimum-salary.component';
import PayersTable from './component/payers-table.component';
// Services
import { PayerService } from './service/payer.service';
// models
import Payer from './model/payer.model';
import AddPayer from './model/add-payer.model';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

/** Function to show a success message */
const success = (message) => {
  toast.success(message,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
    }); 
}

/** Function to show a error message */
const error = (message) => {
  toast.error(message,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
    });
}

class App extends React.Component {

  constructor(props) {
    super(props);
    // initialize the state
    this.state = {
      formData: createFormData(),
      payers: [],
      minimumSalary: '',
      hasChanged: false
    };

    // Bind them
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handleMSChange = this.handleMSChange.bind(this);
    this.handleMSSubmit = this.handleMSSubmit.bind(this);
  }

  async validateForm() {
    return new Promise((resolve, reject) => {  
      // Check if CPF is valid    
      if(this.state.formData.cpf == null || this.state.formData.cpf.length < 14) {
        error("Informe um CPF válido");
        resolve(false);
        return;
      }
      // Check if there is this CPF in the table 
      if(this.state.payers.filter(p => p.cpf === this.state.formData.cpf).length > 0) {
        error("CPF já cadastrado");
        resolve(false);
        return;
      }
      // Check if there is this CPF in the Database
      PayerService.has(this.state.formData.cpf).then(result => {
        if(result.has) {
          error("CPF já cadastrado");
          resolve(false);
          return;
        }
        // Check if name is valid
        if(this.state.formData.name == null || this.state.formData.name.length < 1) {
          error("Informe um Nome");
          resolve(false);
          return;
        }
        // Check if dependents is valid
        if(this.state.formData.dependents == null || this.state.formData.dependents.length < 1) {
          error("Informe a quantidade de dependentes");
          resolve(false);
          return;
        }
        // Check if Gross Salary is valid
        if(this.state.formData.grossSalary == null || this.state.formData.grossSalary.length < 1) {
          error("Informe a Renda Bruta");
          resolve(false);
          return;
        }
        // Everything's okay! Keep on.
        resolve(true);
      }).catch(() => {        
        reject('Erro ao buscar o CPF na base de dados');
      });            
    });    
  }

  validateMS() {
    if(this.state.minimumSalary == null) {
      error('Informe um Salário Mínimo');
      return false;
    }
    if(this.state.payers.length < 1) {
      error('É necessário informar pelo menos 1 contribuinte.');
      return false;
    }
    return true;
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
    // validate
    this.validateForm().then(valid => {
      if(!valid)
        return;

      // get data
      let data = this.state.payers;
      // ad Payer
      data.push(new Payer(this.state.formData));
      // update state
      this.setState({
        payers: data,
        formData: createFormData(),
        hasChanged: true
      });  
      // Show success message
      success("Contribuinte adicionado com sucesso!");
    }).catch(() => {
      error("Erro ao Cadastrar o contribuinte");
    });         
  }

  handleMSChange(event) {
    // Minimum Salary was changed
    this.setState({
      minimumSalary: event.target.value,
      hasChanged: true
    });
  }

  handleMSSubmit(event) {
    event.preventDefault();   
    // validate 
    if(!this.validateMS() || !this.state.hasChanged)
      return;
    // Call API
    PayerService.add(new AddPayer(this.state.payers, this.state.minimumSalary)).then((result) => {
      if(result.success) {
        this.setState({
          payers: result.data,
          hasChanged: false
        });
        // Show success message
        success("IR calculado com sucesso!");        
      } else {
        // Show error message
        error("Erro ao calcular IR!");
      }
    }).catch(() => {
      // Show error message
      error("Erro ao calcular IR!");
    });
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
            <PayersTable data={this.state.payers} visible={this.state.payers.length > 0} />
          </Card.Body>
        </Card>
        <ToastContainer/>
      </div>
    );
  }

}

export default App;
