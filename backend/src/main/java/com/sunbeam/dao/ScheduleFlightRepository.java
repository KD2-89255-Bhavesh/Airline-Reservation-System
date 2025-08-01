package com.sunbeam.dao;

import java.time.LocalDate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.ScheduleFlight;

public interface ScheduleFlightRepository extends JpaRepository<ScheduleFlight, Long> {
	List<ScheduleFlight>  findBySourceAndDestinationAndDeparture(String source,String destination,LocalDate departure);
}
