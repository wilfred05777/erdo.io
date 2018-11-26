import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


// const state ={
  
// }

class App extends Component {
    constructor(){
      super()
      this.state = {
        // robots: robots, 
        robots:[],
        searchfield: ''
      }

    }

  componentDidMount(){
    // console.log('check');
    // this.setState({robots: robots});

    fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response=> { return response.json();
      // })
      // .then(users => { this.setState({robots: users})
      // });

      .then(response=> response.json())
      .then(users => this.setState({robots: robots}));
  }

  onSearchChange = (event)=> {
    this.setState({searchfield: event.target.value})
   
    // console.log(filteredRobots);
  }

  render()
    {
        const filteredRobots = this.state.robots.filter(robots =>{
          return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0){
          return <h1>Loading</h1>
        } else{
            return(
              <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                  {/* <CardList robots ={this.state.robots}/> */}
                <Scroll>
                   <CardList robots ={filteredRobots}/>
                </Scroll>
              </div>
          );
        }        
     } 
}

export default App;