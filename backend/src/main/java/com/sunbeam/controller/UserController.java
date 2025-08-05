package com.sunbeam.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BookingRequestDTO;

import com.sunbeam.dto.BookingResponseDTO;

import com.sunbeam.dto.FlightSearchResponseDto;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.service.AuthService;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private AuthService authService;

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO dto) {
		return ResponseEntity.ok(authService.register(dto));
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO loginRequest) {
		return ResponseEntity.ok(authService.login(loginRequest.getEmail(), loginRequest.getPassword()));
	}

	@GetMapping("/flightlist")
	public ResponseEntity<List<FlightSearchResponseDto>> searchFlights(@RequestParam String from,
			@RequestParam String to, @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
		List<FlightSearchResponseDto> result = userService.flightSearch(from, to, date);
		return ResponseEntity.ok(result);
	}

	@PostMapping("/bookings")
	public ResponseEntity<BookingResponseDTO> createBooking(@RequestBody BookingRequestDTO bookingRequestDto) {
		BookingResponseDTO responseDto = userService.createBooking(bookingRequestDto);
		return ResponseEntity.ok(responseDto);
	}
}
