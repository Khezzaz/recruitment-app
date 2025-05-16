package com.example.mycompany.recruitment.mappers;

import com.example.mycompany.recruitment.dto.AdminDTO;
import com.example.mycompany.recruitment.model.Admin;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminMapper implements Mapper<Admin , AdminDTO>{
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public Admin convertToEnt(AdminDTO adminDTO) {
        return modelMapper.map(adminDTO , Admin.class);
    }

    @Override
    public AdminDTO convertToDTO(Admin admin) {
        return modelMapper.map(admin , AdminDTO.class);
    }
}
