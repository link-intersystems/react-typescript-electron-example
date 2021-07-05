import { BoundedRangeModel } from "./BoundedRange";

export const ProgressBar = ({ model, id }: { model: BoundedRangeModel, id?: string | undefined }) => {
    const percent = model.percent;

    const progressBarStyle = {
        width: percent + "%"
    };

    return (
        <div className="progress" id={id} >
            <div
                className="progress-bar"
                style={progressBarStyle}
                role="progressbar"
                aria-valuenow={percent}
            ></div>
        </div>
    );
};