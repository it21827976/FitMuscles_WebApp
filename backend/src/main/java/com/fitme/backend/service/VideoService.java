package com.fitme.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitme.backend.Config.UpdateModel;
import com.fitme.backend.Entity.Videos;
import com.fitme.backend.dto.ResourceNotFound;
import com.fitme.backend.repo.VideoRepository;

@Service
public class VideoService implements VideoInterface   {

    @Autowired
    private VideoRepository videoRepository ;


    @Override
    public Videos createPost(Videos videos) {
        // long videoCount = videoRepository.count();
        // if (videoCount >= 3) {
        //     throw new ResourceNotFound("402", "You can only add a maximum of 3 videos");
        // }

        if (videos.getTitle().isEmpty()) {
            throw new ResourceNotFound("402", "Please fill in the required details");
        }

        try {
            videos.setAddedDate(new Date());
            videos.setVideoName("default.mp4");
            return videoRepository.save(videos);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFound("401", "Hey, your data is empty");
        }
    }

    @Override
    public Videos getVideosById(Integer id) {
        Videos video = this.videoRepository.findById(id).orElseThrow(() -> new ResourceNotFound("504","id is not present"));
        return video ;
    }

    @Override
    public List<Videos> getAllVideos() {
        List<Videos> listOfVideo  = null ;
        try {
            listOfVideo = this.videoRepository.findAll();
            return listOfVideo ;
        }catch(Exception e) {
            throw new ResourceNotFound("404","i am sorry "+e.getMessage());
        }
    }

    @Override
    public Videos updatePost(Videos videos, Integer id) {
        Videos video = this.videoRepository.findById(id).orElseThrow(()-> new ResourceNotFound("501","Id not found"));

        video.setTitle(videos.getTitle());
        video.setDescription(videos.getDescription());
        video.setTags(videos.getTags());
        video.setAddedDate(new Date());
        Videos updateVideo =this.videoRepository.save(video);
        return updateVideo ;
    }

    @Override
    public void deleteVideos(Integer id) {
        Videos video = this.videoRepository.findById(id).orElseThrow(()-> new ResourceNotFound("403","video id not found"));
        this.videoRepository.delete(video);

    }

    @Override
    public UpdateModel updateModel(UpdateModel updateModel, int id) {
        Videos video = this.videoRepository.findById(id).orElseThrow(()-> new ResourceNotFound("501","Id not found"));
        updateModel.setId(id);
        video.setTitle(updateModel.getTitle());
        video.setDescription(updateModel.getDescription());
        video.setTags(updateModel.getTags());
        video.setAddedDate(new Date());
        this.videoRepository.save(video);
        return updateModel ;
    }


}

