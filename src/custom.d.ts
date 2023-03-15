// To import SVG and images in React code
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
