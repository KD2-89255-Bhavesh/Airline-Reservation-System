package com.sunbeam.entities;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="title",nullable=false)
	private Title title;
	
	@Column(name="first_name",nullable=false,length=50)
	private String firstName;
	
	@Column(name="last_name",nullable=false,length=50)
	private String lastName;
	
	@Column(name="email",nullable=false,length=50)
	private String email;
	
	@Column(name="password_hash",nullable = false, length=255)
	private String passwordHash;
	
	@Column(name="mobile_no",nullable=false,length=10)
	private String mobileNo;
	
	@Enumerated(EnumType.STRING)
	@Column(name="role",nullable=false)
	private Role role;
	
	@OneToMany(mappedBy="admin", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<AirlineDetail> managedAirlines = new ArrayList<>();
	
	@OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
	@JsonIgnore
    private List<AddFlights> managedFlights = new ArrayList<>();
    
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ScheduleFlight> scheduledFlights = new ArrayList<>();
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Feedback> feedbacks = new ArrayList<>();
	

}
