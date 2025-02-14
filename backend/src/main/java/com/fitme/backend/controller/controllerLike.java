package com.fitme.backend.controller;

import com.fitme.backend.Entity.LikeData;
import com.fitme.backend.dto.Likedto;
import com.fitme.backend.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/like")
@CrossOrigin
public class controllerLike {


    @Autowired
    private LikeService likeService;


    @GetMapping("/getlike")
    public List<LikeData> getlikes(){
        return likeService.getAll();

    }

    @PostMapping("/savelike")
    public Likedto savelike(@RequestBody Likedto likedto){
        return likeService.saveLike(likedto);

    }

    @GetMapping("/getOnelike/{pid}")
    public LikeData getOne(@PathVariable int pid){
        return likeService.getOne(pid);
    }

}
