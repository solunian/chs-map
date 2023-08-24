import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => {
  return {
    rooms: url.searchParams.get("rooms")?.toLowerCase()?.split(",") ?? [],
  };
};
