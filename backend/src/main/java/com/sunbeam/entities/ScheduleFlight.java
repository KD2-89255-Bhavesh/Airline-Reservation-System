package com.sunbeam.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "schedule_flight")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleFlight {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sch_flight_id")
	private Long schFlightId;
	    
	@ManyToOne
	@JoinColumn(name = "flight_id")
	private AddFlights flight;
	    
	@ManyToOne
	@JoinColumn(name = "admin_id")
	private User admin;
	    
	@Column(name = "source", length = 50)
	private String source;
	    
	@Column(name = "destination", length = 50)
	private String destination;
	    
	@Column(name = "departure")
	private LocalDateTime departure;
	    
	@Column(name = "arrival")
	private LocalDateTime arrival;
	    
	@Column(name = "seat_cost_of_economy")
	private Long seatCostOfEconomy;
	    
	@Column(name = "seat_cost_of_business")
	private Long seatCostOfBusiness;
	    
	@Column(name = "seat_cost_of_first")
<<<<<<< HEAD
	private Long seatCostOfFirst;
	   
=======
	private Integer seatCostOfFirst;
	    
	@OneToMany(mappedBy = "schFlight", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> bookings = new ArrayList<>();
>>>>>>> main

}
