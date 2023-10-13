declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
  interface CSSVariables {
    "--progress-width": string;
  }
  const cssVariables: CSSVariables;
}