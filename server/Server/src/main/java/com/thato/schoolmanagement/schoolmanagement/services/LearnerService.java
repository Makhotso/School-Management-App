package com.thato.schoolmanagement.schoolmanagement.services;

import com.thato.schoolmanagement.schoolmanagement.entity.Grade;
import com.thato.schoolmanagement.schoolmanagement.entity.Learner;
import com.thato.schoolmanagement.schoolmanagement.repository.GradeRepository;
import com.thato.schoolmanagement.schoolmanagement.repository.LearnerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearnerService {

    private final LearnerRepository learnerRepository;
    private final GradeRepository gradeRepository;

    public LearnerService(LearnerRepository learnerRepository,
                          GradeRepository gradeRepository) {
        this.learnerRepository = learnerRepository;
        this.gradeRepository = gradeRepository;
    }

    // CREATE LEARNER
    public Learner createLearner(Learner learner) {
        Grade grade = gradeRepository.findById(learner.getGrade().getId())
                .orElseThrow(() -> new RuntimeException("Grade not found"));

        Integer maxRoll = learnerRepository.findMaxRollNumberByGrade(grade.getId());
        int nextRoll = (maxRoll == null) ? 1 : maxRoll + 1;

        learner.setGrade(grade);
        learner.setRollNumber(nextRoll);

        return learnerRepository.save(learner);
    }

    // GET ALL LEARNERS
    public List<Learner> getAllLearners() {
        return learnerRepository.findAll();
    }

    // GET LEARNER BY ID
    public Learner getLearnerById(Long id) {
        return learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));
    }

    // UPDATE LEARNER
    public Learner updateLearner(Long id, Learner updatedLearner) {
        Learner existing = learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        existing.setFullName(updatedLearner.getFullName());
        existing.setBirthId(updatedLearner.getBirthId());

        // If grade changed → reassign roll number
        if (!existing.getGrade().getId().equals(updatedLearner.getGrade().getId())) {
            Grade newGrade = gradeRepository.findById(updatedLearner.getGrade().getId())
                    .orElseThrow(() -> new RuntimeException("Grade not found"));

            Integer maxRoll = learnerRepository.findMaxRollNumberByGrade(newGrade.getId());
            int nextRoll = (maxRoll == null) ? 1 : maxRoll + 1;

            existing.setGrade(newGrade);
            existing.setRollNumber(nextRoll);
        }

        return learnerRepository.save(existing);
    }

    // DELETE LEARNER + REORDER ROLL NUMBERS
    public void deleteLearner(Long id) {
        Learner learner = learnerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Learner not found"));

        Grade grade = learner.getGrade();
        learnerRepository.delete(learner);

        List<Learner> learnersInGrade =
                learnerRepository.findByGradeOrderByRollNumberAsc(grade);

        int roll = 1;
        for (Learner l : learnersInGrade) {
            l.setRollNumber(roll++);
        }

        learnerRepository.saveAll(learnersInGrade);
    }

    //  GET LEARNERS BY GRADE
    public List<Learner> getLearnersByGrade(Long gradeId) {
        Grade grade = gradeRepository.findById(gradeId)
                .orElseThrow(() -> new RuntimeException("Grade not found"));
        return learnerRepository.findByGradeOrderByRollNumberAsc(grade);
    }
}
