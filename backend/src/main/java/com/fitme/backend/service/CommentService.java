package com.fitme.backend.service;


import com.fitme.backend.Entity.CommentData;
import com.fitme.backend.dto.Commentdto;
import com.fitme.backend.repo.Commentrepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CommentService {

    @Autowired
    private Commentrepo commentRepo;

    @Autowired
    private ModelMapper modelMapper;

    public Commentdto saveComment(Commentdto commentdto){
        CommentData comment = modelMapper.map(commentdto, CommentData.class);
        commentRepo.save(comment);
        return commentdto;
    }

    //get All for one postId(not id)
    public List<Commentdto> getAll(int postid){
        List<CommentData> comment = commentRepo.findAll().stream()
                .filter(comment1 -> comment1.getPid() == postid)
                .toList();
        return comment.stream().map(comment1 -> modelMapper.map(comment1, Commentdto.class)).toList();
    }

    public void deleteComment(int id) {
        commentRepo.deleteById(id);
    }

    public List<Commentdto> getAllcomm() {
        List<CommentData> comment = commentRepo.findAll();
        return comment.stream().map(comment1 -> modelMapper.map(comment1, Commentdto.class)).toList();
    }
}
