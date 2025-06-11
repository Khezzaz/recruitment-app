package com.example.mycompany.recruitment.service;

import com.example.mycompany.recruitment.dto.AdminDTO;
import com.example.mycompany.recruitment.model.Admin;
import com.example.mycompany.recruitment.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository  adminRepository;

    public boolean authentificat(AdminDTO adminDTO){
        Admin admin = adminRepository.findByUsername(adminDTO.getUsername());
        if(adminDTO.getUsername().equals(admin.getUsername())){
            return adminDTO.getPassword().equals(admin.getPassword());
        }
        return false;
    }
}
