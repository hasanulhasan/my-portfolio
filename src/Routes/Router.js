import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Container/ProjectDetails/ProjectDetails";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/project/:id',
    element: <ProjectDetails></ProjectDetails>,
    loader: ({ params }) => fetch(`http://localhost:5001/project/${params.id}`)
  }
])
export default router;