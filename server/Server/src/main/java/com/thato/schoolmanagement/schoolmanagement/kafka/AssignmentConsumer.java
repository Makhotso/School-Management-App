package com.thato.schoolmanagement.schoolmanagement.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class AssignmentConsumer {

    @KafkaListener(topics = "assignments", groupId = "group_id")
    public void consume(String message) {
        System.out.println("Consumed message: " + message);
    }
}
