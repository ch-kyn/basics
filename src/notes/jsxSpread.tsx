// JSX spread attribute syntax
// spread all key-value pairs from an obj as individual props/attributes onto the eelemeent

const htmlAttributes = {
    id: "uniqueId",
    role: "admin"
};

const Example = () => {
    return (
        <div {...htmlAttributes}>
        </div>
    )
}