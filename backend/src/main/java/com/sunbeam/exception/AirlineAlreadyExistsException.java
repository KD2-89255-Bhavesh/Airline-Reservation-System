package com.sunbeam.exception;

public class AirlineAlreadyExistsException extends RuntimeException {
	public AirlineAlreadyExistsException(String message) {
        super(message);
    }
}
