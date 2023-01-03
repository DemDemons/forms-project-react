import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            gender: "",
            checkedYes: false,
            checkedHellYes: false,
            comment: "",
            list: "Tokyo",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let {name, value, type} = event.target
        if(type === "checkbox"){
            this.setState({[name]: value})
        } else {
            this.setState({[name]: value})
        }
    }
    handleSubmit(event){
        alert(JSON.stringify(this.state))
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Please enter first name:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label> 
                    <label>Please enter last name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <label>Please enter phoneNumber:
                        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <label>Please enter email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label> 
                    <label>
                        <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === "male"}/>  
                        Male
                    </label>   
                    <label>
                        <input type="radio" name="gender" value="female" onChange={this.handleChange} hecked={this.state.gender === "female"}/>
                        Female
                    </label>  
                        You gay?
                    <label>Yes
                        <input type="checkbox" name="checkedYes" value={true} checked={this.state.checked} onChange={this.handleChange}/>
                        Hell yes
                        <input type="checkbox" name="checkedHellYes" value={true} checked={this.state.checked} onChange={this.handleChange}/>
                    </label>
                    Please enter you thoughts and feelings, we will not read them nigga.
                    <textarea type="text" name="comment" value={this.state.comment} onChange={this.handleChange} />
                    <label>
                        Please select your destination:
                        <select onChange={this.handleChange} value={this.state.list} name="list" >
                            <option value="tokyo">Tokyo</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="computer">Computer</option>
                        </select>
                    <button type="submit">Submit</button>
                    </label>
                </form>
            </div>
        )
    } 

}

export default Form;