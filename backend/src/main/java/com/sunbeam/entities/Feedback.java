package com.sunbeam.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "feedback")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "feedback_id")
	    private Integer feedbackId;
	    
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;
	    
	    @OneToOne
	    @JoinColumn(name = "booking_id")
	    private Booking booking;
	    
	    @Column(name = "rating")
	    private Integer rating;
	    
	    @Column(name = "comments", columnDefinition = "TEXT")
	    private String comments;
	    
	    @Column(name = "submitted_at", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
	    private LocalDateTime submittedAt;
}
