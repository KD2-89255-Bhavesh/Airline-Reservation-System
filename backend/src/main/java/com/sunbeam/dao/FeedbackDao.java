package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.dto.FeedbackDto;
import com.sunbeam.entities.Feedback;



@Repository
public interface FeedbackDao extends JpaRepository<Feedback, Long>{

}
