import { StateFetchData } from "../../store/types";

export interface Vacancy {
    id: string;
    name: string;
}

export interface VacanciesList {
    items: Vacancy[];
}

export interface Industry {
    id: string;
    name: string;
    industries: Industry[];
}

export type VacanciesState = StateFetchData<VacanciesList>;