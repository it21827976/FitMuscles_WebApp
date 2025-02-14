package com.fitme.backend.service;

import com.fitme.backend.Entity.BodyData;
import com.fitme.backend.dto.BodyDatadto;
import com.fitme.backend.repo.Bodydatarepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class BodyDataService {

    @Autowired
    private Bodydatarepo bodydatarepo;

    @Autowired
    private ModelMapper modelMapper;

    public BodyDatadto saveBodyData(BodyDatadto bodyDatadto){
        BodyData bodyData = modelMapper.map(bodyDatadto, BodyData.class);
        bodydatarepo.save(bodyData);
        return bodyDatadto;
    }

    public List<BodyDatadto> getAll(){
        List<BodyData> bodyData = bodydatarepo.findAll();
        return bodyData.stream().map(bodyData1 -> modelMapper.map(bodyData1, BodyDatadto.class)).toList();
    }

    public BodyDatadto updateBodyData(BodyDatadto bodyDatadto){
        BodyData bodyData = modelMapper.map(bodyDatadto, BodyData.class);
        bodydatarepo.save(bodyData);
        return bodyDatadto;
    }

    public void deleteBodyData(int userid){
        bodydatarepo.deleteById(userid);
    }

    public BodyDatadto getOne(int userid){
        BodyData bodyData = bodydatarepo.findById(userid).get();
        return modelMapper.map(bodyData, BodyDatadto.class);
    }

}