import React from "react";
import { useParams } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import "./artist.css";


export const GET_ARTIST_INFO = gql` 
query ArtistCareerHighlightsQuery(
  $slug: String!
) {
  artist(id: $slug) {
  name 
  formattedNationalityAndBirthday
  biographyBlurb( partnerBio: false) {
    text
  }
    imageUrl
    carousel {
        images {
            href
            resized(width: 300) {
                url
                width
                height
                }
              }
            }
 }
}
`


const Info: React.FC = () => {
    let { name } = useParams();
    const { data, loading, error } =  useQuery(GET_ARTIST_INFO, {
        variables : {slug: name}
  });
  
if (loading) {
    return(<div className="Center"><div className="Loader" /></div>);
  }
  if (error) {
    return <div>{error.message}</div>;
  }

const artist = data.artist;
  return (
    <>
        <div className="Artist-container">
            <div className="Artist-heading">
                    <img
                    className="Card-image"
                    src={artist.imageUrl}
                    alt="Artist"
                    />
                <div>
                    <h1>{artist.name}</h1>
                    <h2>{artist.formattedNationalityAndBirthday}</h2>
                </div>
            </div>
            <div className="Artist-info">
                <h4>Bio</h4>
                <p>{artist.biographyBlurb.text}</p>
            </div>
        </div>
        <div className="Center">
        <div className="List-grid">
            {artist.carousel.images.map((image: { resized: { url: string | undefined; }; }) => (
                <div className="Art-card">
                <img
                    className="Art-image"
                    src={image.resized.url}
                    alt="Artist"
                    />
                </div>
            ))}
        </div>
        </div>
        </>
  )
}

const Artist: React.FC = () => {
  let { name } = useParams();

  return (
      <div className="Inner">
            { name && <Info />}
      </div>
  );
}

export default Artist;