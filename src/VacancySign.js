import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VacancySign extends Component {
    render() {
        const { hasvacancy } = this.props;
        return (
            <div className="container">
                <p>{(hasvacancy === false)?'No Vacancy':'Vacancy'}</p>
            </div>
        );
    }
}

VacancySign.propTypes = {
    hasvacancy : PropTypes.bool
};
VacancySign.defaultProps = {
    hasvacancy : false
};

export default VacancySign;
