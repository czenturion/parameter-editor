import React, { useState } from "react";
import s from "./param-editor.module.css";

const ParamEditor = ({ params, model }) => {
    const [paramValues, setParamValues] = useState(model.paramValues);

    const handleChange = (e, paramId) => {
        const updatedValues = paramValues.map(paramValue => {
            if (paramValue.paramId === paramId) {
                return {
                    ...paramValue,
                    value: e.target.value
                };
            }
            return paramValue;
        });
        setParamValues(updatedValues);
    };

    const getModel = () => {
        return {
            ...model,
            paramValues: paramValues
        };
    };

    return (
        <div className={s.paramEditor}>
            {params.map(param => (
                <div key={param.id} className={s.inputLabel}>
                    <label>{param.name}</label>
                    <input
                        className={s.input}
                        type="text"
                        value={paramValues.find(pv => pv.paramId === param.id).value}
                        onChange={(e) => handleChange(e, param.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ParamEditor;
