# React Fruit Basket

🧺 A delicious basket of fruits

## Instructions

We will build an app that displays a list of fruits.

We will add an input field to allow users to search for fruits they want. As the user types, the list of fruits will update to match the users query. 

For instance, when a user types the letter 'o' in the search box, an initial list of fruits - apple, orange, and watermelon, will be filtered down to just orange and watermelon. This is because the letter 'o' can be found in both orange and watermelon.

Next, we want to split our components up in a logical manner. 

For good measure, add a CSS stylesheet.

Replace the list of fruits with an external one by fetching it from an external API service - https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits

Lastly, publish your app to GitHub Pages. Copy the link and add the link to the description in your repository.

## Handling user input

For input elements, we can use the `onChange` attribute and give it a handler function

```js
<input type="text" onChange={this.handleChange} />
```

## Fetch API

The Fetch API is a way to make network requests. This is typically used to consume an API service. 

```js
fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => {
    // do something with the data
  })
```

## Resources

- [Forms](https://reactjs.org/docs/forms.html)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
