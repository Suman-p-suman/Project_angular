package com.example.backend;
import com.example.backend.Entity.Survey;
import com.example.backend.Repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Arrays;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableMongoRepositories
public class BackendApplication implements CommandLineRunner {

    @Autowired
    private SurveyRepository surveyRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(String... args) {
        // Create a sample Survey object
        Survey survey = new Survey(
                "1",
                "Wonderland Survey",
                "Survey about Wonderland",
                100,
                Arrays.asList(
                        
                ),
                Arrays.asList(
                      
                ),
                Arrays.asList(
                        
                )
        );

        // Save the Survey object to the repository
        surveyRepository.save(survey);
    }
}