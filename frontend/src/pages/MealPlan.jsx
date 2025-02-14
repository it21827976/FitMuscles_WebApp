import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';
import BG from '../images/bg.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MealPlan = () => {
    const navigate = useNavigate();
    const { id: userId } = useParams(); // Get the user ID from URL parameters

    const [mealData, setMealData] = useState({
        userid: userId,
        mealCategory: 'vegetarian',
        mealName: '',
        mealDescription: '',
        mealTime: 'breakfast',
        size: '',
        calories: '',
        instruction: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMealData((prevData) => ({
            ...prevData,
            userid: userId,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/v1/meal/saveMeal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mealData),
            });

            if (response.ok) {
                toast.success('MealPlan successfully added!', {
                    autoClose: 5000,
                });

                setTimeout(() => {
                    navigate(`/profile/${userId}`); // Redirect to the user's profile
                }, 1500);
            } else {
                toast.error('Failed to create MealPlan.');
            }
        } catch (error) {
            toast.error(`Error occurred: ${error.message}`);
        }
    };

    const backgroundStyle = {
        // backgroundImage: `url(${BG})`,
        backgroundSize: 'cover', // Ensure background covers the container
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        height: '100%',
    };

    return (
        <div className="w-screen h-screen" style={backgroundStyle}> {/* Apply the background style */}
            <Nav /> {/* Navigation component */}
            <div className="flex justify-center items-start p-8"> {/* Parent container with padding */}
                <div className="w-[60%] bg-black p-8 rounded text-white mt-20"> {/* Form container */}
                    <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Meal Plan Sharing</h1>
                    <form onSubmit={handleSubmit} className="font-bold"> {/* Meal plan form */}
                        {/* Meal category selection */}
                        <div className="form-group-box mt-4 flex items-center">
                            <label htmlFor="mealCategory" className="text-blue-50 mr-4 w-36"> {/* Consistent label */}
                                Select Meal Category:
                            </label>
                            <select
                                id="mealCategory"
                                className="form-select p-2 flex-grow"
                                name="mealCategory"
                                value={mealData.mealCategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                                <option value="keto">Keto</option>
                            </select>
                        </div>

                        {/* Meal time selection */}
                        <div className="form-group-box mt-4 flex items-center">
                            <label htmlFor="mealTime" className="text-blue-50 mr-4 w-36"> {/* Consistent label */}
                                Select Meal Time:
                            </label>
                            <select
                                id="mealTime"
                                className="form-select p-2 flex-grow"
                                name="mealTime"
                                value={mealData.mealTime}
                                onChange={handleChange}
                                required
                            >
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>

                        {/* Input for meal name */}
                        <div className="form-group-box mt-4 flex items-center">
                            <label htmlFor="mealName" className="text-blue-50 mr-4 w-36"> {/* Consistent label and spacing */}
                                Meal Name:
                            </label>
                            <input
                                type="text"
                                id="mealName"
                                className="form-control p-2"
                                placeholder="Enter Meal Name"
                                name="mealName"
                                value={mealData.mealName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Input for meal description */}
                        <div class="form-group-box mt-4 flex items-center"> 
                            <label htmlFor="mealDescription" className="text-blue-50 mr-4 w-36"> {/* Consistent spacing */}
                                Meal Description:
                            </label>
                            <input
                                type="text"
                                id="mealDescription"
                                className="form-control p-2 flex-grow"
                                placeholder="Enter Meal Description"
                                name="mealDescription"
                                value={mealData.mealDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Additional fields for size, calories, and cooking instructions */}
                        <div class="form-group-box mt-4 flex items-center"> 
                            <label htmlFor="size" className="text-blue-50 mr-4 w-36"> {/* Consistent label */}
                                Size (grams):
                            </label>
                            <input
                                type="number"
                                id="size"
                                name="size"
                                className="form-control p-2 flex-grow"
                                placeholder="Enter Size in Grams"
                                value={mealData.size}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div class="form-group-box mt-4 flex items-center"> 
                            <label htmlFor="calories" className="text-blue-50 mr-4 w-36"> {/* Consistent spacing */}
                                Calories:
                            </label>
                            <input
                                type="number"
                                id="calories"
                                className="form-control p-2"
                                placeholder="Enter Calories"
                                name="calories"
                                value={mealData.calories}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div class="form-group-box mt-4 flex flex-col"> {/* For instructions, allow multi-line */}
                            <label htmlFor="instruction" className="text-blue-50 mb-2"> {/* Label for instructions */}
                                Cooking Instructions:
                            </label>
                            <textarea
                                id="instruction"
                                className="form-control p-2"
                                placeholder="Enter Cooking Instructions"
                                name="instruction"
                                value={mealData.instruction}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="mt-8 rounded p-2 text-xl font-bold w-full uppercase"
                            style={{ background: '#FF4400' }} 
                        >
                            Add Meal Plan
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer /> {/* Toast notifications */}
        </div>
    );
};

export default MealPlan;
