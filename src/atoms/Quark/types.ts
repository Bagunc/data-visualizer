export interface HasSizes {
  big?: boolean;
  tiny?: boolean;
  small?: boolean;
  large?: boolean;
  jumbo?: boolean;
  middle?: boolean;
}

export interface HasTransition {
  fast?: boolean;
  slow?: boolean;
  lazy?: boolean;
  swift?: boolean;
  moderate?: boolean;
}

export interface HasColor {
  info?: boolean;
  error?: boolean;
  primary?: boolean;
  warning?: boolean;
  success?: boolean;
  secondary?: boolean;
}

export interface HasTiming {
  ease?: boolean;
  linear?: boolean;
  easeIn?: boolean;
  easeOut?: boolean;
  stepEnd?: boolean;
  stepStart?: boolean;
  easeInOut?: boolean;
}

export interface HasDrawing {
  filled?: boolean;
  outlined?: boolean;
}

export interface QuarkProps
  extends HasColor,
    HasSizes,
    HasTiming,
    HasDrawing,
    HasTransition {}

export interface QuarkPrivateProps extends QuarkProps {
  tagName?: string;
}

export type QuarkClsx = {
  [key in keyof QuarkProps]: boolean;
};
