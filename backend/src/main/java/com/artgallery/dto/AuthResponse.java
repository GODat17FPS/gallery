package com.artgallery.dto;

public class AuthResponse {
    private boolean success;
    private String message;
    private Long userId;
    private String email;

    public AuthResponse() {
    }

    public AuthResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public AuthResponse(boolean success, String message, Long userId, String email) {
        this.success = success;
        this.message = message;
        this.userId = userId;
        this.email = email;
    }

    public static AuthResponse success(String message, Long userId, String email) {
        return new AuthResponse(true, message, userId, email);
    }

    public static AuthResponse error(String message) {
        return new AuthResponse(false, message);
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
