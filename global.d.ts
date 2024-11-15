type child = React.ReactNode;
type theme = "light" | "dark" | "system" | undefined;
type CVDataType = {
  [key: string]: string | string[] | Record<string, string>;
};
interface Repository {
  name: string;
  description: string;
  html_url: string;
}
type PlaceType = -2 | -1 | 0 | 1 | 2;
interface TransitionContextType {
  setDir: (isIn: boolean) => void;
  dir: boolean | null;
}
type LinksType = {
  [key: string]: [string, number];
};
