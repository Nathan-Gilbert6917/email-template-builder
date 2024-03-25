import React, { FC } from 'react';

import './GeneralButton.css';

interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    isCircular?: boolean;
    isInverted?: boolean;
    showShadow?: boolean;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const GeneralButton: FC<ButtonProps> = ({
        label,
        icon,
        isCircular=false,
        isInverted=false,
        showShadow=false,
        disabled=false,
        onClick
    }
) => {
  let buttonClass = isCircular ? "button circular" : "button";
  let buttonIconClass = icon ? "button-icon" : "";
  if (isInverted) {
    buttonClass += " invert";
  }

  if (showShadow) {
    buttonClass += " shadow";
  }

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {icon ? <span className={buttonIconClass}>{icon}</span>: <></>}
      <span className="button-label">{label}</span>
    </button>
  );
};

export default GeneralButton;