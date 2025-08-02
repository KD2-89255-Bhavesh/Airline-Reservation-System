package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.AirlineDetail;

public interface AddAirlineDao extends JpaRepository<AirlineDetail, Long>{
	
}
