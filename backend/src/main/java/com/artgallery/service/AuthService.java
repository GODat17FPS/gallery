package com.artgallery.service;

import com.artgallery.dto.AuthRequest;
import com.artgallery.dto.AuthResponse;
import com.artgallery.model.User;
import com.artgallery.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public AuthResponse register(AuthRequest request) {
        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            return AuthResponse.error("Email already registered");
        }

        // Create new user with hashed password
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(request.getEmail(), hashedPassword);
        User savedUser = userRepository.save(user);

        return AuthResponse.success(
                "Registration successful",
                savedUser.getId(),
                savedUser.getEmail());
    }

    @Transactional(readOnly = true)
    public AuthResponse login(AuthRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            return AuthResponse.error("Invalid email or password");
        }

        User user = userOptional.get();

        // Verify password
        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            return AuthResponse.error("Invalid email or password");
        }

        return AuthResponse.success(
                "Login successful",
                user.getId(),
                user.getEmail());
    }
}
