import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
    <SignIn />
  </div>
)

export default SignInPage
