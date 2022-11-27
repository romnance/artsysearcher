import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';
import Home from "../../pages/home/Home";

import Layout from "../layout/Layout";

import "../../common/styles";
import "./app.css";
import Artist from "../../pages/artist/Artist";


function NoMatch() {
  return (
    <div className="Center Margins-vl Column Height">
      <h2>Nothing to see here!</h2>
      <p className="Margins-v">
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const App: React.FC = () => {
    return (
    <>
     <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artist/:name" element={<Artist />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ApolloProvider>
    </>
    );
}

export default App;