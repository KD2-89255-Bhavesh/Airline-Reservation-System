package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.AirlineDetail;

public interface AddAirlineDao extends JpaRepository<AirlineDetail, Long>{
	 Optional<AirlineDetail> findByAirlineName(String airlineName);
}
