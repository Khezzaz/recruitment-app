package com.example.mycompany.recruitment.service;

public interface CodeService {
    public static final String JDoodle_URL = "https://api.jdoodle.com/v1/execute";
    public static final String CLIENT_ID = "50bb1b2f8c558726aa2c184e48b42049";
    public static final String CLIENT_SECRET = "bb0ecf43a777700df4c43f9de85cd13b61b1a20a51e43e08b8bada2befd28901";

    public  String executeCode(String code);
}
