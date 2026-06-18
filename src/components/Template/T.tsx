export interface TemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    ariaLabel?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Template = () => {
    return (
        <>
        </>
    )
}

// export default Template -> this vs. using an index.ts file
// cannot do this if including an exported interface