import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_ARTISTS = gql` 
  query SearchBarRefetchQuery(
  $term: String!
  $hasTerm: Boolean!
) {
  viewer {
  searchConnection(query: $term, mode: AUTOSUGGEST, first: 20) @include(if: $hasTerm) {
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
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: 20,
      }}
    >
      {artists.map((artist: { node: { id: React.Key | null | undefined; displayLabel: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
        <p key={artist.node.id}>{artist.node.displayLabel}</p>
      ))}
    </div>
  );
}

export default Artists;