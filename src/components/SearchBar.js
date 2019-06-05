
/**
 * contains the search input and header information 
 * @param {*} handleOnChange event handler method passed down as prop which listens for the user input
 */
const SearchBar = ({ handleOnChange }) => {
  return (
    <section className="container searchBar">
      <h1 className="title is-1 has-text-weight-bold	">Fruits Basket</h1>
      <h1 className="subtitle is-4 has-text-centered">Query the searchbar below to filter for fruits</h1>
      <input
        className="input is-medium has-text-centered"
        type="text"
        onChange={handleOnChange}
        placeholder="Type here"
      />
    </section>
  );
};
