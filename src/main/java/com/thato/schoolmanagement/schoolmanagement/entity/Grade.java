package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;

@Entity
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Grade() {}

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
}
