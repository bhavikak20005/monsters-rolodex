import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],  
      searchfield: ''    

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users};
      },
      () => {
        console.log(this.state);
      }

      ));
  }

  onsearchchange = (event) => {console.log(event.target.value);
    const searchfield = event.target.value.toLocaleLowerCase();      

    this.setState(() => {
      return {searchfield};
    });
  };

  render () {

    const {monsters, searchfield} = this.state;
    const {onsearchchange} = this;

    const filteredmonsters= monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);

    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox className = 'monsters-search-box' onChangeHandler = {onsearchchange} placeholder = 'search monsters'/>
       
        <CardList monsters={filteredmonsters}/>
       
        
        
      </div>
    );
  }
  
}

export default App;
