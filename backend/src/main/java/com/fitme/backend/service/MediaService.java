//package com.fitme.backend.service;
//
//import com.fitme.backend.Entity.MediaEntity;
//import com.fitme.backend.repo.MediaRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.UUID;
//
//@Service
//public class MediaService {
//
//    @Autowired
//    private MediaRepo mediaRepo;
//
//    public void uploadImage(MultipartFile file) throws IOException {
//        // Generate a unique filename
//        String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "_" + file.getOriginalFilename());
//
//        // Save the file to the file system
//        String uploadDir = "images/";
//        Path uploadPath = Paths.get(uploadDir);
//        if (!Files.exists(uploadPath)) {
//            Files.createDirectories(uploadPath);
//        }
//        try {
//            Files.copy(file.getInputStream(), uploadPath.resolve(fileName));
//        } catch (IOException e) {
//            throw new IOException("Could not save file: " + fileName, e);
//        }
//
//        // Save the image information to the database
//        MediaEntity mediaEntity = new MediaEntity();
//        mediaEntity.setName(fileName);
//        mediaEntity.setPath(uploadDir + fileName);
//        mediaRepo.save(mediaEntity);
//    }
//}
