package com.sunbeam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication 
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
//	public ModelMapper modelMapper() {
//		System.out.println("in model mapper creation");
//		ModelMapper mapper = new ModelMapper();
//		mapper.getConfiguration()
//				.setMatchingStrategy(MatchingStrategies.STRICT)
//				.setPropertyCondition(Conditions.isNotNull());
//		return mapper;
//
//	}

}
