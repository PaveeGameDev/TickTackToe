type Props = {
    user: string,
    id: number[]
    onclick: (id: number[]) => void
    disabled: boolean
}

export const Block = ({user, id, onclick, disabled}: Props) => {
    return (
        <td>
            <button disabled={disabled} style={{width: '100pt', height: '100pt'}}
                    onClick={() => onclick(id)}>{user}</button>
        </td>
    )
}