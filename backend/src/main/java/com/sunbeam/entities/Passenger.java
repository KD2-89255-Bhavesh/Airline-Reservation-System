package com.sunbeam.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "passenger")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Passenger {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private Integer pId;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "title", nullable = false)
    private Title title;
    
    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;
    
    @Column(name = "last_name", nullable = false, length = 50)
    private String lastName;
    
    @Column(name = "mobile_no", length = 15)
    private String mobileNo;
    
    @Column(name = "dob")
    private LocalDate dob;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;
    
    @ManyToOne
    @JoinColumn(name = "booking_id")
    @JsonManagedReference
    private Booking booking;
    
    public enum Gender {
        Male, Female, Other
    }
}
