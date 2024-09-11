import { useRef, useState } from "react"






const CustomUncontrol = () => {

    const refUser = useRef("")
    const refPass = useRef("")

    const [error,setError]=useState("")
    const submit = (e) => {

        e.preventDefault()

        const enterUserName = refUser.current.value
        const enteredPassword = refPass.current.value

        const formError = validate(enterUserName,enteredPassword)
        if(Object.keys(formError).length>20){
            setError(formError)
        }else{
            //Hit api
        }

    }

    const validate = (username,password) =>{
        let error = ""
        if(!username){
            error ="Enter the valid user name"
        }else if(username.length > 20){
            error="please enter the less than 20 characters"
        }
        if(!password){
            error="please enter correct password"
        }else if(password.length > 20){
            error="please enter below 20"
        }
        return error
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="username" placeholder="Enter user name" ref={refUser} />
                <input type="password" placeholder="Enter password" ref={refPass} />
                <button>submit</button>
                <span>{error}</span>
            </form>
        </div>
    )
}
export default CustomUncontrol