package com.example.backend.Entity;

class RatingQuestion {
    private String question;
    private int maxRating;

    public RatingQuestion(String question, int maxRating) {
        this.question = question;
        this.maxRating = maxRating;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getMaxRating() {
        return maxRating;
    }

    public void setMaxRating(int maxRating) {
        this.maxRating = maxRating;
    }
}