package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import com.example.backend.Entity.OpenEndedQuestion;
import com.example.backend.Entity.RatingQuestion;
import java.util.List;

@Document(collection = "surveys")
public class Survey {

    @Id
    private String id;

    private String surveyId;
    private String name;
    private String description;
    private long uptime;

    @Field("openended_questions")
    private List<OpenEndedQuestion> openEndedQuestions;

    @Field("multivalued_questions")
    private List<MultiValuedQuestion> multiValuedQuestions;

    @Field("rating_questions")
    private List<RatingQuestion> ratingQuestions;

    public Survey(String surveyId, String name, String description, long uptime, List<OpenEndedQuestion> openEndedQuestions, List<MultiValuedQuestion> multiValuedQuestions, List<RatingQuestion> ratingQuestions) {
        this.surveyId = surveyId;
        this.name = name;
        this.description = description;
        this.uptime = uptime;
        this.openEndedQuestions = openEndedQuestions;
        this.multiValuedQuestions = multiValuedQuestions;
        this.ratingQuestions = ratingQuestions;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSurveyId() {
        return surveyId;
    }

    public void setSurveyId(String surveyId) {
        this.surveyId = surveyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getUptime() {
        return uptime;
    }

    public void setUptime(long uptime) {
        this.uptime = uptime;
    }

    public List<OpenEndedQuestion> getOpenEndedQuestions() {
        return openEndedQuestions;
    }

    public void setOpenEndedQuestions(List<OpenEndedQuestion> openEndedQuestions) {
        this.openEndedQuestions = openEndedQuestions;
    }

    public List<MultiValuedQuestion> getMultiValuedQuestions() {
        return multiValuedQuestions;
    }

    public void setMultiValuedQuestions(List<MultiValuedQuestion> multiValuedQuestions) {
        this.multiValuedQuestions = multiValuedQuestions;
    }

    public List<RatingQuestion> getRatingQuestions() {
        return ratingQuestions;
    }

    public void setRatingQuestions(List<RatingQuestion> ratingQuestions) {
        this.ratingQuestions = ratingQuestions;
    }
}




