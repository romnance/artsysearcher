import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_ARTISTS = gql` 
  query SearchBarRefetchQuery(
  $term: String!
  $hasTerm: Boolean!
) {
  viewer {
  searchConnection(query: $term, entities: ARTIST, mode: AUTOSUGGEST, first: 20) @include(if: $hasTerm) {
    edges {
      node {
        displayLabel
        href
        __typename
        ... on SearchableItem {
          displayType
          slug
        }
        ... on Artist {
            imageUrl
            slug
          internalID
          imageUrl
          statuses {
            artworks
            auctionLots
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  }
}
`


interface ArtistsProps {
    term: string
}

const Artists: React.FC<ArtistsProps> = ({ term }: ArtistsProps) => {
  const { data, loading, error } = useQuery(GET_ARTISTS, {
    variables: { term: term, hasTerm: term !== "" }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const artists = data.viewer.searchConnection.edges;

  if (!artists.length) {
    return <p>No artists found. Find another one</p>;
  }

  return (
    <div
      style={{
        marginTop: "48px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        gap: 40,
      }}
    >
      {artists.map((artist: { node: { id: React.Key | null | undefined; displayLabel: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; imageUrl: string | undefined; }; }) => (
        <div key={artist.node.id}>  
        <p>{artist.node.displayLabel}</p>       
        <img
          src={artist.node.imageUrl}
          alt="Artist image"
          style={{
            width: "100%",
            border: "1px solid #222222",
          }}
        /></div>
       
      ))}
    </div>
  );
}

export default Artists;