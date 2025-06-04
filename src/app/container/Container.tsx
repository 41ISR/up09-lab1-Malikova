import { PropsWithChildren } from "react"
interface IContainer extends PropsWithChildren{}

const Container = ({children}: IContainer) => {
    return <div className="container">{children}</div>
}
export default Container