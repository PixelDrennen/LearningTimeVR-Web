import { element_content } from './element_content';
import { metadata_location } from './metadata/metadata_location';
import { metadata_sprite } from './metadata/metadata_sprite';
export interface element_contentCluster {
    title: string | null;
    description: string | null;
    header: string | null;

    //transitions
    transitionFrom: number | null;
    transitionTo: number | null;

    content: element_content[] | null;

    // meta data
    creatorName: string | null;
    tags: string | null;
    startingLocation: metadata_location | null;
    devDescription: string | null;
    previewSprite: metadata_sprite | null;
}