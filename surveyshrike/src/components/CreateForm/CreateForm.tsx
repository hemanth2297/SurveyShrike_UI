//Form component
import React from 'react';
import { fillForm } from '../../assets/form';

export default class Form extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event: any) {
        alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
        event.preventDefault();
    }
    createForm = () => {
        const response = fillForm()
        console.log(response)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="nameImput">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" id="nameImput" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailImput">Name</label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
                    </div>
                    <input onClick={this.createForm} className="btn btn-primary" />
                </form>
            </div>
        )
    }
}