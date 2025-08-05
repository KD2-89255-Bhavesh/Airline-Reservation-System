package com.sunbeam.dto;

import com.sunbeam.entities.Passenger;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PassengerDto {
    private String name;
    private Integer age;
    private Passenger.Gender gender;
    private String seatNumber;
    private String passportNumber;
    private String specialRequests;
    private Passenger.MealPreference mealPreference;
}
