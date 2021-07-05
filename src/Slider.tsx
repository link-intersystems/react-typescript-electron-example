import { BoundedRangeControl, BoundedRangeModel } from "./BoundedRange";

export const Slider = ({ model, modelControl }: { model: BoundedRangeModel, modelControl: BoundedRangeControl }) => {
    const onValueChanged = (event: any) => {
        let value = event.target.value;
        modelControl.setModel({
            ...model,
            value: value
        });
    };

    return (
        <input
            type="range"
            className="form-range"
            id="customRange1"
            onChange={onValueChanged}
            min={model.min}
            max={model.max}
            value={model.value}
        />
    );
};