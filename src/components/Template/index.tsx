import { Container, IContainerProps } from '../Container'

export const DefaultTemplate: React.FC<IContainerProps> = (props) => {
    return (
        <div className="h-[calc(100vh_-_6rem)] w-full bg-gray-200 flex justify-center">
            <Container children={props.children} />
        </div>
    );
}