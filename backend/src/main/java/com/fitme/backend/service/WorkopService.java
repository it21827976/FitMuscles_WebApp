package com.fitme.backend.service;

import com.fitme.backend.Entity.WorkopData;
import com.fitme.backend.dto.Workopdto;
import com.fitme.backend.repo.Workoprepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkopService {

    @Autowired
    private Workoprepo workopRepo;

    @Autowired
    private ModelMapper modelMapper;

    public Workopdto saveWorkop(Workopdto workopdto){
        WorkopData workop = modelMapper.map(workopdto, WorkopData.class);
        workopRepo.save(workop);
        return workopdto;
    }

    public List<Workopdto> getAll(){
        List<WorkopData> workop = workopRepo.findAll();
        return workop.stream().map(workop1 -> modelMapper.map(workop1, Workopdto.class)).toList();
    }

    //get All for one userId(not id)
    public List<WorkopData> getOneAll(int userid){
        List<WorkopData> workop = workopRepo.findAll().stream()
                .filter(workop1 -> workop1.getUserid() == userid)
                .map(workop1 -> modelMapper.map(workop1, WorkopData.class))
                .toList();
        return workop.stream().map(workop1 -> modelMapper.map(workop1, WorkopData.class)).toList();
    }

    public Workopdto updateWorkop(Workopdto workopdto){
        WorkopData workop = modelMapper.map(workopdto, WorkopData.class);
        workopRepo.save(workop);
        return workopdto;
    }

    public void deleteWorkop(int id){
        workopRepo.deleteById(id);
    }

    public Workopdto getWorkop(int id){
        WorkopData workop = workopRepo.findById(id).orElse(null);
        return modelMapper.map(workop, Workopdto.class);
    }

}
