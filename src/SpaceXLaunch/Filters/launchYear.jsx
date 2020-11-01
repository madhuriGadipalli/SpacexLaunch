import style from './style.css';
export const LaunchYearFilter = ({ years, fireRequestOnYearSelection }) => {
    return (
        <div>
            <div className="launchYear">{'Launch Year'}</div>
            <div className="years">
                {years.map(year => (
                    <div key={year} className="year" onClick={() => fireRequestOnYearSelection(year)}>{year}</div>
                ))}
            </div>
        </div>
    )
}