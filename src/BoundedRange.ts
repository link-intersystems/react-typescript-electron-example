import React from "react";

class ValidationException {
    validation: any;
    name: string;
    constructor(validation: any) {

        this.validation = validation;
        this.name = "ValidationException";
    }
}

export class Validation {
    min: string | null = null;
    max: string | null = null;
    value: string | null = null;

    isValid() {
        return this.value === null &&
            this.max === null &&
            this.min === null
    };
}

export interface BoundedRangeModel {
    min: number;
    max: number;
    value: number;
    percent: number;
}

export interface BoundedRangeControl {
    setModel(model: BoundedRangeModel): void;
    inc(diff: number): void;
    dec(diff: number): void;
}

export const useBoundedRange = (
    initialValue = 0,
    initialMin = 0,
    initialMax = 100
): any => {
    const [stateModel, setStateModel] = React.useState({
        min: initialMin,
        max: initialMax,
        value: initialValue
    });

    function inc(diff: number) {
        setModel({
            ...stateModel,
            value: stateModel.value + diff
        });
    }

    function dec(diff: number) {
        setModel({
            ...stateModel,
            value: stateModel.value - diff
        });
    }

    function toInt(inputVal: string | number) {
        let val = inputVal;

        if (typeof val !== "number") {
            val = parseInt(val);
        }

        if (typeof val !== "number" || isNaN(val)) {
            throw new ValidationException('not a number');
        }

        return val;
    }

    function convertModel(newModel: any, newValidation: any) {
        let convertedModel = { ...newModel };

        try {
            convertedModel.min = toInt(newModel.min);
        } catch (e) {
            newValidation.min = e.validation;
        }
        try {
            convertedModel.max = toInt(newModel.max);
        } catch (e) {
            newValidation.max = e.validation;
        }
        try {
            convertedModel.value = toInt(newModel.value);
        } catch (e) {
            newValidation.value = e.validation;
        }

        return convertedModel;
    }

    function setModel(newModel: any) {
        let newValidation = new Validation();

        newModel = convertModel(newModel, newValidation);

        if (newModel.value < newModel.min || newModel.max < newModel.value) {
            newValidation.value = "value must >= min and <= max";
        }

        if (newModel.min < 0) {
            newValidation.min = "min must be >= 0";
        }

        if (newModel.min > newModel.value) {
            newValidation.min = "min must be <= value";
        }

        if (newModel.max < newModel.value) {
            newValidation.max = "max must be >= value";
        }

        if (newValidation.isValid()) {
            setStateModel(newModel);
        } else {
            throw new ValidationException(newValidation);
        }
    }

    const deltaX = stateModel.max - stateModel.min;
    const m = 100 / deltaX;
    const percent = (m * (stateModel.value - stateModel.min)).toFixed(0);

    return {
        model: {
            ...stateModel,
            percent: percent
        },
        modelControl: {
            inc: inc,
            dec: dec,
            setModel: setModel
        }
    };
};