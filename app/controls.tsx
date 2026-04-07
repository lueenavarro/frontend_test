import { useEffect, useState } from "react";
import Select from "react-select";

export type FieldValues = "name" | "company" | "email";
export type DirectionValues = "ascending" | "descending";

type ControlOption<T> = {
  label: string;
  value: T
}

export type ControlValue  = {
  field: FieldValues;
  direction: DirectionValues;
}

export type ControlsProps = {
  onChange: (newValue: ControlValue) => void;
};

const Controls = ({ onChange }: ControlsProps) => {
  const fieldOptions: ControlOption<FieldValues>[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: ControlOption<DirectionValues>[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];


  const [field, setField] = useState<ControlOption<FieldValues>>();
  const [direction, setDirection] = useState<ControlOption<DirectionValues>>();

  useEffect(() => {
    if (field && !direction) {
      setDirection(directionOptions[0]);
      return;
    }

    if (direction && !field) {
      setField(fieldOptions[0]);
      return;
    }

    if(field && direction) {
      onChange({ field: field.value, direction: direction.value });
    }
  }, [field, direction, onChange]);

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} value={field} onChange={(newValue) => {
          setField((field) => newValue || field);
        }}
        inputId="sort-field" className="input" />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          value={direction}
          onChange={(newValue) => {
            setDirection((direction) => newValue || direction);
          }}
          inputId="sort-direction"
          className="input"
        />
      </div>
    </div>
  );
};

export default Controls;
