import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

const link = from([
  new HttpLink({ uri: "https://dormdash-server.herokuapp.com/graphql" }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
