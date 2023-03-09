import { Reference } from "@angular/fire/compat/firestore";
import { Student } from './student';
import { Schedule } from "./schedule";
import { Teacher } from "./teacher";
import { metadata_location } from "./metadata/metadata_location";
import { metadata_sprite } from "./metadata/metadata_sprite";
import { element_lessonModule } from "./element_lessonModule";

export interface element_class {

    id: string | null;
    title: string | null;
    description: string | null;
    lessonModules: element_lessonModule[]|null;
    
    students: Reference<Student>[] | null;
    teachers: Reference<Teacher>[] | null;
    schedule: Reference<Schedule> | null;
    
    tags:string;
    previewSprites: Reference<metadata_sprite>[] | null;
    header: string | null;
    locationID: metadata_location | null;
    dateCreated: string | null;
    dateUpdated: string | null;
    author: string | null;
    uid: string | null;
}

