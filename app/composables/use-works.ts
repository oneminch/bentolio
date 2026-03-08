export const useWorks = async () => {
  const { portfolio } = useAppConfig();
  const projectsData = portfolio?.projects || [];

  const postsQueryBuilder = queryCollection('posts');
  const postsData = await postsQueryBuilder
    .select('id', 'title', 'path', 'date')
    .order('date', 'DESC')
    .order('title', 'DESC')
    .all();
  const postsCount = await postsQueryBuilder.count();

  const postsAvailable = postsCount > 0;
  const projectsAvailable = !!portfolio?.projects?.length;

  return {
    posts: postsData,
    postsAvailable,
    projects: projectsData,
    projectsAvailable
  };
};
