import React from 'react'

export default class User extends React.Component{
    constructor(){ 
        super()
        //mendefinisikan state dalam constructor component
        this.state = { 
            username : 'Saepurizal'
        }
    }

    //cara membaca state 
    setUsername = () => {
       this.setState({
        username : "Rizal"
       })
    }

    //cara memanggil function yang sudah dibuat
    render(){
        return(
            <>
                <h1>{this.state.username}</h1>
                <br />
                <button onClick ={this.setUsername}>Set Username</button>
            </>
        )
    }
}