//package com.fitme.backend.controller;
//
//import com.fitme.backend.Entity.MediaEntity;
//import com.fitme.backend.repo.MediaRepo;
//import com.fitme.backend.service.MediaService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.List;
//
//@RestController
//public class MediaController {
//
//    @Autowired
//    private MediaService mediaService;
//
//    @Autowired
//    private MediaRepo mediaRepo;
//
//    @PostMapping("/upload")
//    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
//        try {
//            mediaService.uploadImage(file);
//            return ResponseEntity.ok().build();
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//
//    @GetMapping("/images")
//    public ResponseEntity<List<MediaEntity>> getAllImages() {
//        List<MediaEntity> images = mediaRepo.findAll();
//        return ResponseEntity.ok(images);
//    }
//}
