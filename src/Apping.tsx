import React, { FC, useState } from 'react';

import './Apping.css';
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
import BackgroundOptions, { BackgroundOptionValues } from './components/control-options/background-options/BackgroundOptions';
import AlignmentOptions from './components/control-options/alignment-options/AlignmentOptions';
import BorderOptions, { BorderOptionValues } from './components/control-options/border-options/BorderOptions';
import HeaderOptions, { HeaderOptionValues } from './components/control-options/header-options/HeaderOptions';
import ImageOptions, { ImageOptionValues } from './components/control-options/image-options/ImageOptions';
import LinkButtonOptions, { LinkButtonOptionValues } from './components/control-options/link-button-options/LinkButtonOptions';
import ShadowOptions, { ShadowOptionValues } from './components/control-options/shadow-options/ShadowOptions';
import HeightOptions, { HeightOptionValues } from './components/control-options/sizing-options/height-options/HeightOptions';
import WidthOptions, { WidthOptionValues } from './components/control-options/sizing-options/width-options/WidthOptions';
import PaddingOptions, { PaddingOptionValues } from './components/control-options/spacing-options/padding-options/PaddingOptions';
import MarginOptions, { MarginOptionValues } from './components/control-options/spacing-options/margin-options/MarginOptions';
import TextDecorationOptions, { TextDecorationOptionValues } from './components/control-options/text-decoration-options/TextDecorationOptions';
import TextOptions, { TextOptionValues } from './components/control-options/text-options/TextOptions';

const Apping: FC = () => {
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

    const handleAlignmentOptionChange: (values: string) => void = (values) => {
      console.log('Alignment', values);
      alert(values);
    }

    const handleBackgroundOptionChange: (values: BackgroundOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleBorderOptionChange: (values: BorderOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleHeaderOptionChange: (values: HeaderOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleImageOptionChange: (values: ImageOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleLinkButtonOptionChange: (values: LinkButtonOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleShadowOptionChange: (values: ShadowOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleHeightOptionChange: (values: HeightOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleWidthOptionChange: (values: WidthOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handlePaddingOptionChange: (values: PaddingOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleMarginOptionChange: (values: MarginOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleTextDecorationOptionChange: (values: TextDecorationOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }

    const handleTextOptionChange: (values: TextOptionValues) => void = (values) => {
      console.log('Background', values);
      alert(values);
    }
  
    const initalImageValues:ImageOptionValues = {
        imageLink: "",
        altText: "",
    }

    const initalLinkButtonValues:LinkButtonOptionValues = {
        hrefLink: "",
    }

    const initalHeightValues:HeightOptionValues = {
        height: 50,
        perecntHeight: false,
    }

    const initalWidthValues:WidthOptionValues = {
        width: 120,
        percentWidth: false,
    }

    return (
        <div className="App-div">
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
                <AlignmentOptions onChange={handleAlignmentOptionChange} />
                <BackgroundOptions onChange={handleBackgroundOptionChange} />
                <BorderOptions onChange={handleBorderOptionChange} />
                <HeaderOptions onChange={handleHeaderOptionChange} />
                <ImageOptions values={initalImageValues} onChange={handleImageOptionChange} />
                <LinkButtonOptions values={initalLinkButtonValues} onChange={handleLinkButtonOptionChange} />
                <ShadowOptions onChange={handleShadowOptionChange} />
                <HeightOptions values={initalHeightValues} onChange={handleHeightOptionChange} />
                <WidthOptions values={initalWidthValues} onChange={handleWidthOptionChange} />
                <PaddingOptions onChange={handlePaddingOptionChange} />
                <MarginOptions onChange={handleMarginOptionChange} />
                <TextDecorationOptions onChange={handleTextDecorationOptionChange} />
                <TextOptions onChange={handleTextOptionChange} />
            </div>
            <div className='test-div'>
                <p>G</p>
            </div>
        </div>
    );
}

export default Apping;