import { createFetchAction, createFetchReducer } from "../../../store/utills";
import { BaseAction, IState } from "../../../store/types";
import { VacanciesList } from "../models";
import { HH_HOST } from "../constants";

const VACANCIES = 'VACANCIES';

export const fetchVacancies = createFetchAction(VACANCIES, {
    method: 'get',
    url: `${HH_HOST}/vacancies`,
});

export const vacancies = createFetchReducer<VacanciesList, BaseAction>(VACANCIES);

export const selectVacancies = (state: IState) => state.vacancies.data;
export const selectVacanciesLoading = (state: IState) => state.vacancies.loading;
export const selectVacanciesError = (state: IState) => state.vacancies.error;