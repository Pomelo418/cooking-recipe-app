import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  //useAuth hook check if the user is signed in
  // or not
  const { isSignedIn } = useAuth()

  // if user is signed in, take them to the
  // home page
  if (isSignedIn) {
    return <Redirect href={'/'} />
  }
  // else, they will see sign-in, sign-up, or verify email page
  return <Stack screenOptions={{headerShown: false}} />
}