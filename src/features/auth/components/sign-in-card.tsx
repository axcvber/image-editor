'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { TriangleAlert } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardTitle, CardHeader, CardContent, CardDescription } from '@/components/ui/card'
import SocialLogin from './social-login'

export const SignInCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPending, setPending] = useState(false)

  const params = useSearchParams()
  const error = params.get('error')

  const onCredentialSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    await signIn('credentials', {
      email: email,
      password: password,
      callbackUrl: '/',
    })
    setPending(false)
  }

  return (
    <Card className='w-full h-full p-8'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>Use your email or another service to continue</CardDescription>
      </CardHeader>
      {!!error && (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
          <TriangleAlert className='size-4' />
          <p>Invalid email or password</p>
        </div>
      )}
      <CardContent className='space-y-5 px-0 pb-0'>
        <form onSubmit={onCredentialSignIn} className='space-y-2.5'>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' required />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            required
          />
          <Button disabled={isPending} type='submit' className='w-full' size='lg'>
            Continue
          </Button>
        </form>
        <Separator />
        <SocialLogin />
        <p className='text-xs text-muted-foreground'>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up'>
            <span className='text-sky-700 hover:underline'>Sign up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
