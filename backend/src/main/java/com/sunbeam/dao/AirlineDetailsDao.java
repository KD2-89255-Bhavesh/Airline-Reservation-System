package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.AirlineDetail;

@Repository
public interface AirlineDetailsDao extends JpaRepository<AirlineDetail, Long>{

}
