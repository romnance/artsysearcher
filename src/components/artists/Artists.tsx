import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Label from "../label/Label";
import { Node } from "../../common/interfaces/artists";
import "./artists.css"

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
    return(<div className="Center"><div className="Loader" /></div>);
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const artists = data.viewer.searchConnection.edges;

  if (!artists.length) {
    return(<div className="Center"><p className="Margins-vl Info-message">No results for <b>{term}</b>. Try again</p></div>);
  }

  return (
    <div className="Inner">
        <div className="Center">
            <p className="Description Text-center">
                See works of your favorite artists and get inspired!
            </p>
        </div>
        <ul className="List-grid Margins-vl">
        {artists.map((artist: { node: Node }) => (
            <li key={artist.node.id}> 
                <div className="Artist-card">
                <Link to={artist.node.href} className="Card-link" />
                <figure>
                    <img
                    className="Card-image"
                    src={artist.node.imageUrl}
                    alt="Artist"
                    />
                </figure>
                <div className="Card-info">
                <h3>{artist.node.displayLabel}</h3>
                {artist.node.statuses.artworks && <Label label="Artworks" />}  
                </div>
                </div>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default Artists;