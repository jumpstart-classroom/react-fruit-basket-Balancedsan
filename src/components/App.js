
/**
 * centralized component App for all components
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      textValue: null
    };
  }

  /**
   * sets the initial fruits array value from the api
   */
  componentDidMount = async () => {
    try{
    const response = await fetch(
      'https://my-json-server.typicode.com/Balancedsan/fruitsApi/fruits/'
    )
    const fruits = await response.json();

    this.setState({
      fruits: fruits
    });
    }catch(err){
      console.log(err);
    }

  };

  /**
   * sets the state textvalue whenever the user has typed on the text input
   */
  handleOnChange = (event) => {
    this.setState({
      textValue: event.target.value.toLowerCase()
    });
  };

  /**
   * render each card to the screen based on the input keyed  by the user
   */
  renderCards = () => {
    if(this.state.textValue){
      const filtered = this.state.fruits.filter(fruit=> {
        return fruit.type.includes(this.state.textValue);
      })
      return this.createCards(filtered)
    }else{
      return this.createCards(this.state.fruits);
    }
  };

  /**
   * create the cards for each fruit based on the user query on the search bar
   * by default all cards are created when no input is keyed by the user
   */
  createCards = (array) =>{
    return array.map(fruit =>{
     const capitalizeName = fruit.type[0].toUpperCase() + fruit.type.slice(1);
      return (
          <Card
            key={fruit.id}
            name={capitalizeName}
            img={fruit.img}
            calories={fruit.calories}
          />
      );
    })
  }

  render() {
    return (
      <section className="is-family-monospace">
        <SearchBar handleOnChange={this.handleOnChange} />
        <section className="cards">{this.renderCards()}</section>
      </section>
    );
  }
}
