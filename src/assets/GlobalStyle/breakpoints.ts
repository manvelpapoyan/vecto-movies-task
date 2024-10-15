export const sizes = {
  w19: 1920,
  w14: 1440,
  w13: 1366,
  w12: 1280,
  w11: 1175,
  m9: 992,
  m8: 800,
  m7: 700,
  m6: 600,
  m5: 500,
};

export const breakpoints = Object.fromEntries(
  Object.entries(sizes).map(([key, value]) => [key, `max-width: ${value}px`])
) as BreakpointsType;

export type BreakpointsType = { [width in keyof typeof sizes]: string };
