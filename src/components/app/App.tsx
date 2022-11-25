import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';
import Home from "../../pages/home/Home";

import Layout from "../layout/Layout";

import "../../common/styles";
import "./app.css";


function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
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
          <Route path="gallery" element={<Gallery />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ApolloProvider>
    </>
    );
}

export default App;