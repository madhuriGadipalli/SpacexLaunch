import style from './style.css';
export const SuccessFulLandingFilter = ({ title, successLand, fireRequestOnSuccessfulLaunchAndLanding, urlParam }) => {
    return (
        <div className="Successfilter">
            <div className="launchYear">{title}</div>
            <div className="years">
                {successLand.map(item => (
                    <div key={item} className="year" onClick={() => fireRequestOnSuccessfulLaunchAndLanding(item, urlParam)}>{item}</div>
                ))}
            </div>
        </div>
    )
}