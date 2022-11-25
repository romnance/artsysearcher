    export interface Statuses {
        artworks: boolean;
        auctionLots: boolean;
        __typename: string;
    }

    export interface Node {
        displayLabel: string;
        href: string;
        __typename: string;
        imageUrl: string;
        slug: string;
        internalID: string;
        statuses: Statuses;
        __isNode: string;
        id: string;
    }

    export interface Edge {
        node: Node;
        __typename: string;
    }

    export interface SearchConnection {
        edges: Edge[];
        __typename: string;
    }

    export interface Viewer {
        searchConnection: SearchConnection;
        __typename: string;
    }

    export interface Data {
        viewer: Viewer;
    }

    export interface ArtistsList {
        data: Data;
    }