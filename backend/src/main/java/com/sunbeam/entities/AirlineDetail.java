package com.sunbeam.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="airline_details")
public class AirlineDetail {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="airline_id")
	private Long airlineId;
	
	@Column(name="airline_name",nullable = false, length = 50)
	private String airlineName;
	
	@Column(name="no_of_flights",nullable = false)
	private Long noOfFlights;
	
	@Column(name="date",nullable=false)
	private LocalDate date;
	
	@ManyToOne
	@JoinColumn(name="admin_id")
	private User admin;
	
}
