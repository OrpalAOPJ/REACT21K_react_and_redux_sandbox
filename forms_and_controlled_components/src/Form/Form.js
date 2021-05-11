import React from 'react';
import './Form.css';

const Form = (props) => {
	return (
        <header>
            <div>
                <h1>Form component</h1>
                <p>Here goes the form:</p>
                    <form>
                        <div>
                            <label htmlFor="firstname">First name: </label>
                            <input type="text" name="firstname" id="firstname" onChange={props.firstname}/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name: </label>
                            <input type="text" name="lastname" id="lastname" onChange={props.lastname}/>
                        </div>
                        <div>
                            <label htmlFor="phonenumber">Phone number: </label>
                            <input type="text" name="phonenumber" id="phonenumber" onChange={props.phonenumber}/>
                        </div>
                        <div>
                            <label htmlFor="role">Role: </label>
                            <input type="select" name="role" id="role" onChange={props.role}/>
                        </div>
                        <div>
                            <label htmlFor="message">Message: </label>
                            <input type="textarea" name="message" id="message" onChange={props.message}/>
                        </div>
                    </form>

            </div>
        </header>
    );
};

export default Form;