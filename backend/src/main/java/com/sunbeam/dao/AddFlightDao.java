package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.AddFlights;

public interface AddFlightDao extends JpaRepository<AddFlights, Long>{

}
