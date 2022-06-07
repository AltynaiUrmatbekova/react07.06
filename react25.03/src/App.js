
function App() {
  const vegies = ["Carrot", "Potato", "Strawberry"];
  const fruits = ["Lemon", "Waterlemon", "Apple"];
  const plants = [
    {name: "Mango", color: "Yellow"},
    {name: "Apple", color: "Green"},
    {name: "Cherry", color: "Red"},
  ];

  const vegiesList = vegies.map((vegie) => {
    return <li>{vegie}</li>;
  })
  const plantsList = plants.map((plant)=> {
    return <li>
      {plant.name}: {plant.color}
    </li>
  })

  const fruitList = fruits.map((fruit)=> {
    return <li>{fruit}</li>
  })
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        {vegiesList}
        </ul>
        <ol>
          {fruitList}
          </ol>
     {plantsList}

     <List src={vegies} />
    </div>
  );
}

export default App;
