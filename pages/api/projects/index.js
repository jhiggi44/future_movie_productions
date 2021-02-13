import projects from '../../../data'

function onlyProjectsIn(query, filteredProjects) {
  if (!query) return filteredProjects;
  const validKeys = Object.keys(filteredProjects);

  const queryResult = {};
  query.filter(key => validKeys.includes(key))
  .forEach(key => { queryResult[key] = filteredProjects[key] });
  
  return queryResult;
}

function projectsNotIn(query) {
  if (!query) return projects;

  const queryResult = {};
  Object.keys(projects)
  .filter(key => !query.includes(key))
  .forEach(key => { queryResult[key] = projects[key]});

  return queryResult;
}

export default (req, res) => {
  let filteredProjects = projectsNotIn(req.query.excluding?.split(","));
  filteredProjects = onlyProjectsIn(req.query.only?.split(","), filteredProjects);

  res.statusCode = 200;
  res.json(Object.values(filteredProjects));
}