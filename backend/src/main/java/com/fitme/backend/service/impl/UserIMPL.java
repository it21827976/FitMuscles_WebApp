package com.fitme.backend.service.impl;

import com.fitme.backend.Entity.User; // Ensure correct import
import com.fitme.backend.dto.LoginDTO;
import com.fitme.backend.dto.UserDTO;
import com.fitme.backend.payloadresponse.LoginMesage;
import com.fitme.backend.repo.UserRepo;
import com.fitme.backend.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Ensure correct annotation
public class UserIMPL implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User( // Use `Long` for unique IDs for better scalability
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                passwordEncoder.encode(userDTO.getPassword()) // Correct encoding
        );

        userRepo.save(user); // Ensure repository saving logic
        return user.getUsername(); // Return meaningful data
    }

    @Override
    public LoginMesage loginUser(LoginDTO loginDTO) {
        User user = userRepo.findByEmail(loginDTO.getEmail()); // Check by email first
        if (user != null) {
            String encodedPassword = user.getPassword(); // Stored encoded password
            if (passwordEncoder.matches(loginDTO.getPassword(), encodedPassword)) { // Compare using encoder
                int email = user.getUserid(); // Get email for response
                return new LoginMesage("Login Success", true, "Welcome "+ email);
            } else {
                return new LoginMesage("Password does not match", false, "Welcome"); // Correct error message
            }
        } else {
            return new LoginMesage("Email does not exist", false, "Welcome"); // Consistent error message
        }
    }

    @Override
    public UserDTO getUser(int id) {
       User user = userRepo.findById(id).orElse(null); // Use `findById` for better performance

        return modelMapper.map(user, UserDTO.class); // Ensure
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepo.findAll(); // Ensure correct repository method
        return users.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList(); // Ensure correct mapping
    }


}
