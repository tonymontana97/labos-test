import {Patient} from "../../shared/models/patient.model";

export interface PatientsState {
    list: {
        count: number;
        items: Array<Patient>
    };
    isLoading: boolean;
}
