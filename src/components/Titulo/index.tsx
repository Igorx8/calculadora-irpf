interface ITitleProps {
    title: string;
}

export const Titulo: React.FC<ITitleProps> = (props) => {
    return (
        <div className="flex justify-center items-center h-12 md:h-24">
            <h1 className="text-md font-bold text-gray-600 md:text-2xl">{ props.title}</h1>
        </div>
    );
};
