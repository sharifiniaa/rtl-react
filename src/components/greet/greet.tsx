type Props = {
    name?: string
}

export const Greet = ({name}: Props) => {
    return (
        <h1>Hello {name}</h1>
    )
}
