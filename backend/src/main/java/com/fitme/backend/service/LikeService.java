package com.fitme.backend.service;

import com.fitme.backend.Entity.LikeData;
import com.fitme.backend.dto.Likedto;
import com.fitme.backend.repo.Likerepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class LikeService {

    @Autowired
    private Likerepo LikeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public Likedto saveLike(Likedto likedata){
        LikeData like = modelMapper.map(likedata, LikeData.class);
        LikeRepo.save(like);
        return modelMapper.map(like, Likedto.class);

    }


    public List<LikeData> getAll() {
        List<LikeData> like = LikeRepo.findAll();
        return like;
    }

    public LikeData getOne(int pid) {
        LikeData like = LikeRepo.findAll().stream()
                .filter(like1 -> like1.getPid() == pid)
                .findFirst().orElse(null);
        return like;





    }
}
