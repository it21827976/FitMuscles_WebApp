package com.fitme.backend.controller;

import com.fitme.backend.dto.BodyDatadto;
import com.fitme.backend.service.BodyDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/bodydata")
@CrossOrigin
public class controllerbd {

    @Autowired
    private BodyDataService bodyDataService;

    @GetMapping("/getbd")
    public List<BodyDatadto> getbd(){
        return bodyDataService.getAll();
    }

    @PostMapping("/savebd")
    public String savebd(@RequestBody BodyDatadto bodyDatadto){
        bodyDataService.saveBodyData(bodyDatadto);
        return "Data Saved";
    }

    @PutMapping("/updatebd")
    public BodyDatadto updatebd(@RequestBody BodyDatadto bodyDatadto){
        return bodyDataService.saveBodyData(bodyDatadto);
    }

    @DeleteMapping("/deletebd/{userid}")
    public String deletebd(@PathVariable int userid){
        bodyDataService.deleteBodyData(userid);
        return "Data Deleted";
    }

    @GetMapping("/getonebd/{userid}")
    public BodyDatadto getonebd(@PathVariable int userid){
        return bodyDataService.getOne(userid);
    }



}
