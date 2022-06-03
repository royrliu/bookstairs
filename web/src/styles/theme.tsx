import React from 'react';

import { MantineProvider } from '@mantine/core';
import { MantineProviderProps } from '@mantine/styles/lib/theme/MantineProvider';

export const BookStairsTheme = (props: MantineProviderProps) => <MantineProvider>{props.children}</MantineProvider>;
