import React, { useState } from 'react';

import './App.css';
import TextInput from './components/inputs/text-input/TextInput';
import ColorInput from './components/inputs/color-input/ColorInput';
import NumberInput from './components/inputs/number-input/NumberInput';
import DropDownSelect, { DropDownSelectValue } from './components/inputs/dropdown-select/DropDownSelect';
import RadioButtonGroup from './components/inputs/radio-button-group/RadioButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import IconButton from './components/inputs/icon-button/IconButton';
import GeneralButton from './components/inputs/general-button/GeneralButton';
import CheckBox from './components/inputs/checkbox/CheckBox';
import CheckBoxGroup from './components/inputs/checkbox-group/CheckBoxGroup';
import ModalOverlay from './components/containers/modal-overlay/ModalOverlay';
import BackgroundOptions, { BackgroundValues } from './components/control-options/background-options/BackgroundOptions';

const App = () => {
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked!');
        console.log('Event:', event);
        alert('Button clicked!');
    };

    const [text, setText] = useState("");
    const [color, setColor] = useState("#000000");
    const [number, setNumber] = useState(0);
    const [optionSelected, setOptionSelected] = useState("default");
    const [selectedRadioOption, setSelectedRadioOption] = useState('option1');

    const selectOptions: DropDownSelectValue[] = [
        {value: "Test", text:"text"}, 
        {value: "default", text:"default"}
    ];
    const radioOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const [singleCheckboxChecked, setSingleCheckboxChecked] = useState(false);
    const [checkboxGroupOptions, setCheckboxGroupOptions] = useState([
        { label: 'Option 1', checked: false },
        { label: 'Option 2', checked: false },
        { label: 'Option 3', checked: false },
    ]);

    const [showModal, setModalShow] = useState(false);

    const handleSingleCheckboxChange = (checked: boolean) => {
        setSingleCheckboxChecked(checked);
    };

    const handleCheckboxGroupChange = (updatedOptions: any) => {
        setCheckboxGroupOptions(updatedOptions);
        console.log(updatedOptions);
    };

    const handleModalShow = () => {
        setModalShow(!showModal);
    }

    const handleModalDone = () => {
        alert('Modal alert done');
    }

  const initialBackgoundValues: BackgroundValues = {
    backgroundColor: "#000000",
    borderRadius: 0,
    borderSelected: false,
    border: {
        borderSize: 0,
        borderType: "none",
        borderColor: "#000000",
    },
    shadowSelected: false,
    shadow: {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 0,
        spreadRadius: 0,
        shadowColor: "#000000",
        shadowInset: false,
    }
  }

  const handleBackgroundOptionChange: (values: BackgroundValues) => void = (values) => {
    console.log('Background', values);
    alert(values);
  }

  return (
    <div className="App">
      <div className='test-div'>
        <NumberInput label={'Test Number'} type={'number'} value={number} name={'Test'} min={0} max={10}  onChange={setNumber} />
        <TextInput label={'Test'} type="text" value={text} name={"Test"} onChange={setText} />
        <ColorInput label={'Border Color Select'} value={color} onChange={setColor}/>
        <DropDownSelect value={optionSelected} label={"Test Select"} options={selectOptions} onChange={setOptionSelected} />
        <RadioButtonGroup label='Test Radio' options={radioOptions} selectedValue={selectedRadioOption} onChange={setSelectedRadioOption} />
        <GeneralButton label={'Test'} icon={<FontAwesomeIcon icon={faCoffee} />} onClick={handleButtonClick} />
        <IconButton icon={<FontAwesomeIcon icon={faCoffee} />} onClick={handleButtonClick} />
        <CheckBox label={'Test'} checked={singleCheckboxChecked} onChange={handleSingleCheckboxChange} />
        <CheckBoxGroup options={checkboxGroupOptions} hasSelectAll onChange={handleCheckboxGroupChange} />
        <GeneralButton label={'Test Modal'} onClick={handleModalShow} />
        <ModalOverlay title={'Test Modal'} show={showModal} children={undefined} handleDone={handleModalDone} handleClose={handleModalShow} />
        <BackgroundOptions values={initialBackgoundValues} onChange={handleBackgroundOptionChange} />
      </div>
    </div>
  );
}

export default App;
