import type { ThemeCSSProperties } from './stylesheet.types';

export class Stylesheet {
  public static create<Styles extends ThemeCSSProperties>(
    styles: Styles
  ): Styles {
    return styles;
  }
}

export default Stylesheet;
