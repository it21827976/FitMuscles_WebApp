package com.fitme.backend.payloadresponse;

public class LoginMesage {

    private String message; // Make fields private and accessible via getter/setter
    private Boolean status;
    private String email;

    public LoginMesage(String message, Boolean status, String email) {
        this.message = message;
        this.status = status;
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public  String getEmail() {
        return email;
    }
}
