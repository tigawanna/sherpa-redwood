import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from 'src/auth'
import { LuLoader } from 'react-icons/lu'
import { Link } from '@redwoodjs/router'
import { SocialLogin } from './SocialLogin'
import { toast } from '@redwoodjs/web/dist/toast'

interface SigninFormProps {}

export function SigninForm({}: SigninFormProps) {
  const { logIn, loading, error } = useAuth()
  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }
  type TFormValues = typeof defaultValues
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues })

  function submitForm(data: TFormValues) {
    logIn({
      authMethod: 'password',
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        console.log("login response",res)
        if(res.error){
          throw res.error
        }
        toast.success('Logged in successfully')
      })
      .catch((error) => toast.error(error.message))
  }

  return (
    <div className="w-full hero min-h-screen ">
      <div className="hero-content w-full md:w-fit flex-col lg:flex-row-reverse items-center justify-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="h-full w-full md:min-w-[300px] max-w-xs flex flex-col gap-5 items-center justify-center "
        >
          {/* email field */}
          <div className="w-full flex flex-col items- gap-1">
            <label htmlFor="email" className="text-sm">
              email
            </label>
            <input
              id="email"
              {...register('email', {})}
              aria-invalid={errors.email ? 'true' : 'false'}
              type="email"
              name="email"
              placeholder="email"
              className="input input-sm border border-accent"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            {/* password field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                password
              </label>
              <input
                id="password"
                {...register('password', {})}
                aria-invalid={errors.password ? 'true' : 'false'}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className="input input-sm border border-accent"
              />
            </div>
            {/* show password */}
            <div className="flex  gap-2 items-center  text-xs">
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => {
                  setShowPassword(!showPassword)
                }}
                className="checkbox checkbox-accent checkbox-sm"
              />
              <label htmlFor="show-password">show password</label>
            </div>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-lg elevation-3
            flex items-center justify-center
              bg-secondary/50 text-sm font-bold hover:bg-secondary-focus/50"
          >
            {loading ? (
              <LuLoader className="w-9 h-9 animate-spin" />
            ) : (
              'Sign In'
            )}
          </button>

          <div className="divider text-sm text-info hover:text-info-content h-fit p-0 m-0">
            <Link to="/signup"> New here? , Create an account </Link>
          </div>
          {/* socila login */}
          <SocialLogin />
        </form>
      </div>
    </div>
  )
}
