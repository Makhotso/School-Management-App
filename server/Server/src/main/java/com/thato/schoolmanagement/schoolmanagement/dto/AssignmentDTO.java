package com.thato.schoolmanagement.schoolmanagement.dto;

public class AssignmentDTO {
    private Long id;
    private String title;
    private String description;
    private Long gradeId;    // the grade the assignment is for
    private Long teacherId;  // who assigned it

    // Constructors
    public AssignmentDTO() {}
    public AssignmentDTO(Long id, String title, String description, Long gradeId, Long teacherId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.gradeId = gradeId;
        this.teacherId = teacherId;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getGradeId() { return gradeId; }
    public void setGradeId(Long gradeId) { this.gradeId = gradeId; }

    public Long getTeacherId() { return teacherId; }
    public void setTeacherId(Long teacherId) { this.teacherId = teacherId; }
}