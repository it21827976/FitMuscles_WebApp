import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import BG from '../images/bg.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = ({ userId }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState({
    mealCategory: '',
    mealName: '',
    mealDescription: '',
    mealTime: '',
    size: '',
    calories: '',
    instruction: '',
    userid:'',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/meal/getMealByMealID/${id}`);
        setMeal(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal:', error);
        toast.error('Failed to fetch meal data.', {
          autoClose: 3000,
        });
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal((prevMeal) => ({
      ...prevMeal,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/meal/updateMealByID/${id}`, meal);
      toast.success('MealPlan successfully updated!', {
        autoClose: 5000,
      });
      setTimeout(() => {
        navigate(`/mealfeed/${meal.userid}`); // Navigate to mealfeed with userId
      }, 1500); // Redirect after a short delay
    } catch (error) {
      console.error('Error updating meal:', error);
      toast.error('Failed to update meal.', {
        autoClose: 5000,
      });
    }
  };

  const addImg = {
    // backgroundImage: `url(${BG})`,
    backgroundSize: 'contain',
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat-x',
    width: '100%',
    height: '150vh',
    overflow:'hidden'
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32 text-black">
        Loading...
      </div>
    );
  }

  if (!meal.mealName) {
    return (
      <div className="flex justify-center items-center h-32 text-black">
        Error loading meal data.
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <Nav />
      <div className="box flex flex-col items-center justify-center" style={addImg}>
        <div className="formdata w-[60%] bg-black p-8 rounded text-black mt-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Update Meal</h1>
          <form onSubmit={handleSubmit} className="font-bold">
            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="mealName" className="form-label text-blue-50 mr-4 w-36">Meal Name:</label>
              <input
                type="text"
                id="mealName"
                name="mealName"
                className="form-control p-2 flex-grow"
                placeholder="Enter Meal Name"
                required
                value={meal.mealName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="mealCategory" className="form-label text-blue-50 mr-4 w-36">Meal Category:</label>
              <select
                id="mealCategory"
                name="mealCategory"
                className="form-select p-2 flex-grow"
                required
                value={meal.mealCategory}
                onChange={handleChange}
              >
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
              </select>
            </div>

            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="mealTime" className="form-label text-blue-50 mr-4 w-36">Meal Time:</label>
              <select
                id="mealTime"
                name="mealTime"
                className="form-select p-2 flex-grow"
                required
                value={meal.mealTime}
                onChange={handleChange}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="mealDescription" className="form-label text-blue-50 mr-4 w-36">Meal Description:</label>
              <textarea
                id="mealDescription"
                name="mealDescription"
                className="form-control p-2 flex-grow"
                required
                placeholder="Enter Meal Description"
                value={meal.mealDescription}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="size" className="form-label text-blue-50 mr-4 w-36">Size (grams):</label>
              <input
                type="number"
                id="size"
                name="size"
                className="form-control p-2 flex-grow"
                placeholder="Enter Size"
                value={meal.size}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-box mt-4 flex items-center">
              <label htmlFor="calories" className="form-label text-blue-50 mr-4 w-36">Calories:</label>
              <input
                type="number"
                id="calories"
                name="calories"
                className="form-control p-2 flex-grow"
                placeholder="Enter Calories"
                value={meal.calories}
                onChange={handleChange}
              />
            </div>

            <div className="form-group-box mt-4 flex flex-col">
              <label htmlFor="instruction" className="form-label text-blue-50 mb-2">Instruction:</label>
              <textarea
                id="instruction"
                name="instruction"
                className="form-control p-2 h-32 resize-none"
                placeholder="Enter Cooking Instructions"
                required
                value={meal.instruction}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="mt-8 rounded p-2 text-xl font-bold w-full uppercase"
              style={{ background: '#FF4400' }}
            >
              Update Meal
            </button>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={5000} position="top-right" /> {/* Toast configuration */}
    </div>
  );
};

export default UpdateForm;
