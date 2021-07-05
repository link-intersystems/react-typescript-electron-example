import { BoundedRangeModel } from "./BoundedRange";

export const ProgressBar = ({ model }: { model: BoundedRangeModel }) => {
    const percent = model.percent;

    const progressBarStyle = {
        width: percent + "%"
    };

    return (
        <div className="progress">
            <div
                className="progress-bar"
                style={progressBarStyle}
                role="progressbar"
                aria-valuenow={percent}
            ></div>
        </div>
    );
};