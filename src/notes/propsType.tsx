// ex. 1: inline syntax -> can fast become a mess
const Example = ({ title }: { title: string }) => {
    return (
        <button>{title}</button>
    )
}

// ex. 2: named interface
interface ExampleProps {
    title: string;
    disabled: boolean;
}

const Example2 = ({ title, disabled }: ExampleProps) => {
    return (
        <button disabled={disabled}>{title}</button>
    )
}

// ex. 3: destructing
const Example3: React.FC<ExampleProps> = (props) => {
    const {
        title,
        disabled,
        ...htmlAttributes
    } = props;

    return(
        <>component</>
    )
}