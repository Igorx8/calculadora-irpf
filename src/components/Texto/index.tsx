interface IContentProps {
    content: string;
}

export const Texto: React.FC<IContentProps> = (props) => {
    return (
        <div className="flex my-4 md:justify-center mx-4 md:mx-12">
            <h1 className="text-xs text-justify font-medium text-gray-600 md:text-md">{ props.content}</h1>
        </div>
    );
};
