import "../Input/Input.css"

interface IInputProps{
    setValue: React.Dispatch<React.SetStateAction<string>>
    value: string
}

const Input = ({value, setValue}: IInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <input type="text" onChange={handleChange} value={value} className="input" placeholder="The name of the movie"/>
    )
}
export default Input