import React from "react";
import { BoundedRangeModel } from "./BoundedRange";

export const BackgroundProgress = ({
    model,
    valueColor = "#007bff",
    bgColor = "#e9ecef",
    children,
    id
}: { model: BoundedRangeModel, valueColor?: string, bgColor?: string, children?: any, id?: string | undefined }) => {
    const percent = model.percent;

    const style = {
        background:
            "linear-gradient(180deg, " +
            valueColor +
            " " +
            percent +
            "%, " +
            bgColor +
            " " +
            percent +
            "%"
    };

    return React.cloneElement(children, { style: style, id });
};