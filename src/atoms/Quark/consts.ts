import {
  HasSizes,
  HasColor,
  HasTiming,
  HasDrawing,
  HasTransition,
} from "./types.ts";

export const sizeKeys: Array<keyof HasSizes> = [
  "big",
  "tiny",
  "jumbo",
  "small",
  "large",
  "middle",
];

export const timingKeys: Array<keyof HasTiming> = [
  "ease",
  "linear",
  "easeIn",
  "easeOut",
  "stepEnd",
  "stepStart",
  "easeInOut",
];

export const colorKeys: Array<keyof HasColor> = [
  "info",
  "error",
  "primary",
  "success",
  "warning",
  "success",
  "secondary",
];

export const transitionKeys: Array<keyof HasTransition> = [
  "lazy",
  "fast",
  "slow",
  "swift",
  "moderate",
];

export const drawingKeys: Array<keyof HasDrawing> = ["filled", "outlined"];

export const keys = [
  sizeKeys,
  timingKeys,
  colorKeys,
  drawingKeys,
  transitionKeys,
].flat();
