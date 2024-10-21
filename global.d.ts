type child = React.ReactNode;
type theme = "light" | "dark" | "system";
type CVDataType = {
  [key: string]: string | string[] | Record<string, string>;
};
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

