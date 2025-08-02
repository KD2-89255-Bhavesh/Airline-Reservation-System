package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AirlineDTO;
import com.sunbeam.service.FlightServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {
	
	@Autowired
	public FlightServiceImpl flightServiceImpl;

	@PostMapping("/addairline")
	public ResponseEntity<?> addAirline(@RequestBody AirlineDTO dto) {
        return ResponseEntity.ok(flightServiceImpl.addAirline(dto));
    }
	
}
