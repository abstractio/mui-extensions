import { SxProps, Theme } from '@mui/system';
import { Stylesheet } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StylesheetHandler = (...args: any[]) => SxProps<Theme>;

export type ThemeCSSProperties = {
  [key: string]: SxProps<Theme> | StylesheetHandler;
};

export type PartialRecord<K extends keyof never, T> = {
  [P in K]?: T;
};

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// I would rather not use this since it absolutely tanks vscode typescript's server perfomance
export type StylesheetDeepTree<
  T extends
    | typeof Stylesheet['create']
    | ReturnType<(...args: unknown[]) => typeof Stylesheet['create']>
> = DeepPartial<Record<keyof DeepPartial<ReturnType<T>>, SxProps<Theme>>>;

export type StylesheetShallowTree<T extends ThemeCSSProperties> = PartialRecord<
  keyof T,
  SxProps<Theme>
>;
