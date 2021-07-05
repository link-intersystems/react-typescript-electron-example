import { BoundedRangeControl, BoundedRangeModel } from "./BoundedRange";
import { useCtrl } from "./keyboard";

export const CounterBadge = ({ model, modelControl }: { model: BoundedRangeModel, modelControl: BoundedRangeControl }) => {
    const ctrl = useCtrl();
    const diff = ctrl ? 10 : 1;
    return (
        <span className="badge badge-primary w-100">
            Value {model.value} &nbsp; &nbsp;
            <button
                className="btn border text-white"
                onClick={() => modelControl.inc(diff)}
            >
                +
            </button>
            <button
                className="btn border text-white"
                onClick={() => modelControl.dec(diff)}
            >
                -
            </button>
        </span>
    );
};