package com.fitme.backend.Config;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class FileModel {

    private String videoFileName ;
    private Double duration ;

    public void setVideoFileName(String videoFileName) {
        this.videoFileName = videoFileName;
    }

    public String getVideoFileName() {
        return videoFileName;
    }
}
