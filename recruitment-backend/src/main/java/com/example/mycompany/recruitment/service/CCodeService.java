package com.example.mycompany.recruitment.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.Map;

@Service
public class CCodeService implements CodeService {

    @Override
    public  String executeCode(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");

        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("script", code);
        requestBody.put("language", "c");
        requestBody.put("versionIndex", "0");
        requestBody.put("clientId", CLIENT_ID);
        requestBody.put("clientSecret", CLIENT_SECRET);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(JDoodle_URL, HttpMethod.POST, request, String.class);

        String result;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(response.getBody());

            String output = root.path("output").asText();
            String memory = root.path("memory").asText();
            String cpuTime = root.path("cpuTime").asText();

            result = output ;
        } catch (Exception e) {
            e.printStackTrace();
            result= "Error processing response from JDoodle API";
        }

        return result;
    }
}
