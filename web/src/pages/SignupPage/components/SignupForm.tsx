import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAuth } from 'src/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { LuLoader } from 'react-icons/lu'
import { toast } from '@redwoodjs/web/dist/toast'
import { SocialLogin } from 'src/pages/LoginPage/components/SocialLogin'

interface SignupFormProps {}

export function SignupForm({}: SignupFormProps) {
  const { signUp, loading, error } = useAuth()
  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
    avatar_url: '',
    name: '',
  }
  type TFormValues = typeof defaultValues
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues })
  const [showPassword, setShowPassword] = useState(false)

  function submitForm({ avatar_url, email, name, password }: TFormValues) {
    signUp({
      email,
      password,
      options: {
        data: {
          name,
          avatar_url,
        },
      },
    })
      .then((res) => {
      if (res.error) {
            throw res.error
        }
        toast.success('Signed up successfully')
        navigate(routes.login())
      })

      .catch((error) => toast.error(error.message))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="h-full w-full md:min-w-[300px] max-w-xs flex flex-col gap-3 items-center justify-center "
        >
          {/* email */}
          <div className="w-full flex flex-col items- gap-1">
            <label htmlFor="email" className="text-sm">
              email
            </label>
            <input
              {...register('email', {})}
              id="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              type="email"
              name="email"
              placeholder="email"
              className="input input-sm border border-accent"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            {/* password */}
            <div className="w-full flex flex-col items- gap-1">
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

            <div className="w-full flex flex-col gap-2">
              {/* confirm password */}
              <div className="w-full flex flex-col items- gap-1">
                <label htmlFor="confirm-password" className="text-sm">
                  confirm password
                </label>
                <input
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    validate: (value) => value === watch('password'),
                    required: true,
                  })}
                  aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="confirm password"
                  className="input input-sm border border-accent"
                />
                {errors.confirmPassword && (
                  <p className="text-error text-xs">
                    {'Passwords do not match'}
                  </p>
                )}
              </div>
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
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-lg elevation-3
            flex items-center justify-center
              bg-secondary/50 text-sm font-bold hover:bg-secondary-focus/50"
          >
            {loading ? (
              <LuLoader className="w-9 h-9 animate-spin" />
            ) : (
              'Sign Up'
            )}
          </button>

          <div className="divider text-sm text-info hover:text-info-content h-fit p-0 m-0 ">
            <Link to="/login">Already have an account? </Link>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  )
}
