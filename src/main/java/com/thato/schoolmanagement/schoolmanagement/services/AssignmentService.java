package com.thato.schoolmanagement.schoolmanagement.services;

import com.thato.schoolmanagement.schoolmanagement.entity.Assignment;
import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import com.thato.schoolmanagement.schoolmanagement.repository.AssignmentRepository;
import com.thato.schoolmanagement.schoolmanagement.repository.LearnerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;
    private final LearnerRepository learnerRepository;

    public List<Assignment> getAssignmentsForLearner(Long learnerId) {

        Learner learner = learnerRepository.findById(learnerId)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        Long gradeId = learner.getGrade().getId();

        return assignmentRepository.findByGradeId(gradeId);
    }

    public Assignment createAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }
}

