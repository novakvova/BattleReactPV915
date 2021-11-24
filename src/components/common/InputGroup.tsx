import Input, { IBaseInputProps } from "./Input";

export interface IBaseInputGroupProps extends IBaseInputProps {
    label: string;
}

const InputGroup = ({ value, field, onChange, label, type="text" }: IBaseInputGroupProps) => {
    return (
        <div className="mb-3">
          <label htmlFor={field} className="form-label">{label}</label>
          <Input value={value} onChange={onChange} 
            field={field} type={type}/>
        </div>
    )
}

export default InputGroup;