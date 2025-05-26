package com.example.mycompany.recruitment.repository;

import com.example.mycompany.recruitment.model.Submission;
import com.example.mycompany.recruitment.model.SubmissionDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionDetailRepository extends JpaRepository<SubmissionDetail , Integer> {
   public   List<SubmissionDetail> findBySubmissionId(int id);
}
