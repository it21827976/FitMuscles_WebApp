import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import Nav from './Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../images/login.png'

// Component for the like button with a like count and a toggle function
const LikeButton = ({ likes, toggleLike }) => (
  <div className="flex items-center space-x-1">
    <button onClick={toggleLike} className="text-red-600 hover:text-red-800">
      <FaHeart size={20} />
    </button>
    <span className="text-black">{likes}</span>
  </div>
);

// Component for displaying and adding comments
const CommentSection = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="border rounded p-2 w-full text-black"
        />
        <button onClick={handleAddComment} className="text-blue-600 hover:text-blue-800">
          Post
        </button>
      </div>
      <ul className="mt-2">
        {comments.map((comment, index) => (
          <li key={index} className="flex justify-between items-center border-b p-2">
            <span className="text-black">{comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MealFeedHome = () => {
  const [meals, setMeals] = useState([]); // Ensure the initial state is an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/meal/getMeals');
        if (Array.isArray(response.data)) { // Ensure the response is an array
          const initializedMeals = response.data.map((meal) => ({
            ...meal,
            likes: meal.likes || 0,
            comments: meal.comments || [],
          }));
          setMeals(initializedMeals);
        } else {
          console.error('Unexpected response format:', response.data); // Handle unexpected response
          toast.error('Unexpected response format');
        }
        setLoading(false); // Set loading to false once data is retrieved
      } catch (error) {
        console.error('Error fetching meals:', error);
        toast.error('Error fetching meals');
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchMeals(); // Fetch meals when the component mounts
  }, []); // No dependencies, only fetch once on component mount

  const toggleLike = (mealId) => {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            likes: meal.likes + 1,
          };
        }
        return meal;
      });
      return updatedMeals;
    });
  };

  const addComment = (mealId, newComment) => {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            comments: [...meal.comments, newComment],
          };
        }
        return meal;
      });
      return updatedMeals;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32 text-gray-800">
        Loading meals...
      </div>
    );
  }

  if (meals.length === 0) {
    return (
      <div className="flex justify-center items-center h-32 text-gray-800">
        No meals available.
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="pt-1"> {/* Offset for the fixed navbar */}
        <div className="flex justify-start w-full my-5">
          <div className="w-3/5">
            <ul className="space-y-3">
              {meals.map((meal) => (
                <li
                  key={meal.id}
                  className=" bg-slate-700 rounded shadow"
                >
                   <div className="px-3 py-2 head flex items-center justify-start">
            <img src={Login} alt="" width={40} className='rounded-full' />
            <div className='grid'>
            <h1 className=' mx-3 font-bold text-xl'>Ashan</h1>
            <p className=' mx-3'>Meal Plans</p>
            </div>
            </div> 
                  <div className="flex justify-between items-start p-3">
                    <div className="flex-grow">
                    <h3 className="text-xl font-bold text-orange-500">{meal.mealName}</h3>
                      <p><strong>Category:</strong> {meal.mealCategory}</p>
                      <p><strong>Description:</strong> {meal.mealDescription}</p>
                      <p><strong>Time:</strong> {meal.mealTime}</p>
                      <p><strong>Size:</strong> {meal.size}</p>
                      <p><strong>Calories:</strong> {meal.calories}</p>
                      <p><strong>Instruction:</strong> {meal.instruction}</p>

                      <CommentSection
                        comments={meal.comments}
                        addComment={(comment) => addComment(meal.id, comment)}
                      />
                    </div>

                    <LikeButton
                      likes={meal.likes}
                      toggleLike={() => toggleLike(meal.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Display toast notifications */}
    </div>
  );
};

export default MealFeedHome;
