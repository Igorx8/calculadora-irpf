interface IButtonProps {
    color: string;
    text: string;
    action: () => void;
}

let style = 'flex items-center justify-center text-white w-2/3 h-10 mx-auto mt-6 rounded'
export const Botao: React.FC<IButtonProps> = (props) => {
    style+= ' ' +props.color
    return (
        <button className={style} type="button" onClick={props.action}> Salvar </button>
    )
}