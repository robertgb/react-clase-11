import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext()

const initialFormState = {
    username: '',
    password: ''
}

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"))
    const [form, setForm] = useState(initialFormState)
    const [user, setUser] = useState(isAuth ? localStorage.getItem("user") : '');
    const navigate = useNavigate()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (!form.username.trim() || !form.password.trim()) {
            alert("Se deben completar todos los campos")
            return
        }

        setUser(form.username)
        setForm(initialFormState)
        setIsAuth(true)

        localStorage.setItem('user', form.username)

        navigate(`/usuario/${form.username}`)
    }

    const handleLogout = e => {
        localStorage.removeItem("user")
        navigate("/login")
        setIsAuth(false)
        setUser("")
    }

    const contextInitialState = {
        isAuth,
        form,
        user,
        handleChange,
        handleLogout,
        handleSubmit
    }


    return <AuthContext.Provider value={contextInitialState}>
        {children}
    </AuthContext.Provider>
}

export { AuthProvider }

export default AuthContext;




















