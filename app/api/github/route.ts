import axios from "axios";

// TODO: edit caching strategy
// TODO: make this follow best practices

// * Get wallpaper for each repository
const getWallpaper = (url: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
      return resolve(response.data.download_url);
    } catch (error) {
      return reject(error);
    }
  });
};

// * Map repositories to get the needed data
const mapRepos = async (repos: Repository[]) => {
  return await Promise.all(
    repos.map(async (repo: Repository) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      wallpaper: await getWallpaper(
        `https://api.github.com/repos/AhmedHanye/${repo.name}/contents/preview.webp`
      ).catch(() => null),
    }))
  );
};

// * (Main) Get all repositories Data needed to display
const getGithubData = (): Promise<object | Error> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        "https://api.github.com/user/repos?visibility=public",
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (response.status === 200) {
        try {
          return resolve(await mapRepos(response.data));
        } catch (error) {
          console.error("error fetching wallpaper", error);
        }
      }
    } catch (error) {
      return reject(error);
    }
  });
};

// * Export the GET Function with specific configurations
export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  try {
    const response = await getGithubData();
    return Response.json(response);
  } catch {
    return Response.json({}, { status: 500 });
  }
}
