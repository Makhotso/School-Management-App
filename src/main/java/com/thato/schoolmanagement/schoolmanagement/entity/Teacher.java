package com.thato.schoolmanagement.schoolmanagement.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
}
