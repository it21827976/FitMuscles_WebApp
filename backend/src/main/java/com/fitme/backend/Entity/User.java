package com.fitme.backend.Entity; // Correct package name

import jakarta.persistence.*;

@Entity
@Table(name = "users") // Ensure correct table name
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Generation strategy for IDs
    private int userid; // Consider changing to Long for unique IDs

    @Column(name = "user_name", length = 255) // Correct naming
    private String username;

    @Column(name = "email", length = 255, unique = true) // Ensure unique constraint for emails
    private String email;

    @Column(name = "password", length = 255) // Bcrypt encoded passwords
    private String password;

    public User(int userid, String username, String email, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User() {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
