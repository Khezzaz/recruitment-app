package com.example.mycompany.recruitment.service;

public interface CodeService {
    public static final String JDoodle_URL = "https://api.jdoodle.com/v1/execute";
    public static final String CLIENT_ID = "50bb1b2f8c558726aa2c184e48b42049";
    public static final String CLIENT_SECRET = "f9bac846e8a4e8da6a6f6eafce40d6a80e8dd159f364f26ee549f940e611dfc2";

    public  String executeCode(String code);
}
