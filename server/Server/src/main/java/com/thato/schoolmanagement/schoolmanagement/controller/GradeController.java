package com.thato.schoolmanagement.schoolmanagement.controller;

import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import com.thato.schoolmanagement.schoolmanagement.repository.GradeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
public class GradeController {

    private final GradeRepository gradeRepository;

    public GradeController(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    @PostMapping
    public Grade createGrade(@RequestBody Grade grade) {
        return gradeRepository.save(grade);
    }

    @GetMapping
    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Grade getGradeById(@PathVariable Long id) {
        return gradeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Grade not found"));
    }

    @PutMapping("/{id}")
    public Grade updateGrade(@PathVariable Long id, @RequestBody Grade updatedGrade) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Grade not found"));
        grade.setName(updatedGrade.getName());
        return gradeRepository.save(grade);
    }

    @DeleteMapping("/{id}")
    public void deleteGrade(@PathVariable Long id) {
        gradeRepository.deleteById(id);
    }
}

