import authservices from '@/services/auth.services'
import { useAuthStore } from '@/sotre/authStore'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type LoginFormValue = {
    email: string,
    password: string,
}

export const useLogin = () => {
    const setToken = useAuthStore((state) => state.setToken)
    const authenticate = useAuthStore((state) => { state.authenticate })
    const navigate = useNavigate()

    const loginForm = useForm < LoginFormValue > ({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const { register, handleSubmit } = loginForm

    const onSubmit: SubmitHandler<LoginFormValue> = async (loginData) => {
        const { data } = await authservices.login(loginData)
        setToken(data.authToken)
        authenticate()
        navigate('/dashboard')
    }

    return {
        register,
        handleSubmit,
        onSubmit
    }
}