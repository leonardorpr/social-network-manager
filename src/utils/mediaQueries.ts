enum BreakPoints {
  /** 600px */
  small = 600,
  /** 1024px */
  medium = 1024,
  /** 1200px */
  wide = 1200,
  /** 1400px */
  huge = 1440,
}

const MediaQueries = {
  SMALL: `@media only screen and (max-width: ${BreakPoints.small - 1}px)`,
  TABLET_PORTRAIT: `@media only screen and (min-width: ${
    BreakPoints.small
  }px) and (max-width: ${BreakPoints.medium - 1}px)`,
  TABLET_LANDSCAPE: `@media only screen and (min-width: ${
    BreakPoints.medium
  }px) and (max-width: ${BreakPoints.wide - 1}px)`,
  NOTEBOOK: `@media only screen and (min-width: ${
    BreakPoints.wide
  }px) and (max-width: ${BreakPoints.huge - 1}px)`,
  DESKTOP: `@media only screen and (min-width: ${BreakPoints.huge}px)`,

  BIGGER_THAN_SMALL: `@media only screen and (min-width: ${BreakPoints.small}px)`,
  BIGGER_THAN_MEDIUM: `@media only screen and (min-width: ${BreakPoints.medium}px)`,
  BIGGER_THAN_WIDE: `@media only screen and (min-width: ${BreakPoints.wide}px)`,
  BIGGER_THAN_HUGE: `@media only screen and (min-width: ${BreakPoints.huge}px)`,

  SMALLER_THAN_MEDIUM: `@media only screen and (max-width: ${
    BreakPoints.medium - 1
  }px)`,
  SMALLER_THAN_WIDE: `@media only screen and (max-width: ${
    BreakPoints.wide - 1
  }px)`,
};

export { BreakPoints, MediaQueries };
