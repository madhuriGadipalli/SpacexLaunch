import React from 'react';
import { LaunchYearFilter } from './launchYear';
import { SuccessFulLandingFilter } from './successLaunchAndLanding';
export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: [
                '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
            ],
            successLand: ['true', 'false']
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="filtersContainer">
                    <div className="filtersTitle">{'Filters'}</div>
                    <LaunchYearFilter years={this.state.years} fireRequestOnYearSelection={this.props.fireRequestOnYearSelection} />
                    <SuccessFulLandingFilter title={'Successful Launch'} successLand={this.state.successLand} fireRequestOnSuccessfulLaunchAndLanding={this.props.fireRequestOnSuccessfulLaunchAndLanding} urlParam={'launch_success='} />
                    <SuccessFulLandingFilter title={'Successful Landing'} successLand={this.state.successLand} fireRequestOnSuccessfulLaunchAndLanding={this.props.fireRequestOnSuccessfulLaunchAndLanding} urlParam={'land_success='} />
                </div>
            </React.Fragment>
        )
    }
}