
/* eslint-disable no-unused-vars */
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './LayOuts/MainLayout'
import HomePage from './Pages/HomePage'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'


const App = () => {
  
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete job
  const JobPageWrapper = () => {
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      return;
    };
  
    return <JobPage deleteJob={deleteJob} />;
  };

   // Edit job 
   const EditJobPageWrapper = () => {
    const updateJob = async(id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify
      });
      return;
    };
  
    return <EditJobPage updateJob={updateJob} />;
    }

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path= '/' element={<MainLayout />}>
  <Route path='/' element={<HomePage />}/>
  <Route path='/jobs' element={<JobsPage />}/>
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
  <Route path='/jobs/:id' element={<JobPageWrapper />}loader={jobLoader}/>
  <Route path='/edit-job/:id' element={<EditJobPageWrapper />}loader={jobLoader}/>
  <Route path='*' element={<NotFoundPage />}/>
  </Route>
)
)
  return <RouterProvider router={router}/>
}

export default App
