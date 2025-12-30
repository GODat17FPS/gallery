package com.artgallery.controller;

import com.artgallery.dto.ArtworkDTO;
import com.artgallery.service.ArtworkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artworks")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtworkController {

    private final ArtworkService artworkService;

    public ArtworkController(ArtworkService artworkService) {
        this.artworkService = artworkService;
    }

    @GetMapping
    public ResponseEntity<List<ArtworkDTO>> getAllArtworks() {
        List<ArtworkDTO> artworks = artworkService.getAllArtworks();
        return ResponseEntity.ok(artworks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtworkDTO> getArtworkById(@PathVariable Long id) {
        return artworkService.getArtworkById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/images")
    public ResponseEntity<List<String>> getArtworkImages(@PathVariable Long id) {
        List<String> images = artworkService.getArtworkImages(id);
        if (images.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(images);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ArtworkDTO>> searchArtworks(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String artist) {

        List<ArtworkDTO> results;

        if (title != null && !title.isEmpty()) {
            results = artworkService.searchByTitle(title);
        } else if (artist != null && !artist.isEmpty()) {
            results = artworkService.searchByArtist(artist);
        } else {
            results = artworkService.getAllArtworks();
        }

        return ResponseEntity.ok(results);
    }
}
