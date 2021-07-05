import { BoundedRangeControl, BoundedRangeModel } from "./BoundedRange";

export const Slider = ({ model, modelControl, id }: { model: BoundedRangeModel, modelControl: BoundedRangeControl, id?: string | undefined }) => {
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
            id={id}
            onChange={onValueChanged}
            min={model.min}
            max={model.max}
            value={model.value}
        />
    );
};