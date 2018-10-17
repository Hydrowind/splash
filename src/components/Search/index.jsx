import React from 'react'
import MaterialIcons from '../MaterialIcons'
import './style.scss'

class Search extends React.Component{
    state = {
        searchKey: ``
    }
    
    changeHandler = (e) => {
        this.setState({searchKey: e.target.value})
    }

    render(){
        return(
            <div className='Search'>
                <input type="text" name="search" placeholder='search' onChange={this.changeHandler} value={this.state.searchKey}/>
                <MaterialIcons icon='search' size='2'/>
            </div>
        )
    }
} 

export default Search