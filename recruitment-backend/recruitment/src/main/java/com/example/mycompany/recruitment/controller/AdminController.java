package com.example.mycompany.recruitment.controller;

import com.example.mycompany.recruitment.dto.AdminDTO;
import com.example.mycompany.recruitment.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/admins")
public class AdminController {
    @Autowired
    private AdminService adminService ;

    @PostMapping("/authentificat")
    public ResponseEntity<Boolean> authentificat(@RequestBody AdminDTO adminDTO){
      Boolean result = adminService.authentificat(adminDTO);
      if (result){
          return  ResponseEntity.ok(true);

      }
        return ResponseEntity.badRequest().build();
    }


}
