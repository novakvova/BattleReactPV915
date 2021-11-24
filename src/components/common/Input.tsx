export interface IBaseInputProps {
    value: string;
    field: string,
    type?: "text" | "number",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, field, onChange, type="text" }: IBaseInputProps) => {
    return (
        <input 
            onChange={onChange} 
            className="form-control"
            value={value}
            name={field}
            id={field}
            type={type} />
    )
}

export default Input;