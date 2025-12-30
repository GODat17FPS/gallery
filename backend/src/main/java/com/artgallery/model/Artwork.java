package com.artgallery.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "artworks")
public class Artwork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String artist;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "artwork", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ArtworkImage> images = new ArrayList<>();

    public Artwork() {
    }

    public Artwork(String title, String artist, String description) {
        this.title = title;
        this.artist = artist;
        this.description = description;
    }

    // Helper method to add images
    public void addImage(ArtworkImage image) {
        images.add(image);
        image.setArtwork(this);
    }

    public void removeImage(ArtworkImage image) {
        images.remove(image);
        image.setArtwork(null);
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

    public List<ArtworkImage> getImages() {
        return images;
    }

    public void setImages(List<ArtworkImage> images) {
        this.images = images;
    }
}
