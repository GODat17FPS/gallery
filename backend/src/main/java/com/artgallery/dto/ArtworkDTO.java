package com.artgallery.dto;

import java.util.List;

public class ArtworkDTO {
    private Long id;
    private String title;
    private String artist;
    private String description;
    private List<String> imageUrls;
    private String thumbnailUrl;

    public ArtworkDTO() {
    }

    public ArtworkDTO(Long id, String title, String artist, String description, List<String> imageUrls) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.description = description;
        this.imageUrls = imageUrls;
        this.thumbnailUrl = imageUrls != null && !imageUrls.isEmpty() ? imageUrls.get(0) : null;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
        this.thumbnailUrl = imageUrls != null && !imageUrls.isEmpty() ? imageUrls.get(0) : null;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }
}
