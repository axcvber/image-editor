import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const SocialLogin = () => {
  const onProviderSignIn = (provider: 'github' | 'google') => {
    signIn(provider, { callbackUrl: '/' })
  }

  return (
    <div className='flex flex-col gap-y-2.5'>
      <Button
        onClick={() => onProviderSignIn('google')}
        variant='outline'
        size='lg'
        className='w-full relative gap-x-2.5'
      >
        <Image width={18} height={18} src={'/google.png'} alt='google' />
        Continue with Google
      </Button>
      <Button
        onClick={() => onProviderSignIn('github')}
        variant='outline'
        size='lg'
        className='w-full relative gap-x-2.5'
      >
        <Image width={18} height={18} src={'/github.png'} alt='github' />
        Continue with Github
      </Button>
    </div>
  )
}

export default SocialLogin
