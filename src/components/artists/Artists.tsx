import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Node } from "../../common/interfaces/artists";
import "./artists.css";
import ArtistsItem from "./ArtistsItem";

export const GET_ARTISTS = gql`
  query SearchBarRefetchQuery($term: String!, $hasTerm: Boolean!) {
    viewer {
      searchConnection(query: $term, entities: ARTIST, mode: AUTOSUGGEST, first: 20)
        @include(if: $hasTerm) {
        edges {
          node {
            displayLabel
            href
            __typename
            ... on Artist {
              imageUrl
              slug
              imageUrl
              statuses {
                artworks
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
`;

interface ArtistsProps {
  term: string;
}

const Artists: React.FC<ArtistsProps> = ({ term }: ArtistsProps) => {
  const { data, loading, error } = useQuery(GET_ARTISTS, {
    variables: { term: term, hasTerm: term !== "" },
  });

  if (loading) {
    return (
      <div className="Center">
        <div className="Loader" />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const artists = data.viewer.searchConnection.edges;

  if (!artists.length) {
    return (
      <div className="Center">
        <p className="Margins-vl Info-message">
          No results for <b>{term}</b>. Try again
        </p>
      </div>
    );
  }

  return (
    <div className="Inner">
      <ul className="List-grid Margins-vl">
        {artists.map((artist: { node: Node }) => (
          <ArtistsItem artist={artist} />
        ))}
      </ul>
    </div>
  );
};

export default Artists;
