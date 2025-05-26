package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin ,Integer> {
    Admin findByUsername(String username);
}
