import { Dispatch, SetStateAction } from "react";

interface IInputProps {
    label: string;
    placeholder: string;
    type: string;
    setValue: Dispatch<SetStateAction<string>>;
    value: string;
    labelFor: string;
}

export const Input: React.FC<IInputProps> = (props) => {
    return (
        <span className="flex flex-wrap flex-col my-2">
            <label className="ml-6 my-2 font-bold" htmlFor={props.labelFor}> {props.label} </label>
            <input className="mx-4 p-1 border rounded" id={props.labelFor} type={props.type} placeholder={props.placeholder} onChange={e => props.setValue(e.target.value)} value={props.value}/>
        </span>
    )
}