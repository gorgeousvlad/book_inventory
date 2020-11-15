import * as React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Industry, VacanciesList } from '../../models';
import { getClassName } from '../../../../utils/styles';
import { selectVacancies, selectVacanciesError, selectVacanciesLoading, fetchVacancies } from '../../store/vacancies';

import './VacanciesList.scss';

export interface VacanciesListStoreProps {
    vacancies?: VacanciesList;
    vacanciesLoading: boolean;
    vacanciesError?: string;
}

export interface VacanciesListDispatchProps {
    fetchVacancies: () => void;
    fetchIndustries: ()=> void;
}

export type VacanciesListProps = VacanciesListStoreProps & VacanciesListDispatchProps;

const b = getClassName.bind(null, 'VacanciesList');

const VacanciesList: React.FC<VacanciesListProps> = ({vacancies, vacanciesLoading, fetchVacancies}) => {
    React.useEffect(() => {
        fetchVacancies();
    }, []);

    return (
        <section className={b()}>
            <h2>Поиск вакансий</h2>
            <h3>Найдены вакансии</h3>
            <div className={b('wrapper')}>
                {vacanciesLoading || !vacancies
                    ? 'Loading...'
                    : vacancies.items && vacancies.items.map((vacancy) => <div key={vacancy.id}>{vacancy.name}</div>)
                }
            </div>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    vacancies: selectVacancies,
    vacanciesError: selectVacanciesError,
    vacanciesLoading: selectVacanciesLoading,
});

const mapDispatchToProps = {
    fetchVacancies,
}

export default connect(mapStateToProps, mapDispatchToProps)(VacanciesList);