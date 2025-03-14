export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: ComicData;
    series: SeriesData;
    stories: StoryData;
    events: EventData;
    urls: UrlData[];
  }
  
  export interface Thumbnail {
    path: string;
    extension: string;
  }
  
  export interface ComicData {
    available: number;
    collectionURI: string;
    items: ComicItem[];
    returned: number;
  }
  
  export interface ComicItem {
    resourceURI: string;
    name: string;
  }
  
  export interface SeriesData {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
  }
  
  export interface SeriesItem {
    resourceURI: string;
    name: string;
  }
  
  export interface StoryData {
    available: number;
    collectionURI: string;
    items: StoryItem[];
    returned: number;
  }
  
  export interface StoryItem {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  export interface EventData {
    available: number;
    collectionURI: string;
    items: EventItem[];
    returned: number;
  }
  
  export interface EventItem {
    resourceURI: string;
    name: string;
  }
  
  export interface UrlData {
    type: string;
    url: string;
  }
  