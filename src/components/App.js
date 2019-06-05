
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
    const fetchedResponse = await fetch(
      'https://my-json-server.typicode.com/Balancedsan/fruitsApi/fruits/'
    ).then((response) => response.json());

    this.setState({
      fruits: fetchedResponse
    });
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
   * by default all cards are rendered on the screen
   */
  renderCards = () => {
    // filter the fruits if the fruit name contains the characters the user has input in the searchbar and render the cards otherwise render all cards
    let fruitsResult = [...this.state.fruits];

    if (this.state.textValue) {
      fruitsResult = fruitsResult.filter((fruit) => {
        return fruit.type.includes(this.state.textValue);
      });
    }

    return fruitsResult.map((fruit) => {
      const capitalizeName = fruit.type[0].toUpperCase() + fruit.type.slice(1);
      return (
          <Card
            key={fruit.id}
            name={capitalizeName}
            img={fruit.img}
            calories={fruit.calories}
          />
      );
    });
  };

  render() {
    return (
      <section className="is-family-monospace">
        <SearchBar handleOnChange={this.handleOnChange} />
        <section className="cards">{this.renderCards()}</section>
      </section>
    );
  }
}
