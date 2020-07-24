import React from 'react';
import { observer } from 'mobx-react';



@observer class Create extends React.Component {
    addUser=()=>{
        const name = prompt('Name user:')
        const pay = parseInt(prompt('Pay user:'))
        this.props.store.addNewUser({name,pay})
    }
    clearList = () => { this.props.store.clearUser() }
    render() { 
        return (
            <div className='controls'>
            <button onClick={this.clearList}>Clear table</button>
            <button onClick={this.addUser}>Add user</button>
        </div>
        );
    }
}
 
export default Create;