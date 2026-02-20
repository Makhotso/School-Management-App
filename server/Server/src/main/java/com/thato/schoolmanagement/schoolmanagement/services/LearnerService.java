package com.thato.schoolmanagement.schoolmanagement.services;

import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import com.thato.schoolmanagement.schoolmanagement.repository.LearnerRepository;
import com.thato.schoolmanagement.schoolmanagement.repository.GradeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LearnerService {

    private final LearnerRepository learnerRepository;
    private final GradeRepository gradeRepository;

    public LearnerService(LearnerRepository learnerRepository, GradeRepository gradeRepository) {
        this.learnerRepository = learnerRepository;
        this.gradeRepository = gradeRepository;
    }

    // CREATE learner with auto roll number
    @Transactional
    public Learner createLearner(Learner learner) {
        Grade grade = gradeRepository.findById(learner.getGrade().getId())
                .orElseThrow(() -> new RuntimeException("Grade not found"));
        learner.setGrade(grade);

        // Auto roll number
        List<Learner> learnersInGrade = learnerRepository.findByGradeIdOrderByRollNumberAsc(grade.getId());
        int lastRoll = learnersInGrade.stream()
                .map(Learner::getRollNumber)
                .max(Integer::compare)
                .orElse(0);
        learner.setRollNumber(lastRoll + 1);

        return learnerRepository.save(learner);
    }

    // GET all learners
    public List<Learner> getAllLearners() {
        return learnerRepository.findAll();
    }

    // GET learner by ID
    public Learner getLearnerById(Long id) {
        return learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));
    }

    // UPDATE learner
    @Transactional
    public Learner updateLearner(Long id, Learner updatedLearner) {
        Learner learner = learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        learner.setFullName(updatedLearner.getFullName());
        learner.setBirthId(updatedLearner.getBirthId());

        // Update grade if changed
        if (updatedLearner.getGrade() != null) {
            Grade grade = gradeRepository.findById(updatedLearner.getGrade().getId())
                    .orElseThrow(() -> new RuntimeException("Grade not found"));
            learner.setGrade(grade);
        }

        return learnerRepository.save(learner);
    }

    // DELETE learner and reorder roll numbers
    @Transactional
    public void deleteLearner(Long id) {
        Learner learner = learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        learnerRepository.delete(learner);

        // Reorder roll numbers in grade
        List<Learner> learnersInGrade = learnerRepository.findByGradeIdOrderByRollNumberAsc(learner.getGrade().getId());
        int roll = 1;
        for (Learner l : learnersInGrade) {
            l.setRollNumber(roll++);
            learnerRepository.save(l);
        }
    }

    // GET learners by grade
    public List<Learner> getLearnersByGrade(Long gradeId) {
        return learnerRepository.findByGradeIdOrderByRollNumberAsc(gradeId);
    }
}