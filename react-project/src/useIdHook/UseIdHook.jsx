import { useId } from "react"

const UseIdHook = () => {
    const id = useId();
    return(
        <div>
            <label htmlFor={`${id}--email`}>E-mail</label>
            <input type="email" id={`${id}--email`} />
            <br />
            <label htmlFor={`${id}--password`}>Password</label>
            <input type="password" id={`${id}--password`} />
        </div>
    )
}

export default UseIdHook;