import { element_contentCluster } from "./element_contentCluster";
import { metadata_location } from "./metadata/metadata_location";
import { metadata_sprite } from "./metadata/metadata_sprite";

export interface element_lessonModule {
    title?: string;
    description?: string;
    
    contentClusters?: element_contentCluster[];
    
    // meta data
    creatorName?: string;
    dateCreated?: string;
    dateUpdated?: string;
    header?: string;
    tags?: string[];
    startingLocation?: metadata_location;
    previewSprite?: metadata_sprite;
    devDescription?: string;
}