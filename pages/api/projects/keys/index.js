import projects from '../../../../data'

export default (req, res) => {
  res.statusCode = 200;
  res.json(Object.keys(projects));
}