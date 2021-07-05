import React from "react";
import { useRef } from "react";
import { MutableRefObject } from "react";
import { BoundedRangeControl, Validation } from "./BoundedRange";

const BoundedRangeFormItem = ({
    name,
    value,
    valueSetter,
    error = '',
    invalidDesc = "value not valid"
}: { name: string, value: number, valueSetter: (value: number) => any, error: string | null, invalidDesc: string }) => {
    function onInputValueChanged(event: any) {
        let value = event.target.value;
        valueSetter(value);
    }

    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-4 col-form-label">
                {name}
            </label>
            <div className="col-sm-6">
                <input
                    type="value"
                    className={`form-control ${error === null ? "" : "is-invalid"}`}
                    id={name}
                    value={value}
                    onChange={onInputValueChanged}
                />
                <div className="invalid-feedback">
                    {error === null ? "" : error}
                </div>
            </div>
        </div>
    );
};

export const BoundedRangeForm = (props: any) => {
    const { model } = props;
    const modelControlRef: MutableRefObject<BoundedRangeControl | undefined> = useRef();

    const [validation, setValidation] = React.useState(new Validation());
    const validationRef: MutableRefObject<Validation | undefined> = useRef();

    const [value, setValue] = React.useState(model.value);
    const [min, setMin] = React.useState(model.min);
    const [max, setMax] = React.useState(model.max);

    React.useEffect(() => {

        if (validationRef.current?.isValid()) {
            setValue(model.value);
            setMin(model.min);
            setMax(model.max);
        }
    }, [model]);

    React.useEffect(() => {
        try {
            modelControlRef.current?.setModel({
                value: value,
                min: min,
                max: max,
                percent: 0
            });
            setValidation(new Validation());
        } catch (e) {
            setValidation(e.validation);
        }
    }, [value, min, max]);

    return (
        <form className="rounded border p-4" id={props.id}>
            <BoundedRangeFormItem
                name="Min"
                value={min}
                valueSetter={setMin}
                error={validation?.min}
                invalidDesc=''
            />
            <BoundedRangeFormItem
                name="Max"
                value={max}
                valueSetter={setMax}
                error={validation?.max}
                invalidDesc=''
            />
            <BoundedRangeFormItem
                name="Value"
                value={value}
                valueSetter={setValue}
                error={validation?.value}
                invalidDesc=''
            />
        </form>
    );
};