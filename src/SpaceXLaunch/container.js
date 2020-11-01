import { connect } from 'react-redux';
import { ResultSet } from './Results/index';
import { fireRequestOnLoad, fireRequestOnYearSelection, fireRequestOnSuccessfulLaunchAndLanding } from './actions';

export const mapStateToProps = (state) => {
    return {
        displayData: state.initialReducer ? state.initialReducer.displayList : ''
    }
}

export const mapDispatchtoAction = {
    fireRequestOnLoad: fireRequestOnLoad,
    fireRequestOnYearSelection: fireRequestOnYearSelection,
    fireRequestOnSuccessfulLaunchAndLanding: fireRequestOnSuccessfulLaunchAndLanding
}

export const ConnectJsx = connect(mapStateToProps, mapDispatchtoAction)(ResultSet)