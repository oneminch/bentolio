export const useWorks = async () => {
	const postsQueryBuilder = queryCollection('posts')
	const postsData = await postsQueryBuilder.select("id", "title", "path", "published_on").order("published_on", "DESC").all()
	const postsCount = await postsQueryBuilder.count()

	const projectsQueryBuilder = queryCollection('projects')
	const projectsData = await projectsQueryBuilder.all()
	const projectsCount = await projectsQueryBuilder.count()

	const postsAvailable = postsCount > 0;
	const projectsAvailable = projectsCount > 0 && !!projectsData[0]?.projects?.length;

	return {
		posts: postsData,
		postsAvailable,
		projects: projectsData[0]?.projects || [],
		projectsAvailable
	};
};
