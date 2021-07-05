import { BoundedRangeControl, BoundedRangeModel } from "./BoundedRange";
import { useCtrl } from "./keyboard";

export const CounterBadge = ({ model, modelControl, id }: { model: BoundedRangeModel, modelControl: BoundedRangeControl, id?: string | undefined }) => {
    const ctrl = useCtrl();
    const diff = ctrl ? 10 : 1;
    return (
        <span className="badge badge-primary w-100" id={id}>
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