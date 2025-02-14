package com.fitme.backend.controller;

import com.fitme.backend.Entity.WorkopData;
import com.fitme.backend.dto.Workopdto;
import com.fitme.backend.service.WorkopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/workop")
@CrossOrigin
public class controllerwop {

    @Autowired
    private WorkopService workopService;

    @GetMapping("/getwop")
    public List<Workopdto> getwop(){
        return workopService.getAll();
    }

    @PostMapping("/savewop")
    public String savewop(@RequestBody Workopdto workopdto){
        workopService.saveWorkop(workopdto);
        return "Workout Plan Saved";
    }
    @GetMapping("/getonewop/{userid}")
    public List<WorkopData> getonewop(@PathVariable int userid){
        return workopService.getOneAll(userid);
    }

    @PutMapping("/updatewop")
    public String updatewop(@RequestBody Workopdto workopdto){
        workopService.updateWorkop(workopdto);
        return "Workout Plan Updated";
    }

    @DeleteMapping("/deletewop/{id}")
    public String deletewop(@PathVariable int id){
        workopService.deleteWorkop(id);
        return "Workout Plan Deleted";
    }

    @GetMapping("/getwopr/{id}")
    public Workopdto getwop(@PathVariable int id){
        return workopService.getWorkop(id);
    }

}
