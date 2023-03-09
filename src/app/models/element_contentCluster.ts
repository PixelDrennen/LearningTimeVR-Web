import { element_content } from './element_content';
import { metadata_location } from './metadata/metadata_location';
import { metadata_sprite } from './metadata/metadata_sprite';
export interface element_contentCluster {
    title?: string;
    description?: string;
    header?: string;

    //transitions
    transitionFrom?: number;
    transitionTo?: number;

    content?: element_content[];

    // meta data
    creatorName?: string;
    tags?: string;
    startingLocation?: metadata_location;
    devDescription?: string;
    previewSprite?: metadata_sprite;
}