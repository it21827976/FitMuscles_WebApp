package com.fitme.backend.controller;

import com.fitme.backend.dto.Commentdto;
import com.fitme.backend.service.CommentService;
import com.fitme.backend.service.WorkopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/comment")
@CrossOrigin
public class controllerComment {

    @Autowired
    private CommentService commentService;

    @GetMapping("/getcomment")
    public List<Commentdto> getcomment() {
        return commentService.getAllcomm();
    }

    @GetMapping("/getcommentone/{postid}")
    public List<Commentdto> getcomment(@PathVariable int postid){
        return commentService.getAll(postid);


    }

    @PostMapping("/savecomment")
    public Commentdto savecomment(@RequestBody Commentdto commentdto){
        return commentService.saveComment(commentdto);


    }

    @DeleteMapping("/deletecomment/{id}")
    public String deletecomment(@PathVariable int id){
        commentService.deleteComment(id);
        return "Comment Deleted";
    }






}
