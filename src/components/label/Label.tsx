import React from "react";
import "./label.css"

interface LabelProps {
    label: string
}

const Label: React.FC<LabelProps> = ({label}: LabelProps) => {


  return (
    <div className="Label-container Flex-row Text-center">
      <p>{label}</p>
    </div>
  );
}

export default Label;