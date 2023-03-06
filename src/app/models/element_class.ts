import { Reference } from "@angular/fire/compat/firestore";
import { Student } from './student';
import { Schedule } from "./schedule";
import { Teacher } from "./teacher";
import { metadata_location } from "./metadata/metadata_location";

export interface element_class {

    id?: string;
    title?: string;
    description?: string;
    lessonModules?: [];
    
    students:Reference<Student>[];
    teachers:Reference<Teacher>[];
    schedule: Reference<Schedule>;
    
    tags:string[];
    previewSprites?: [];
    header?: string;
    locationID?: metadata_location;
    dateCreated?: string;
    author?:string;
    uid?:string;
}

