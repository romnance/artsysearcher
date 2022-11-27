import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Label from "../label/Label";
import { Edge } from "../../common/interfaces/artists";
import "./artists.css";
import visitedPages from "../../common/visitedPages";


interface ArtistsItemProps {
    artist: Edge
}

const ArtistsItem: React.FC<ArtistsItemProps> = ({ artist }: ArtistsItemProps) => {
const [visited, setVisited] = useState(false);

useEffect(() => {
    setVisited(visitedPages.checkPage(artist.node.slug))
}, [])

const handleClick = () => {
    visitedPages.addPage(artist.node.slug);
    setVisited(!visited)
}

  return (
            <li key={artist.node.id} className={visited ? "Visited" : undefined}> 
                <div className="Artist-card">
                <Link to={artist.node.href} className="Card-link" onClick={handleClick}  target="_blank" />
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
  );
}

export default ArtistsItem;