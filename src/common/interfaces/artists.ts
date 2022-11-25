
    export interface PopularArtist {
        name: string;
    }

    export interface Highlights {
        popularArtists: PopularArtist[];
    }

    export interface Data {
        highlights: Highlights;
    }

    export interface Artists {
        data: Data;
    }
