import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash, FaEdit, FaHeart } from 'react-icons/fa';
import Nav from './Nav';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component for the like button with a like count and a toggle function
const LikeButton = ({ likes, toggleLike }) => (
  <div className="flex items-center space-x-1">
    <button onClick={toggleLike} className="text-red-600 hover:text-red-800">
      <FaHeart size={20} />
    </button>
    <span className="text-black">{likes}</span>
  </div>
);

// Component for displaying and adding comments with a delete option
const CommentSection = ({ comments, addComment, deleteComment }) => {
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
        <button onClick={handleAddComment} className="text-blue-600 hover-text-blue-800">
          Post
        </button>
      </div>
      <ul className="mt-2">
        {comments.map((comment, index) => (
          <li key={index} className="flex justify-between items-center border-b p-2">
            <span className="text-black">{comment}</span>
            <button
              onClick={() => deleteComment(index)}
              className="text-red-600 hover-text-red-800"
            >
              <FaTrash size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MealFeed = () => {
  const [meals, setMeals] = useState([]); // Ensure the initial state is an array
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams('');

  useEffect(() => {
    console.log('User ID:', id); // Check if userId is correct
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/meal/getonemeal/${id}`);
        console.log('Fetched meals:', response.data); // Debug the response data
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
  }, [id]); // Re-fetch when the user ID changes

  const handleDelete = async (mealId) => {
    confirmAlert({
      title: 'Confirm deletion',
      message: 'Are you sure you want to delete this meal plan?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:8080/api/v1/meal/deleteMealByID/${mealId}`);
              setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
              toast.success('Meal deleted successfully');
            } catch (error) {
              console.error('Error deleting meal:', error);
              toast.error('Failed to delete meal');
            }
          },
        },
        {
          label: 'No',

          onClick: () => {},

        },
      ],
    });
  };

  const handleUpdate = (mealId) => {
    navigate(`/updateMeal/${mealId}`);
  };

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

  const deleteComment = (mealId, commentIndex) => {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            comments: meal.comments.filter((_, index) => index !== commentIndex),
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
    <div className="relative text-black">
      <Nav />
      <div className="pt-24"> {/* Offset for the fixed navbar */}
        <div className="flex justify-center w-full my-5">
          <div className="w-3/5">
            <ul className="space-y-3">
              {meals.map((meal) => (
                <li
                  key={meal.id}
                  className="bg-white rounded shadow hover:bg-gray-200 transition-all"
                >
                  <div className="flex justify-between items-start p-3">

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-black">{meal.mealName}</h3>
                      <p><strong>Category:</strong> {meal.mealCategory}</p>
                      <p><strong>Description:</strong> {meal.mealDescription}</p>
                      <p><strong>Time:</strong> {meal.mealTime}</p>
                      <p><strong>Size:</strong> {meal.size}</p>
                      <p><strong>Calories:</strong> {meal.calories}</p>
                      <p><strong>Instruction:</strong> {meal.instruction}</p>


                      <CommentSection
                        comments={meal.comments}
                        addComment={(comment) => addComment(meal.id, comment)}
                        deleteComment={(index) => deleteComment(meal.id, index)}
                      />
                    </div>

                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={() => handleUpdate(meal.id)}
                        className="text-blue-600 hover-text-blue-800"
                      >
                        <FaEdit size={20} />
                      </button>

                      <button
                        onClick={() => handleDelete(meal.id)}
                        className="text-red-600 hover-text-red-800"
                      >
                        <FaTrash size={20} />
                      </button>

                      <LikeButton
                        likes={meal.likes}
                        toggleLike={() => toggleLike(meal.id)}
                      />
                    </div>
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

export default MealFeed;
