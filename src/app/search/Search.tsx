import { PropsWithChildren } from "react"
import { useState } from "react"
interface ISearch extends PropsWithChildren{}

const Search = ({children}: ISearch) => {
    return <div className="container">{children}</div>
}
export default Search