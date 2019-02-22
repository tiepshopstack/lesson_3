import React from 'react';
import ReactDOM from 'react-dom';
import VacancySign from './VacancySign';
it('renders without crashing with hasvacancy equal true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign hasvacancy={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders with hasvacancy equal true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign hasvacancy={true} />, div);
    const result  = div.querySelector("p");
    expect(result.textContent).toBe("Vacancy");
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with hasvacancy equal false', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign hasvacancy={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders with hasvacancy equal false', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign hasvacancy={false} />, div);
    const result  = div.querySelector("p");
    expect(result.textContent).toBe("No Vacancy");
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing without hasvacancy', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without hasvacancy', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VacancySign />, div);
    const result  = div.querySelector("p");
    expect(result.textContent).toBe("No Vacancy");
    ReactDOM.unmountComponentAtNode(div);
});
