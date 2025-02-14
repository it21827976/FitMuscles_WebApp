package com.fitme.backend.controller; // Correct package naming

import com.fitme.backend.dto.LoginDTO;
import com.fitme.backend.dto.UserDTO;
import com.fitme.backend.payloadresponse.LoginMesage;
import com.fitme.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin // Enables cross-origin requests
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public ResponseEntity<String> saveUser(@RequestBody UserDTO userDTO) {
        String id = userService.addUser(userDTO);
        return ResponseEntity.ok(id); // Return a ResponseEntity for consistent response
    }

    @PostMapping(path = "/login")
    public ResponseEntity<LoginMesage> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginMesage loginMesage = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginMesage); // Ensure correct ResponseEntity type
    }

    @GetMapping(path = "/getOne/{id}")
    public UserDTO getUser(@PathVariable int id) {
        UserDTO userDTO = userService.getUser(id);
        return userDTO;
    }

    @GetMapping(path = "/getAll")
    public List<UserDTO> getAllUsers() {
        List<UserDTO> userDTOs = userService.getAllUsers();
        return userDTOs;
    }
}
