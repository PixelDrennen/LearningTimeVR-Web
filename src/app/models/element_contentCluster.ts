import { element_content } from './element_content';
import { metadata_location } from './metadata/metadata_location';
export interface element_contentCluster {
    title?: string;
    description?: string;
    header?: string;

    //transitions
    transitionFrom?: number;
    transitionTo?: number;

    content?: element_content;

    // meta data
    creatorName?: string;
    tags?: string[];
    startingLocation?: metadata_location;
    devDescription?: string;
    previewSprite?: string;
}