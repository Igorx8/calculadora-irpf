export interface IContainerProps {
    children: React.ReactNode[] | React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props) => {
    return (
        <div className="w-full h-fit mx-12 mt-6 pb-12 bg-white rounded md:mx-56">
            {props.children}
        </div>
    );
}