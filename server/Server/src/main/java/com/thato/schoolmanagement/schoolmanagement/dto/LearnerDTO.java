package com.thato.schoolmanagement.schoolmanagement.dto;

public class LearnerDTO {
    private Long id;
    private String fullName;
    private Long gradeId;   // optional: you can also add gradeName

    public LearnerDTO() {}
    public LearnerDTO(Long id, String fullName, Long gradeId) {
        this.id = id;
        this.fullName = fullName;
        this.gradeId = gradeId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public Long getGradeId() { return gradeId; }
    public void setGradeId(Long gradeId) { this.gradeId = gradeId; }
}