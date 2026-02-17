package com.thato.schoolmanagement.schoolmanagement.controller;

import com.thato.schoolmanagement.schoolmanagement.entity.Assignment;
import com.thato.schoolmanagement.schoolmanagement.services.AssignmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/learner")
public class LearnerController {

    private final AssignmentService assignmentService;

    // Constructor Injection (manual)
    public LearnerController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @GetMapping("/{learnerId}/assignments")
    public List<Assignment> getAssignments(@PathVariable Long learnerId) {
        return assignmentService.getAssignmentsForLearner(learnerId);
    }
}
