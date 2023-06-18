export interface Text {
    title: string;
    body: string;
    date: string;
    slug: string;
}

export interface Paintings {
    title: string;
    description: string;
    paintings: Painting[];
    date: string;
    slug: string;
}

export interface Painting {
    title: string;
    description: string;
    image: string;
    dimensions: string;
}

export interface Film {
    title: string;
    date: string;
    link: string;
    slug: string;
}

    