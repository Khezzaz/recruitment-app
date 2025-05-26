package com.example.mycompany.recruitment.mappers;

public interface Mapper<Model , Dto> {

    public Model convertToEnt(Dto dto);
    public Dto convertToDTO(Model model);
}
