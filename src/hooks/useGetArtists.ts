import {gql, useQuery} from "@apollo/client";
import { Artists, PopularArtist } from "../common/interfaces/artists";

const GET_ARTISTS = gql`
    {
   highlights {
     popularArtists(size: 20,) {
       name
     }
   }
 }
`
const GET_ARTIST = gql`
  {
    artists(id: "chloe", size: 20) {
       name
      }
  }
`
export const SEARCH_BAR_QUERY = gql` 
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

export const useSearchBarQuery = (term: string): any => {
  const { data } = useQuery(SEARCH_BAR_QUERY, {
    variables: { term: term, hasTerm: true }
  })
  return data;
}



export const useGetArtists = (): Artists[] | undefined => {
    const { data } = useQuery(GET_ARTISTS, {
        variables: { highlights: { popularArtists: { size: 10 } } }
    });
    return data
}

export const useGetArtist = (): PopularArtist | undefined => {
      const { data } = useQuery(GET_ARTIST);
    return data
}