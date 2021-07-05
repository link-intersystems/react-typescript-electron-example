import { BoundedRangeModel } from "./BoundedRange";

export const ProgressCircle = ({ model, id }: { model: BoundedRangeModel, id?: string | undefined }) => {
    const percent = model.percent;

    return (
        <div
            className={`progress-circle p${percent} ${percent > 50 ? "over50" : ""}`} id={id}
        >
            <span>{percent}%</span>
            <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
            </div>
        </div>
    );
};