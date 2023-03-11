import React, { useEffect, useState } from 'react';



const isArray = (val: any) => Array.isArray(val);
const isNumber = (val: any) => Number(val) === val;


export const useValidation = (stateValue: any) => {
    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        const newErrors: any = {};
        Object.keys(stateValue).forEach((key) => {
            const value = stateValue[key];
            if (isArray(value) && !value.length) {
                newErrors[key] = 'Please select to procceed'
            };

            if (!value) {
                newErrors[key] = 'Please fill the neccessary information  to procceed'
            };

            if (typeof value === 'number' && !isNumber(value)) {
                newErrors[key] = 'Please fill the neccessary information  to procceed'
                return;
            };

            if (typeof stateValue[key] === 'object') {
                Object.keys(value).forEach((nestedKey: any) => {
                    const nestedVal = value[nestedKey];
                    if (isArray(nestedVal) && !nestedVal.length) {
                        newErrors[`${key}.${nestedKey}`] = `Please select something to proceed ${key}--${nestedKey}`;
                        return;
                    };

                    if (!nestedVal) {
                        newErrors[`${key}.${nestedKey}`] = `Please select something to proceed ${key}--${nestedKey}`;
                        return;
                    };
                    if (typeof nestedVal === 'number' && !isNumber(nestedVal)) {
                        newErrors[`${key}.${nestedKey}`] = `Please select something to proceed ${key}--${nestedKey}`;
                        return;
                    }

                })
            };
        });

        setErrors(newErrors);
        return newErrors;

    };

    return {
        errors,
        validate
    }
}


