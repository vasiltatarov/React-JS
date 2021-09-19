import './App.css';
import List from './components/List';

const testData = [
  { name: 'Vasil', company: 'Indeavr', image: 'https://i.ytimg.com/vi/Qzvxa89dgno/maxresdefault.jpg' },
  { name: 'Nasko', company: ' Facebook', image: 'https://www.kazanlak.com/common/images/thumbs/medium-20190711-HRNOWVDNACU-1562837133.jpg' },
];

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>The GitHub Cards App</h1>
        </header>
      </div>
      <List {...testData} />
    </div>
  );
}

export default App;
