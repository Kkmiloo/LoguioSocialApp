/* global require */
import React, { useEffect } from 'react';

import { Slot, Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-in" />
    </Stack>
  );
};

export default Layout;
