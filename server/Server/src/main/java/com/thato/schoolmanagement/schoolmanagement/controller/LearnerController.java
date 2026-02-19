package com.thato.schoolmanagement.schoolmanagement.controller;

import com.thato.schoolmanagement.schoolmanagement.entity.Assignment;
import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.services.AssignmentService;
import com.thato.schoolmanagement.schoolmanagement.services.LearnerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/learners")
public class LearnerController {

    private final LearnerService learnerService;
    private final AssignmentService assignmentService;

    // Constructor Injection
    public LearnerController(LearnerService learnerService,
                             AssignmentService assignmentService) {
        this.learnerService = learnerService;
        this.assignmentService = assignmentService;
    }

    // ✅ CREATE learner
    @PostMapping
    public Learner createLearner(@RequestBody Learner learner) {
        return learnerService.createLearner(learner);
    }

    // ✅ GET all learners
    @GetMapping
    public List<Learner> getAllLearners() {
        return learnerService.getAllLearners();
    }

    // ✅ GET learner by ID
    @GetMapping("/{id}")
    public Learner getLearnerById(@PathVariable Long id) {
        return learnerService.getLearnerById(id);
    }

    // ✅ UPDATE learner
    @PutMapping("/{id}")
    public Learner updateLearner(@PathVariable Long id,
                                 @RequestBody Learner learner) {
        return learnerService.updateLearner(id, learner);
    }

    // ✅ DELETE learner (with rollNumber reorder)
    @DeleteMapping("/{id}")
    public void deleteLearner(@PathVariable Long id) {
        learnerService.deleteLearner(id);
    }

    // ✅ GET assignments for learner
    @GetMapping("/{learnerId}/assignments")
    public List<Assignment> getAssignments(@PathVariable Long learnerId) {
        return assignmentService.getAssignmentsForLearner(learnerId);
    }

    // ✅ GET learners by grade
    @GetMapping("/grade/{gradeId}")
    public List<Learner> getLearnersByGrade(@PathVariable Long gradeId) {
        return learnerService.getLearnersByGrade(gradeId);
    }
}
