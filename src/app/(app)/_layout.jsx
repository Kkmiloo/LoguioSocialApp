import { Redirect, Stack } from 'expo-router';

import { useSession } from '../../context/AuthContext';
import { Text } from 'react-native';

export default function AppLayout() {
  const { session, sessionLoading } = useSession();

  const sessionInfo = JSON.parse(session) || {};

  const { profileCompleted } = sessionInfo || undefined;

  console.log('sessionInfo Layout', sessionInfo);
  console.log('session LAYOUT', session);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (sessionLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.

    return <Redirect href="/sign-in" />;
  }

  if (!profileCompleted) {
    return <Redirect href="/role-sign-up" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}
