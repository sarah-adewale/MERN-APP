import asyncHandler from "express-async-handler";

// @desc  Auth user/set token
// route POST/api/users/auth
// @access public

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' });
});


// @desc  Register new user
// route POST/api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User' });
});


// @desc  Logout user
// route POST/api/users/logout
// @access public

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' });
});


// @desc  Get user profile
// route Get/api/users/auth
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' });
});



// @desc  Update user profile
// route PUT/api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile' });
});


export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
};