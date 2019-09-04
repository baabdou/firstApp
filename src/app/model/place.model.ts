
export interface Place {
    title: string;
    city?: string;
    country?: string;
    keyWords?: string;
    selected?: boolean;
    timestamp?: number;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
    photos?: string[];
}