import { element_contentCluster } from "./element_contentCluster";
import { metadata_location } from "./metadata/metadata_location";
import { metadata_sprite } from "./metadata/metadata_sprite";

export interface element_lessonModule {
    title: string | null;
    description: string | null;
    
    contentClusters: element_contentCluster[] | null;
    
    // meta data
    creatorName: string | null;
    dateCreated: string | null;
    dateUpdated: string | null;
    header: string | null;
    tags: string | null;
    startingLocation: metadata_location | null;
    previewSprite: metadata_sprite | null;
    devDescription: string | null;
}