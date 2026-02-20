package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;

@Entity
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String birthId;

    private String fullName;
    private String email;

    public Teacher() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBirthId() { return birthId; }
    public void setBirthId(String birthId) { this.birthId = birthId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}