import { metadata_location } from "./metadata/metadata_location";
import { metadata_sprite } from "./metadata/metadata_sprite";

export interface element_content {
    title?: string;
    description?: string;

    // URLs
    getURL?: string;
    setURL?: string;
    cachedFilePath?: string;

    // transform
    position?: any;
    rotation?: any;
    scale?: any;

    stringParameters?: string[];
    floatParameters?: number[];
    availableImagesContent?: metadata_sprite[];

    // meta data
    id?: string;
    dateCreated?: string;
    dateUpdated?: string;
    creatorName?: string;
    contentType?: any;
    devDscription?: string;
    tags?: string[];
    header?: string;
    startingLocation?: metadata_location;
    previewSprite?: string;
}