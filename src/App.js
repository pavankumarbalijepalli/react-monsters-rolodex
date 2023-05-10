import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters)
  }, [monsters, searchField])
  

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLowerCase();
//     this.setState(
//       () => {
//         return {
//           searchString,
//         };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   };

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });

//     // console.log(filteredMonsters);
//     return <div className="App"></div>;
//   }
// }

export default App;
