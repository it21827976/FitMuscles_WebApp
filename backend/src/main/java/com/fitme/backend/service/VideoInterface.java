package com.fitme.backend.service;

import java.util.List;

import com.fitme.backend.Config.UpdateModel;
import com.fitme.backend.Entity.Videos;

public interface VideoInterface {

    public Videos createPost(Videos videos);

    public Videos getVideosById(Integer id);

    public List<Videos> getAllVideos();

    public Videos updatePost(Videos videos , Integer id);

    public void deleteVideos(Integer id);

    public UpdateModel updateModel(UpdateModel updateModel, int id);
}