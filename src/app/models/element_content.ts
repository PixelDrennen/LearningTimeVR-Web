import { metadata_location } from "./metadata/metadata_location";
import { metadata_sprite } from "./metadata/metadata_sprite";

export interface element_content {
    title: string | null;
    description: string | null;

    // URLs
    getURL: string | null;
    setURL: string | null;
    cachedFilePath: string | null;

    // transform
    position: any | null;
    rotation: any | null;
    scale: any | null;

    stringParameters: string[] | null;
    floatParameters: number[] | null;
    availableImagesContent: metadata_sprite[] | null;

    // meta data
    id: string | null;
    dateCreated: string | null;
    dateUpdated: string | null;
    creatorName: string | null;
    contentType: number | null;
    devDescription: string | null;
    tags: string | null;
    header: string | null;
    startingLocation: metadata_location | null;
    previewSprite: metadata_sprite | null;
    
}