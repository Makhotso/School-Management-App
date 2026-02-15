package com.thato.schoolmanagement.schoolmanagement.controller;

import com.thato.schoolmanagement.schoolmanagement.entity.Assignment;
import com.thato.schoolmanagement.schoolmanagement.services.AssignmentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teacher")
public class TeacherController {

    private final AssignmentService assignmentService;

    // Constructor Injection
    public TeacherController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @PostMapping("/assignments")
    public Assignment createAssignment(@RequestBody Assignment assignment) {
        return assignmentService.createAssignment(assignment);
    }
}
