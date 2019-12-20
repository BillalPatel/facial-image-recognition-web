import React from 'react';

class Form extends React.Component {
    render() { 
        return (
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">{this.props.formName}</legend>
                        {   this.props.displayNameField === true
                            ? 
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="firstname"
                                    id="firstname"
                                    onChange={this.props.nameChange}
                                />
                            </div>
                            :
                            <></>
                        }
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email Address</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"  
                                id="email-address"
                                onChange={this.props.emailChange}
                            />
                        </div>
                        <div className="mv3">
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.props.passwordChange}
                                />
                            </div>
                            {   this.props.confirmPassword === true 
                                ?
                                <>
                                    <div className="mt3"></div>
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                                    <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="password" 
                                        name="password"
                                        id="confirm-password"
                                        onChange={this.onPasswordChange}
                                    />
                                </>
                                :                                 
                                <></>
                            }
                        </div>
                    </fieldset>
                    <div>
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value={this.props.buttonName}
                            onClick={this.props.clickButton}
                        />
                    </div>
                    {   this.props.displaySignUpLink === true
                        ?
                        <div className="lh-copy mt3 hand">
                            <p className="f6 link dim black db" onClick={this.props.submitSignUp}>
                                Sign up
                            </p>
                        </div>
                        :
                        <></>
                    }
                </div>
            </main>
        )
    }
}

export default Form;