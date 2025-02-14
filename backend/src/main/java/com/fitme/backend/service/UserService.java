package com.fitme.backend.service;

import com.fitme.backend.dto.LoginDTO;
import com.fitme.backend.dto.UserDTO;
import com.fitme.backend.payloadresponse.LoginMesage;

import java.util.List;

public interface UserService {
    String addUser(UserDTO userDTO); // Consistent method naming

    LoginMesage loginUser(LoginDTO loginDTO); // Return type matches expected response

    UserDTO getUser(int id);

    List<UserDTO> getAllUsers();
}
