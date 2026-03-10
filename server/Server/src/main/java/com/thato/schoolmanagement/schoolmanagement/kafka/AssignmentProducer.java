package com.thato.schoolmanagement.schoolmanagement.kafka;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class AssignmentProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public AssignmentProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendAssignment(String topic, String message) {
        kafkaTemplate.send(topic, message);
    }
}
