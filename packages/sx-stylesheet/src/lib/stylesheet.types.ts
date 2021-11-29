import { SxProps, Theme } from '@mui/system';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StylesheetHandler = (...args: any[]) => SxProps<Theme>;

export type ThemeCSSProperties = {
  [key: string]: SxProps<Theme> | StylesheetHandler;
};

export type PartialRecord<K extends keyof never, T> = {
  [P in K]?: T;
};
