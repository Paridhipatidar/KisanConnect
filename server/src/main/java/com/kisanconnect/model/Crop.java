package com.kisanconnect.model;

import jakarta.persistence.*;
//import java.time.LocalDateTime;

import lombok.Data;

@Data
@Entity
public class Crop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int quantityKg;
    private int pricePerKg;
    private String imageUrl;
    private String location;
    private String farmerName;
    private String farmerPhone;
}
