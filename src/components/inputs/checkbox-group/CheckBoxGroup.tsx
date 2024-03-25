import React, { FC, useState, useEffect } from 'react';

import './CheckBoxGroup.css';
import CheckBox from '../checkbox/CheckBox';


interface CheckboxOption {
  label: string;
  checked: boolean;
}

interface CheckBoxGroupProps {
    options: CheckboxOption[];
    hasSelectAll?: boolean;
    onChange: (options: CheckboxOption[]) => void;
}

const CheckBoxGroup: FC<CheckBoxGroupProps> = (
    { options, hasSelectAll, onChange }
) => {

    const allChecked = options.every(option => option.checked);
    const noneChecked = options.every(option => !option.checked);

    const [selectAll, setSelectAll] = useState(allChecked);
    const [selectSome, setSelectSome] = useState(!allChecked && !noneChecked);

    useEffect(() => {
        setSelectAll(allChecked);
        setSelectSome(!allChecked && !noneChecked);
    }, [options, allChecked, noneChecked]);

    const handleCheckboxChange = (index: number, checked: boolean) => {
        const newOptions = [...options];
        newOptions[index].checked = checked;
        onChange(newOptions);
    };

    const handleSelectAll = () => {
        const newOptions = options.map(option => ({ ...option, checked: !selectAll }));
        onChange(newOptions);
    };

    return (
        <div className="checkbox-group">
            {hasSelectAll ?
                <CheckBox label={'Select All'} someChecked={selectSome} checked={selectAll} onChange={handleSelectAll}/>
                : <></>
            }   
            {options.map((option, index) => (
                <CheckBox
                key={index}
                label={option.label}
                checked={option.checked}
                onChange={(checked) => handleCheckboxChange(index, checked)}
                />
            ))}
        </div>
    );
}

export default CheckBoxGroup;