package com.thato.schoolmanagement.schoolmanagement.controller;

import com.thato.schoolmanagement.schoolmanagement.services.AssignmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.thato.schoolmanagement.schoolmanagement.entity.Assignment;

import java.util.List;

@RestController
@RequestMapping("/learner")
@RequiredArgsConstructor
public class LearnerController {

    private final AssignmentService assignmentService;

    @GetMapping("/{learnerId}/assignments")
    public List<Assignment> getAssignments(@PathVariable Long learnerId) {
        return assignmentService.getAssignmentsForLearner(learnerId);
    }
}

