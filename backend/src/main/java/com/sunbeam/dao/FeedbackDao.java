package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.dto.FeedbackResponseDTO;
import com.sunbeam.entities.Feedback;



@Repository
public interface FeedbackDao extends JpaRepository<Feedback, Long>{
//	@Query("SELECT new com.sunbeam.dto.FeedbackResponseDTO(" +
//	           "f.feedbackId, u.name, b.bookingId, b.flightName, f.rating, f.comments, f.submittedAt) " +
//	           "FROM Feedback f " +
//	           "JOIN f.user u " +
//	           "JOIN f.booking b")   
//	List<FeedbackResponseDTO> getAllFeedback();
//	List<Feedback> findAll();

}
