import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";



const client = new ApolloClient({
  uri: "https://56fuqte4bd.execute-api.us-east-1.amazonaws.com/dev/graphql", // your API url goes here,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
    
      <App />
   
    </React.StrictMode>
    
  </ApolloProvider>,
  document.getElementById("root")
);
