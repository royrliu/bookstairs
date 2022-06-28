import React from 'react';

import { MantineProvider, MantineProviderProps } from '@mantine/core';

export const BookStairsTheme = (props: MantineProviderProps) => <MantineProvider>{props.children}</MantineProvider>;
