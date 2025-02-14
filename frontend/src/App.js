import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import AddVideo from "./pages/addVideo";
import ViewPost from "./pages/viewPost";
import Edit from "./pages/editUser";
import SeeOne from "./pages/view"

import MealPlan from './pages/MealPlan';
import MealFeed from './pages/MealFeed';
import UpdateForm from './pages/UpdateForm';

import Profile from './pages/Profile';

import Workplan from './pages/Workplan';
import Bodydata from './pages/Bodydata';
import CheckPlan from './pages/CheckPlan';
import AddPlan from './pages/AddPlan';
import PlanList from './pages/PlanList';
import EditWork from './pages/EditWork';

import MealFeedHome from './pages/MealFeedHome';

import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>


          
          

          









































        <Route path="/add" element={<AddVideo />} />
          <Route path="/view" element={<ViewPost />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/viewone/:id" element={<SeeOne />} />


        <Route path='/' element={<Home/>}></Route>


          
          <Route path='/updateMeal/:id' element={<UpdateForm/>}></Route>

          <Route path='/:id' element={<Home/>}></Route>


          <Route path='/profile/:id' element={<Profile/>}></Route>

          <Route path='/workplan/:id' element={<Workplan/>}></Route>
          <Route path='/bodydata/:id' element={<Bodydata/>}></Route>
         

          <Route path='/addplan/:id' element={<AddPlan/>}></Route>
          
          <Route path='/wdedit/:id' element={<EditWork/>}></Route>


          <Route path="/mealplan/:id" element={<MealPlan />} />

          <Route path="/mealfeed/:id" element={<MealFeed />} />

          <Route path="/mealfeedhome" element={<MealFeedHome />} />

          <Route path='/login' element={<Login/>}></Route>

          <Route path='/register' element={<Register/>}></Route>














          




        </Routes>
      </BrowserRouter>


     
     

    </div>
  );
}

export default App;
